import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    alias: {
        '@': path.resolve(__dirname, './src')
    },
    server: {
        proxy: {
          '/api/v1': {
              target: 'http://localhost:8080'
          }
        }
    },
    plugins: [vue()]
})
