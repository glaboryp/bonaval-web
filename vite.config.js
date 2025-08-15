import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          three: ['three'],
          gsap: ['gsap'],
        },
      },
    },
    // Opcional: subir umbral del aviso mientras iteramos
    chunkSizeWarningLimit: 900,
  },
})
