#!/usr/bin/env node
/**
 * General-purpose Mapbox tileset uploader.
 *
 * Uploads any Mapbox-supported source file (GeoTIFF, MBTiles, GeoJSON, KML,
 * Shapefile zip, etc.) to the account's tilesets via the Mapbox Uploads API,
 * waits for processing, and prints the resulting tileset ID.
 *
 * Usage:
 *   node upload.mjs <file> [tilesetId] [--name "Display Name"]
 *
 *   <file>        Path to the source file to upload.
 *   [tilesetId]   Optional. The part after "username." (<=32 chars, a-z0-9_-).
 *                 Defaults to a sanitized version of the file name.
 *                 NOTE: reusing an existing ID REPLACES that tileset's data.
 *   --name        Optional human-readable name shown in Mapbox Studio.
 *
 * Auth: reads MAPBOX_SECRET_TOKEN (an sk.* token with uploads:write scope)
 * from the environment. Run with Node's --env-file so it never lives in code:
 *   node --env-file=../../.env upload.mjs <file>
 *
 * The username is derived from the token, so this works for any account.
 */
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { createReadStream, statSync, existsSync } from 'node:fs'
import { basename, extname } from 'node:path'

const API = 'https://api.mapbox.com/uploads/v1'

function die(msg) {
  console.error(`\n✖ ${msg}\n`)
  process.exit(1)
}

// ---- args ----------------------------------------------------------------
const args = process.argv.slice(2)
const nameFlagIdx = args.indexOf('--name')
let displayName = null
if (nameFlagIdx !== -1) {
  displayName = args[nameFlagIdx + 1]
  args.splice(nameFlagIdx, 2)
}
const [file, tilesetArg] = args
if (!file) die('Usage: node upload.mjs <file> [tilesetId] [--name "Name"]')
if (!existsSync(file)) die(`File not found: ${file}`)

// ---- auth / username -----------------------------------------------------
const TOKEN = process.env.MAPBOX_SECRET_TOKEN
if (!TOKEN) {
  die(
    'MAPBOX_SECRET_TOKEN is not set. Create an sk.* token with uploads:write\n' +
      '  scope and pass it via: node --env-file=../../.env upload.mjs <file>'
  )
}
if (!TOKEN.startsWith('sk.')) {
  die(
    'MAPBOX_SECRET_TOKEN must be a SECRET token (sk.*) with uploads:write.\n' +
      '  A public pk.* token cannot create tilesets.'
  )
}
function usernameFromToken(t) {
  try {
    const payload = JSON.parse(
      Buffer.from(t.split('.')[1], 'base64url').toString('utf8')
    )
    return payload.u
  } catch {
    return null
  }
}
const USER = usernameFromToken(TOKEN)
if (!USER) die('Could not read the username from MAPBOX_SECRET_TOKEN.')

// ---- tileset id ----------------------------------------------------------
function sanitizeId(name) {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 32) || 'upload'
  )
}
// Accept "username.foo" or just "foo" for the tileset arg.
const rawId = tilesetArg
  ? tilesetArg.includes('.')
    ? tilesetArg.split('.').slice(1).join('.')
    : tilesetArg
  : sanitizeId(basename(file, extname(file)))
const tilesetId = `${USER}.${sanitizeId(rawId)}`
// Mapbox rejects names with characters outside letters/numbers/space/_/-,
// and caps at 64 chars. Default to the file name without its extension.
function sanitizeName(n) {
  return (
    n
      .replace(/[^\w \-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 64) || 'tileset'
  )
}
const name = sanitizeName(displayName || basename(file, extname(file)))

// ---- Mapbox REST helpers -------------------------------------------------
async function mapbox(path, init) {
  const sep = path.includes('?') ? '&' : '?'
  const res = await fetch(`${API}${path}${sep}access_token=${TOKEN}`, init)
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(
      `Mapbox API ${res.status}: ${body.message || JSON.stringify(body)}`
    )
  }
  return body
}

async function main() {
  const size = statSync(file).size
  console.log(`\n→ Uploading ${basename(file)} (${(size / 1e6).toFixed(1)} MB)`)
  console.log(`  account:  ${USER}`)
  console.log(`  tileset:  ${tilesetId}`)

  // 1) temporary S3 staging credentials
  const creds = await mapbox(`/${USER}/credentials`, { method: 'POST' })

  // 2) stage the file to S3 (streamed, so large files don't load into memory)
  const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey,
      sessionToken: creds.sessionToken,
    },
  })
  process.stdout.write('  staging…')
  await s3.send(
    new PutObjectCommand({
      Bucket: creds.bucket,
      Key: creds.key,
      Body: createReadStream(file),
      ContentLength: size,
    })
  )
  console.log(' done')

  // 3) kick off tileset processing
  const upload = await mapbox(`/${USER}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: creds.url, tileset: tilesetId, name }),
  })

  // 4) poll until complete or error
  process.stdout.write('  processing')
  let status = upload
  while (!status.complete && !status.error) {
    await new Promise((r) => setTimeout(r, 3000))
    process.stdout.write('.')
    status = await mapbox(`/${USER}/${upload.id}`)
  }
  console.log('')

  if (status.error) die(`Mapbox processing failed: ${status.error}`)

  console.log(`\n✔ Tileset ready: ${status.tileset}`)
  console.log(`  TileJSON: https://api.mapbox.com/v4/${status.tileset}.json`)
  console.log(`  Studio:   https://studio.mapbox.com/tilesets/${status.tileset}/\n`)
  // machine-readable last line for scripting
  console.log(`TILESET_ID=${status.tileset}`)
}

main().catch((e) => die(e.message))
