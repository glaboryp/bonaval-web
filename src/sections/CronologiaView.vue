<template>
  <section
    id="cronologia"
    :class="{ active: active }"
  >
    <div class="container">
      <h2 class="section-title">Cronología</h2>
      <div class="timeline">
        <div
          v-for="e in cronologia"
          :key="e.fecha"
          class="event"
        >
          <h3 style="margin: 0; font-size: 1rem">
            {{ e.fecha }}
          </h3>
          <p style="margin: 0.25rem 0 0; opacity: 0.85">
            {{ e.texto }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  cronologia: { type: Array, required: true },
  active: { type: Boolean, default: false },
})
</script>

<style scoped>
.timeline {
  position: relative;
  margin: 2rem 0;
  padding-left: 1rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(var(--accent), var(--accent2));
}

.event {
  position: relative;
  margin-bottom: 1.5rem;
  padding-left: 1.25rem;
}

.event::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 0.3rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 4px #0e0f12;
}
</style>
