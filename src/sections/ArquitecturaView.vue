<template>
  <section
    id="arquitectura"
    :class="{ active: active }"
  >
    <div class="container">
      <h2 class="section-title">Arquitectura y elementos singulares</h2>
      <div
        class="grid"
        style="margin-top: 1.5rem; gap: 2.2rem"
      >
        <div style="flex: 1; min-width: 260px">
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
        <div style="flex: 1; min-width: 260px">
          <TripleEscalera />
        </div>
        <div style="flex: 1; min-width: 260px">
          <h3>Claustro: artificio óptico</h3>
          <p style="opacity: 0.85">
            Distribución de pilastras y arcos modulada para disimular la planta trapezoidal medieval
            y generar percepción de cuadrado perfecto. Recurso barroco para controlar la experiencia
            espacial.
          </p>
          <h3 style="margin-top: 1.5rem">Materiales</h3>
          <p style="opacity: 0.85">
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
