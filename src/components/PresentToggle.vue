<template>
  <button
    class="present-btn"
    :aria-pressed="presentationMode.toString()"
    title="Modo presentación (tecla P)"
    @click="emit('toggle')"
  >
    <span v-if="!presentationMode">▶ Presentar</span>
    <span v-else>✕ Salir</span>
  </button>
</template>

<script setup>
defineProps({ presentationMode: { type: Boolean, required: true } })
const emit = defineEmits(['toggle'])
</script>

<style scoped>
.present-btn {
  position: fixed;
  right: 2.5rem;
  bottom: 2rem;
  z-index: 40;
  background: linear-gradient(135deg, #1f2530, #11151b);
  border: 1px solid #2c343f;
  color: #dfe6ef;
  padding: 0.7rem 1.05rem;
  font-size: 0.75rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 12px -2px #0009;
}

.present-btn:hover {
  background: linear-gradient(135deg, #27303c, #151a21);
}
</style>
