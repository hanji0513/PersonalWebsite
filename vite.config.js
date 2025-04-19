import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: '/PersonalWebsite/',
  // base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      external: [
        // 将无法解析的图片路径添加到这里
        '/PersonalWebsite/images/Linkedin.png',
        '/PersonalWebsite/images/en.png',
        '/PersonalWebsite/images/zh.png',
        '/PersonalWebsite/images/info.png',
        '/PersonalWebsite/images/project1.png',
        '/PersonalWebsite/images/project2.png',
        '/PersonalWebsite/images/email.png',
      ],
    },
  },
})
