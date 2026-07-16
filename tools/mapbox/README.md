# Mapbox tileset uploader

A small, general-purpose script to upload any Mapbox-supported source file
(GeoTIFF, MBTiles, GeoJSON, Shapefile `.zip`, etc.) to the account's tilesets
via the [Mapbox Uploads API](https://docs.mapbox.com/api/maps/uploads/), wait
for processing, and print the resulting tileset ID.

Kept in its own folder with its own `package.json` so the AWS SDK dependency
never touches the app's dependency tree.

## One-time setup

1. **Create a secret token.** In [Mapbox account → tokens](https://account.mapbox.com/access-tokens/),
   create a token with **only** the `uploads:read` and `uploads:write` secret
   scopes. Copy the `sk.…` value (shown once).
2. **Store it (gitignored).** Add it to the repo's root `.env` (already
   gitignored, and NOT exposed to the app bundle):
   ```
   MAPBOX_SECRET_TOKEN=sk.xxxxxxxx
   ```
3. **Install deps** (once):
   ```
   cd tools/mapbox && npm install
   ```

## Usage

From `tools/mapbox/`:

```bash
node --env-file=../../.env upload.mjs <file> [tilesetId] [--name "Display Name"]
```

- `<file>` — path to the source file.
- `[tilesetId]` — optional; the part after `username.` (≤32 chars, `a-z0-9_-`).
  Defaults to a sanitized version of the file name.
  **Reusing an existing ID replaces that tileset's data.**
- `--name` — optional display name shown in Mapbox Studio.

The username is derived from the token, so no account is hard-coded.

### Example

```bash
node --env-file=../../.env upload.mjs "C:/Users/IanDM/Downloads/uga_hrsl_gray_rgba.tif"
# → ✔ Tileset ready: iandmuir.uga_hrsl_gray_rgba
```

The final line prints `TILESET_ID=<username>.<id>` for scripting.

## Notes

- The secret token is only ever read from the environment — never committed.
  Scope it to uploads only so a leak can't touch billing/account/deletion.
- Rasters are uploaded **as-is**. Any styling/colorizing (e.g. a color ramp) is
  a separate GDAL step done per-layer before upload, not part of this tool.
