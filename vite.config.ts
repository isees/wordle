import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // ...其他配置
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
      output: {
        manualChunks: undefined // 确保单页应用正确打包
      }
    }
  },
  root: '.', // 改为当前目录
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})