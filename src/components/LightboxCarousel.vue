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
        >
          <button
            class="nav prev"
            :disabled="idx===0"
            aria-label="Anterior"
            @click="prev"
          >
            ‹
          </button>
          <div class="slides">
            <TransitionGroup
              name="fade"
              tag="div"
              class="slides-inner"
            >
              <img
                v-for="(src,i) in imagenes"
                v-show="i===idx"
                :key="src"
                :src="src"
                :alt="item?.titulo+' imagen '+(i+1)"
                loading="lazy"
              />
            </TransitionGroup>
          </div>
          <button
            class="nav next"
            :disabled="idx===imagenes.length-1"
            aria-label="Siguiente"
            @click="next"
          >
            ›
          </button>
        </div>
        <footer class="lightbox-footer">
          <span>{{ idx+1 }} / {{ imagenes.length }}</span>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  item: { type: Object, default: null }
})
const emit = defineEmits(['update:modelValue'])

const open = ref(props.modelValue)
watch(()=>props.modelValue, v=>{ open.value = v; if (v) focusRoot() })
watch(open, v=> emit('update:modelValue', v))

const idx = ref(0)
const lbRoot = ref(null)

const imagenes = ref([])
watch(()=>props.item, it=>{
  idx.value = 0
  imagenes.value = it?.imagenes?.length ? it.imagenes : it?.img ? [it.img] : []
})

function focusRoot(){ requestAnimationFrame(()=> lbRoot.value?.focus()) }
function close(){ open.value = false }
function next(){ if (idx.value < imagenes.value.length - 1) idx.value++ }
function prev(){ if (idx.value > 0) idx.value-- }

function onKey(e){
  if (!open.value) return
  if (e.key === 'ArrowRight') { next() }
  if (e.key === 'ArrowLeft') { prev() }
  if (e.key === 'Escape'){ close() }
}

let startX = null
function onPointerDown(e){ startX = e.clientX }
function onPointerMove(e){ if (startX != null){ const dx = e.clientX - startX; if (Math.abs(dx) > 60){ dx < 0 ? next() : prev(); startX = null } } }
function onPointerUp(){ startX = null }

onMounted(()=>{ window.addEventListener('keydown', onKey) })
onBeforeUnmount(()=>{ window.removeEventListener('keydown', onKey) })
</script>

<style scoped>
.lightbox { position: fixed; inset:0; z-index:140; display:flex; align-items:center; justify-content:center; }
.lightbox-backdrop { position:absolute; inset:0; background:#000c; backdrop-filter: blur(4px); animation: fadeIn .35s ease; }
.lightbox-dialog { position:relative; width:min(1000px,92vw); max-height:92vh; background:#11161c; border:1px solid #223; border-radius:16px; padding:1rem 1rem .75rem; display:flex; flex-direction:column; box-shadow:0 10px 40px -10px #000d; }
.lightbox-header { display:flex; align-items:center; gap:1rem; justify-content:space-between; padding:.25rem .25rem .75rem; border-bottom:1px solid #1d2530; }
.lightbox-header h3 { margin:0; font-size:1rem; font-family:'Playfair Display',serif; }
.close-btn { background:#222a33; border:1px solid #2d3744; color:#cdd5e0; border-radius:8px; padding:.35rem .6rem; cursor:pointer; font-size:.8rem; }
.close-btn:hover { background:#29323c; }
.carousel { position:relative; flex:1; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.slides { flex:1; height:100%; display:flex; align-items:center; justify-content:center; }
.slides-inner { position:relative; width:100%; height:100%; }
.slides-inner img { max-width:100%; max-height:70vh; width:auto; height:auto; display:block; margin:0 auto; object-fit:contain; border-radius:8px; box-shadow:0 4px 20px -6px #000c; }
.nav { position:absolute; top:50%; transform:translateY(-50%); background:#1a222c; border:1px solid #27313d; color:#dbe2ea; width:42px; height:42px; border-radius:50%; font-size:1.4rem; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px); }
.nav:hover { background:#23303c; }
.nav:disabled { opacity:.25; cursor:default; }
.nav.prev { left:.5rem; }
.nav.next { right:.5rem; }
.lightbox-footer { display:flex; justify-content:center; padding:.5rem 0 0; font-size:.7rem; letter-spacing:.08em; text-transform:uppercase; opacity:.7; }
.fade-enter-active, .fade-leave-active { transition: opacity .35s ease; }
.fade-enter-from, .fade-leave-to { opacity:0; }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
</style>
