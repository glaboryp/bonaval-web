<template>
  <section
    id="panteon"
    :class="{active: active}"
  >
    <div class="container">
      <h2 class="section-title">
        Panteón de Gallegos Ilustres
      </h2>
      <p class="section-description">
        {{ panteon.descripcion }}
      </p>
      <div class="panteon-grid">
        <article
          v-for="fig in panteon.figuras"
          :key="fig.nombre"
          class="panteon-card"
        >
          <div class="panteon-img-wrap">
            <img
              :src="fig.img"
              :alt="fig.alt||fig.nombre"
              loading="lazy"
            />
          </div>
          <div class="panteon-info">
            <h3>{{ fig.nombre }}</h3>
            <p class="meta">
              {{ fig.rol }} <span v-if="fig.fechas">· {{ fig.fechas }}</span>
            </p>
            <p class="aporte">
              {{ fig.aporte }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({ panteon: { type: Object, required: true }, active: { type: Boolean, default: false } })
</script>

<style scoped>
.panteon-grid { display:grid; gap:1.6rem; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); margin-top:2rem; }
.panteon-card { background:#161a20; border:1px solid #242a33; border-radius:18px; overflow:hidden; display:flex; flex-direction:column; position:relative; transition: transform .4s ease, box-shadow .4s; }
.panteon-card:hover { transform: translateY(-4px); box-shadow: 0 8px 26px -10px #000c; }
.panteon-img-wrap { position:relative; aspect-ratio: 4/3; overflow:hidden; }
.panteon-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; }
.panteon-info { padding:.8rem .9rem 1rem; }
.panteon-info h3 { margin:0; font-size:1rem; font-family:'Playfair Display', serif; }
.panteon-info .meta { margin:0; font-size:.65rem; letter-spacing:.08em; text-transform:uppercase; opacity:.6; }
.panteon-info .aporte { margin:0; font-size:.75rem; line-height:1.3; opacity:.85; }
</style>
