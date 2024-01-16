import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  build: {
    minify: 'terser'
  },
  resolve: {
    alias: [
      { find: /^@(?=\/)/, replacement: path.resolve(__dirname, './src') }
    ]
  },
  plugins: [vue(), splitVendorChunkPlugin()]
})
