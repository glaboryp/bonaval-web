<template>
  <section
    id="galeria"
    :class="{active: active}"
  >
    <div class="container">
      <h2 class="section-title">
        Galería
      </h2>
      <div
        class="gallery"
        style="margin-top:1.5rem;"
      >
        <figure
          v-for="g in galeria"
          :key="g.titulo"
          style="cursor:pointer;"
          @click="openLightbox(g)"
        >
          <img
            :src="g.img"
            :alt="g.titulo"
            loading="lazy"
          />
          <figcaption>{{ g.titulo }}</figcaption>
        </figure>
      </div>
    </div>
    <LightboxCarousel
      v-model="lightboxOpen"
      :item="lightboxItem"
    />
  </section>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import LightboxCarousel from '@/components/LightboxCarousel.vue'

  const props = defineProps({ galeria: { type: Array, required: true }, active: { type: Boolean, default: false } })

  const lightboxOpen = ref(false)
  const lightboxItem = ref(null)

  function openLightbox(item){
    lightboxItem.value = item
    lightboxOpen.value = true
  }

  watch(() => props.active, (v)=>{
    if (!v){ lightboxOpen.value = false; lightboxItem.value = null }
  })
</script>

<style scoped>
/* Galería: 3 tarjetas por fila, centradas; la última fila se centra automáticamente */
.gallery { display:flex; flex-wrap:wrap; justify-content:center; gap:1.2rem; }
.gallery figure { flex: 1 1 calc((100% - 2.4rem) / 3); max-width: 340px; }
@media (max-width: 1000px) { .gallery figure { flex: 1 1 calc((100% - 1.2rem) / 2); } }
@media (max-width: 640px) { .gallery { gap:1rem; } .gallery figure { flex: 1 1 100%; max-width: 520px; } }
.gallery figure { margin:0; position:relative; overflow:hidden; border-radius:12px; border:1px solid #222830; }
.gallery img { width:100%; height:100%; object-fit:cover; display:block; transition: scale .6s ease; }
.gallery figure:hover img { scale:1.08; }
.gallery figcaption { position:absolute; inset:auto 0 0 0; padding:.5rem .75rem .6rem; background: linear-gradient(180deg, transparent, #000a); font-size:.65rem; letter-spacing:.05em; text-transform:uppercase; }
</style>
