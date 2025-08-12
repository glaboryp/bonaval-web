<template>
  <section
    id="datos"
    :class="{active: active}"
  >
    <div class="container">
      <h2 class="section-title">
        Datos esenciales
      </h2>
      <div
        class="grid cols-3"
        style="margin-top:2rem;"
      >
        <div
          v-for="item in esenciales"
          :key="item.titulo"
          class="card"
        >
          <h3>{{ item.titulo }}</h3>
          <p v-html="item.texto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    esenciales: { type: Array, required: true },
    active: { type: Boolean, default: false }
  })
</script>

<style scoped>
.card {
  background: #16181d;
  padding: 1.25rem 1.15rem 1.4rem;
  border: 1px solid #242830;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 10%, #ffffff08, transparent 70%);
  pointer-events: none;
}
.card h3 { margin-top: 0; font-size: 1.1rem; }
</style>
