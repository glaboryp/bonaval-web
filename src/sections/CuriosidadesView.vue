<template>
  <section
    id="curiosidades"
    :class="{active: active}"
  >
    <div class="container">
      <h2 class="section-title">
        Curiosidades
      </h2>
      <div
        class="curios-grid"
        style="margin-top:1.5rem;"
      >
        <article
          v-for="c in curiosidades"
          :key="c.titulo"
          class="curio-card"
        >
          <div class="curio-media">
            <img
              :src="c.img"
              :alt="c.alt"
              loading="lazy"
            />
          </div>
          <div class="curio-body">
            <h3>{{ c.titulo }}</h3>
            <p>{{ c.texto }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({ curiosidades: { type: Array, required: true }, active: { type: Boolean, default: false } })
</script>

<style scoped>
.curios-grid { display:grid; gap:1.8rem; grid-template-columns: repeat(auto-fill, minmax(480px, 1fr)); }
.curio-card { background:#161a20; border:1px solid #242a33; border-radius:20px; overflow:hidden; display:flex; flex-direction:row; position:relative; box-shadow:0 4px 14px -6px #000c; min-height:220px; }
.curio-media { position:relative; flex:0 0 45%; min-height:100%; overflow:hidden; display:flex; }
.curio-media img { width:100%; height:100%; object-fit:cover; transition: transform .9s ease; display:block; }
.curio-card:hover .curio-media img { transform: scale(1.08); }
.curio-body { padding:1.1rem 1.2rem 1.25rem; display:flex; flex-direction:column; gap:.55rem; flex:1; }
.curio-body h3 { margin:0; font-size:1.15rem; font-family:'Playfair Display', serif; }
@media (max-width: 900px){ .curios-grid { grid-template-columns:1fr; } .curio-card { flex-direction:column; min-height:auto; } .curio-media { flex:0 0 auto; aspect-ratio:16/10; } }
.curio-body p { margin:0; font-size:.8rem; line-height:1.35; opacity:.85; }
</style>
