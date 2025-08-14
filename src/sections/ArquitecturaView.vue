<template>
  <section
    id="arquitectura"
    :class="{ active: active }"
  >
    <div class="container">
      <h2 class="section-title">Arquitectura y elementos singulares</h2>
      <div class="grid arquitectura-grid">
        <div class="arquitectura-col">
          <h3>Estilos</h3>
          <ul>
            <li
              v-for="est in meta.estilos"
              :key="est"
            >
              {{ est }}
            </li>
          </ul>
          <h3 style="margin-top: 1.5rem">Elementos destacados</h3>
          <ul>
            <li
              v-for="el in meta.elementosSingulares"
              :key="el"
            >
              {{ el }}
            </li>
          </ul>
        </div>
        <div class="arquitectura-col">
          <TripleEscalera />
        </div>
        <div class="arquitectura-col">
          <h3>Claustro: artificio óptico</h3>
          <p class="muted">
            Distribución de pilastras y arcos modulada para disimular la planta trapezoidal medieval
            y generar percepción de cuadrado perfecto. Recurso barroco para controlar la experiencia
            espacial.
          </p>
          <h3 class="mt-1-5">Materiales</h3>
          <p class="muted">
            Granito local, soluciones estructurales de cantería avanzada (escalera) y falsa bóveda
            interior en la iglesia. Decoración sobria exterior con acentos de retablística.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TripleEscalera from '@/components/TripleEscalera.vue'

defineProps({ meta: { type: Object, required: true }, active: { type: Boolean, default: false } })
</script>

<style scoped>
.arquitectura-grid {
  margin-top: 1.5rem;
  gap: 2.2rem;
}
.arquitectura-col {
  flex: 1;
  min-width: 260px;
}
.muted {
  opacity: 0.85;
}
.mt-1-5 {
  margin-top: 1.5rem;
}
</style>
