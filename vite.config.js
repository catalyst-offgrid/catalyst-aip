import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Migrated from Parcel 1.x -> Vite (Parcel 1 depends on `deasync`, which no
// longer builds on modern Node). Notes:
// - All JSX lives in `.js` files, so esbuild is told to treat src `.js` as JSX.
// - The existing code reads `process.env.*` directly; we shim those at build
//   time via `define` so config/index.js and Map.js keep working unchanged and
//   the CI env var name (MAPBOX_ACCESS_TOKEN) stays the same.
// - `.csv` files are imported for their URL and fetched with d3.csv(), so they
//   are treated as static assets.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isDev = mode !== 'production'

  return {
    plugins: [
      // Ignore the project's babel.config.js (kept for Jest) so preset-env
      // doesn't downlevel ESM to CJS and break Vite.
      react({ babel: { babelrc: false, configFile: false } }),
    ],
    define: {
      'process.env.MAPBOX_ACCESS_TOKEN': JSON.stringify(
        env.MAPBOX_ACCESS_TOKEN || ''
      ),
      'process.env.NODE_ENV': JSON.stringify(
        isDev ? 'development' : 'production'
      ),
    },
    assetsInclude: ['**/*.csv'],
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: { '.js': 'jsx' },
      },
    },
    server: {
      port: 8000,
      open: false,
    },
    build: {
      outDir: 'dist',
    },
  }
})
