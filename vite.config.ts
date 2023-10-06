import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      entryRoot: resolve(__dirname, './src'),
    }),
  ],
  resolve: {
    alias: {
      'react-mobile-picker': resolve(__dirname, './src'),
    },
  },
  build: {
    src: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Picker',
      fileName: 'react-mobile-picker',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
    },
  },
})
