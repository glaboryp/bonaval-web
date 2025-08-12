<template>
  <nav class="sticky-nav">
    <a
      v-for="s in secciones"
      :key="s.id"
      :href="'#' + s.id"
      :class="{ active: activeSection === s.id }"
      @click="emit('navigate', s.id)"
    >
      {{ s.short }}
    </a>
    <a
      class="gh-link"
      href="https://github.com/glaboryp/bonaval-web"
      target="_blank"
      rel="noopener"
      aria-label="Código fuente en GitHub"
      title="Ver código en GitHub"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.87 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.75.8 1.2 1.83 1.2 3.09 0 4.45-2.69 5.42-5.25 5.71.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
    </a>
  </nav>
</template>

<script setup>
  defineProps({
    secciones: { type: Array, required: true },
    activeSection: { type: String, required: true }
  })
  const emit = defineEmits(['navigate'])
</script>

<style scoped>
.sticky-nav {
  position: fixed; top:0; left:0; right:0;
  display:flex; gap:.5rem; padding:.5rem .75rem;
  background:#0e0f12cc; backdrop-filter: blur(8px);
  z-index:20; border-bottom:1px solid #1d2026;
}
.sticky-nav a {
  padding:.4rem .9rem; border-radius:999px; font-size:.7rem;
  letter-spacing:.06em; text-transform:uppercase;
  background:#181b21; border:1px solid #262a31; color:#cdd5e0; text-decoration:none;
}
.sticky-nav a.active { background:linear-gradient(90deg,#1f2430,#262d39); border-color:#323a46; color:#fff; }
.sticky-nav .gh-link {
  margin-left:auto; display:flex; align-items:center; justify-content:center;
  padding:.4rem .65rem; background:#1a1f26; border:1px solid #272e37;
  border-radius:10px; transition: background .3s, border-color .3s;
}
.sticky-nav .gh-link svg { width:16px; height:16px; fill:#cdd5e0; display:block; }
.sticky-nav .gh-link:hover { background:#232a33; border-color:#323b46; }
.sticky-nav .gh-link:active { background:#151a21; }
</style>
