import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import handlebars from 'vite-plugin-handlebars'
import { globSync } from 'glob'
import * as path from 'path'
import autoprefixer from "autoprefixer"

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: [
        path.resolve(__dirname, './partials'),
        ...globSync('./partials/**/*/').map(folderName =>
          path.resolve(__dirname, folderName.replace(/\\/g, '/'))
        ),
      ],
    }),
    {
      name: 'watch-handlebars',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.hbs') || file.endsWith('.html')) {
          server.ws.send({
            type: 'full-reload',
            path: '*'
          })
        }
      }
    }
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/scss', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/img', import.meta.url))
    }
  },
  base: '',
  build: {
    rollupOptions: {
      input: [
        ...globSync('./*.html').map((name) => path.resolve(__dirname, name))
      ],
      output: {
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})