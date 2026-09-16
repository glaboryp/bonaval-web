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
        manualChunks(id) {
          if (id.includes('/node_modules/vue/') || id.includes('/node_modules/@vue/')) return 'vue'
          if (id.includes('/node_modules/three/')) return 'three'
          if (id.includes('/node_modules/gsap/')) return 'gsap'
        },
      },
    },
    // Opcional: subir umbral del aviso mientras iteramos
    chunkSizeWarningLimit: 900,
  },
})
