<template>
  <section
    id="creditos"
    :class="{ active: active }"
  >
    <div class="container">
      <h2 class="section-title">Créditos</h2>
      <ul class="creditos-list">
        <li
          v-for="cr in creditos"
          :key="cr"
          class="creditos"
        >
          {{ cr }}
        </li>
      </ul>
      <div class="biblio">
        <strong class="biblio-title">Bibliografía (08/2025)</strong>
        <span
          v-for="(b, i) in bibliografia"
          :key="b.url"
          class="biblio-item"
        >
          <a
            :href="b.url"
            target="_blank"
            rel="noopener"
            class="biblio-link"
          >
            {{ b.nombre
            }}<span
              v-if="i < bibliografia.length - 1"
              class="biblio-sep"
              >,</span
            >
          </a>
        </span>
      </div>
      <div class="repo-container">
        <a
          href="https://github.com/glaboryp/bonaval-web"
          target="_blank"
          rel="noopener"
          class="repo-link"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.87 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.75.8 1.2 1.83 1.2 3.09 0 4.45-2.69 5.42-5.25 5.71.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            />
          </svg>
          Código fuente en GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  creditos: { type: Array, required: true },
  bibliografia: { type: Array, required: true },
  active: { type: Boolean, default: false },
})
</script>

<style scoped>
.creditos-list {
  margin-top: 1rem;
  line-height: 1.5;
}
.creditos {
  margin-bottom: 10px;
}
.biblio a {
  color: var(--accent2);
  text-decoration: none;
}
.biblio {
  margin-top: 1.75rem;
  font-size: 0.85rem;
  line-height: 1.6;
}
.biblio-title {
  display: block;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 0.5rem;
}
.biblio-item {
  display: inline-block;
  margin: 0.15rem 0.65rem 0.15rem 0;
}
.biblio-link {
  color: var(--accent2);
  text-decoration: none;
}
.biblio-sep {
  opacity: 0.55;
}
.repo-container {
  margin-top: 2rem;
}
.repo-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #161a20;
  border: 1px solid #242a33;
  color: #dfe6ef;
  border-radius: 10px;
  padding: 0.6rem 0.8rem;
  text-decoration: none;
}
.repo-link:hover {
  background: #1b2129;
  border-color: #2a333f;
}
.repo-link svg {
  display: block;
}
</style>
