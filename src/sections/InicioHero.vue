<template>
  <section
    id="inicio"
    class="hero"
    :class="{ active: active }"
  >
    <ThreeBackground />
    <picture
      class="hero-bg"
      aria-hidden="true"
    >
      <img
        src="/galeria/fachada.webp"
        alt="Fachada del convento de Santo Domingo de Bonaval"
        loading="lazy"
        class="hero-bg-img"
      />
    </picture>
    <div
      class="hero-overlay"
      aria-hidden="true"
    />
    <div class="hero-content container">
      <span class="badge">Presentación Interactiva</span>
      <h1 class="gradient-text">Convento de Santo Domingo de Bonaval</h1>
      <p class="hero-description">
        Recorrido inmersivo por la historia, arquitectura y significado cultural de uno de los
        conjuntos monásticos más sugerentes de Santiago de Compostela. Experimenta su evolución de
        lo gótico al barroco y descubre sus secretos espaciales.
      </p>
      <p class="hero-hint">
        Desplázate o usa el menú superior. También puedes pulsar el botón Presentar para activar el
        modo presentación.
      </p>
    </div>
  </section>
</template>

<script setup>
import ThreeBackground from '@/components/ThreeBackground.vue'

defineProps({ active: { type: Boolean, default: false } })
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 750px;
}

.hero-description {
  font-size: 1.3rem;
  max-width: 620px;
  line-height: 1.5;
}

/* Hero background image layering */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.65) saturate(1.05);
  transform: scale(1.05);
  animation: heroZoom 22s ease-in-out forwards;
}

.hero-bg-img {
  filter: brightness(0.75) saturate(1.1);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #0e0f1288, #0e0f12 99%);
  z-index: 1;
}

@keyframes heroZoom {
  from {
    transform: scale(1.22);
  }
  to {
    transform: scale(1.15);
  }
}

.badge {
  display: inline-block;
  background: #ffffff10;
  border: 1px solid #ffffff20;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  backdrop-filter: blur(6px);
  margin-bottom: 1rem;
}

.gradient-text {
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.5rem;
}

.hero-hint {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.75;
}
</style>
