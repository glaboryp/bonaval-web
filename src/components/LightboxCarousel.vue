<template>
  <Teleport to="body">
    <div
      v-if="open"
      ref="lbRoot"
      class="lightbox"
      tabindex="-1"
      @keydown.esc.prevent="close"
    >
      <div
        class="lightbox-backdrop"
        @click="close"
      />
      <div
        class="lightbox-dialog"
        role="dialog"
        :aria-label="item?.titulo"
      >
        <header class="lightbox-header">
          <h3>{{ item?.titulo }}</h3>
          <button
            class="close-btn"
            aria-label="Cerrar"
            @click="close"
          >
            ✕
          </button>
        </header>
        <div
          class="carousel"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointerleave="onPointerUp"
          @mouseenter="preloadAround"
        >
          <button
            class="nav prev"
            :disabled="idx === 0 || isSwitching"
            aria-label="Anterior"
            @click="prev"
            @mouseenter="() => ensureDecoded(imagenes[idx - 1])"
          >
            ‹
          </button>
          <div class="slides">
            <div class="slides-inner">
              <Transition
                :name="transitionName"
                mode="out-in"
              >
                <img
                  v-if="currentSrc"
                  :key="currentSrc"
                  class="slide-img"
                  :src="currentSrc"
                  :alt="item?.titulo + ' imagen ' + (idx + 1)"
                  decoding="async"
                  fetchpriority="high"
                  loading="eager"
                />
              </Transition>
            </div>
          </div>
          <button
            class="nav next"
            :disabled="idx === imagenes.length - 1 || isSwitching"
            aria-label="Siguiente"
            @click="next"
            @mouseenter="() => ensureDecoded(imagenes[idx + 1])"
          >
            ›
          </button>
        </div>
        <footer class="lightbox-footer">
          <span>{{ idx + 1 }} / {{ imagenes.length }}</span>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  item: { type: Object, default: null },
})
const emit = defineEmits(['update:modelValue'])

const open = ref(props.modelValue)
watch(
  () => props.modelValue,
  (v) => {
    open.value = v
    if (v) focusRoot()
  }
)
watch(open, (v) => emit('update:modelValue', v))

const idx = ref(0)
const lbRoot = ref(null)
const transitionName = ref('slide-next')

const imagenes = ref([])
watch(
  () => props.item,
  (it) => {
    idx.value = 0
    imagenes.value = it?.imagenes?.length ? it.imagenes : it?.img ? [it.img] : []
    // Pre-carga primeras vecinas para evitar tirones
    preloadAround()
  }
)

const currentSrc = computed(() => imagenes.value[idx.value] || null)

function focusRoot() {
  requestAnimationFrame(() => lbRoot.value?.focus())
}
function close() {
  open.value = false
}
const isSwitching = ref(false)
const SWITCH_MS = 480
async function next() {
  if (isSwitching.value) return
  const target = idx.value + 1
  if (target <= imagenes.value.length - 1) {
    isSwitching.value = true
    const src = imagenes.value[target]
    await ensureDecoded(src)
    transitionName.value = 'slide-next'
    idx.value = target
    preloadAround()
    setTimeout(() => (isSwitching.value = false), SWITCH_MS)
  }
}
async function prev() {
  if (isSwitching.value) return
  const target = idx.value - 1
  if (target >= 0) {
    isSwitching.value = true
    const src = imagenes.value[target]
    await ensureDecoded(src)
    transitionName.value = 'slide-prev'
    idx.value = target
    preloadAround()
    setTimeout(() => (isSwitching.value = false), SWITCH_MS)
  }
}

function onKey(e) {
  if (!open.value) return
  if (e.key === 'ArrowRight' && !isSwitching.value) {
    next()
  }
  if (e.key === 'ArrowLeft' && !isSwitching.value) {
    prev()
  }
  if (e.key === 'Escape') {
    close()
  }
}

let startX = null
function onPointerDown(e) {
  startX = e.clientX
}
function onPointerMove(e) {
  if (startX != null) {
    const dx = e.clientX - startX
    if (Math.abs(dx) > 60) {
      if (!isSwitching.value) {
        dx < 0 ? next() : prev()
      }
      startX = null
    }
  }
}
function onPointerUp() {
  startX = null
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
})

// Decodificación y pre-carga para transiciones sin tirones
const seen = new Set()
const decodeCache = new Map()
async function ensureDecoded(src) {
  if (!src) return
  if (seen.has(src)) return
  if (!decodeCache.has(src)) {
    const im = new Image()
    im.src = src
    const p = im.decode
      ? im.decode().catch(() => {})
      : new Promise((resolve) => {
          im.onload = resolve
          im.onerror = resolve
        })
    decodeCache.set(src, p)
  }
  await decodeCache.get(src)
  seen.add(src)
}
function preloadAround() {
  const cur = imagenes.value[idx.value]
  const next = imagenes.value[idx.value + 1]
  const prev = imagenes.value[idx.value - 1]
  ensureDecoded(cur)
  ensureDecoded(next)
  ensureDecoded(prev)
}
watch(idx, preloadAround)
</script>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 140;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-backdrop {
  position: absolute;
  inset: 0;
  background: #000c;
  animation: fadeIn 0.35s ease;
}

.lightbox-dialog {
  position: relative;
  width: min(1000px, 92vw);
  max-height: 92vh;
  background: #11161c;
  border: 1px solid #223;
  border-radius: 16px;
  padding: 1rem 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px -10px #000d;
}

.lightbox-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.25rem 0.25rem 0.75rem;
  border-bottom: 1px solid #1d2530;
}

.lightbox-header h3 {
  margin: 0;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
}

.close-btn {
  background: #222a33;
  border: 1px solid #2d3744;
  color: #cdd5e0;
  border-radius: 8px;
  padding: 0.35rem 0.6rem;
  cursor: pointer;
  font-size: 0.8rem;
}

.close-btn:hover {
  background: #29323c;
}

.carousel {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.slides {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem; /* deja espacio para las flechas */
}

.slides-inner {
  position: relative;
  width: 100%;
  height: 100%;
  contain: content;
  transform: translateZ(0);
}

.slides-inner img,
.slide-img {
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px -6px #000c;
  will-change: opacity, transform;
  backface-visibility: hidden;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #1a222c;
  border: 1px solid #27313d;
  color: #dbe2ea;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.nav:hover {
  background: #23303c;
}

.nav:disabled {
  opacity: 0.25;
  cursor: default;
}

.nav.prev {
  left: 0.5rem;
}

.nav.next {
  right: 0.5rem;
}

.lightbox-footer {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 0;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
}

/* Transiciones más fluidas con dirección */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-next-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.985);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.985);
}
.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-30px) scale(0.985);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(30px) scale(0.985);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
