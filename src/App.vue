<template>
  <nav class="sticky-nav">
    <a v-for="s in secciones" :key="s.id" :href="'#'+s.id" :class="{active:activeSection===s.id}" @click="track(s.id)">{{ s.short }}</a>
    <a class="gh-link" href="https://github.com/glaboryp/bonaval-web" target="_blank" rel="noopener" aria-label="Código fuente en GitHub" title="Ver código en GitHub">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.87 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.75.8 1.2 1.83 1.2 3.09 0 4.45-2.69 5.42-5.25 5.71.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
      </svg>
    </a>
  </nav>
  <button class="present-btn" @click="togglePresent" :aria-pressed="presentationMode.toString()" title="Modo presentación (tecla P)">
    <span v-if="!presentationMode">▶ Presentar</span>
    <span v-else>✕ Salir</span>
  </button>
  <main :class="{ 'presentation-mode': presentationMode }">
    <section id="inicio" class="hero" :class="{active: activeSection==='inicio'}">
      <ThreeBackground />
      <picture class="hero-bg" aria-hidden="true">
    <img src="/galeria/fachada.webp" alt="Fachada del convento de Santo Domingo de Bonaval" loading="lazy" style="filter:brightness(.75) saturate(1.1);" />
      </picture>
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="hero-content container">
        <span class="badge">Presentación Interactiva</span>
        <h1 class="gradient-text">Convento de Santo Domingo de Bonaval</h1>
        <p class="hero-description">Recorrido inmersivo por la historia, arquitectura y significado cultural de uno de los conjuntos monásticos más sugerentes de Santiago de Compostela. Experimenta su evolución de lo gótico al barroco y descubre sus secretos espaciales.</p>
        <p style="margin-top:1.5rem; font-size:.9rem; opacity:.75">Desplázate o usa el menú superior. También puedes pulsar el botón Presentar para activar el modo presentación.</p>
      </div>
    </section>

  <section id="datos" :class="{active: activeSection==='datos'}">
      <div class="container">
        <h2 class="section-title">Datos esenciales</h2>
        <div class="grid cols-3" style="margin-top:2rem;">
          <div class="card" v-for="item in esenciales" :key="item.titulo">
            <h3>{{ item.titulo }}</h3>
            <p v-html="item.texto" />
          </div>
        </div>
      </div>
    </section>

  <section id="cronologia" :class="{active: activeSection==='cronologia'}">
      <div class="container">
        <h2 class="section-title">Cronología</h2>
        <div class="timeline">
          <div class="event" v-for="e in cronologia" :key="e.fecha">
            <h3 style="margin:0;font-size:1rem">{{ e.fecha }}</h3>
            <p style="margin:.25rem 0 0; opacity:.85">{{ e.texto }}</p>
          </div>
        </div>
      </div>
    </section>

  <section id="arquitectura" :class="{active: activeSection==='arquitectura'}">
      <div class="container">
        <h2 class="section-title">Arquitectura y elementos singulares</h2>
        <div class="grid" style="margin-top:1.5rem; gap:2.2rem;">
          <div style="flex:1; min-width:260px;">
            <h3>Estilos</h3>
            <ul>
              <li v-for="est in meta.estilos" :key="est">{{ est }}</li>
            </ul>
            <h3 style="margin-top:1.5rem">Elementos destacados</h3>
            <ul>
              <li v-for="el in meta.elementosSingulares" :key="el">{{ el }}</li>
            </ul>
          </div>
          <div style="flex:1; min-width:260px;">
            <TripleEscalera />
          </div>
          <div style="flex:1; min-width:260px;">
            <h3>Claustro: artificio óptico</h3>
            <p style="opacity:.85">Distribución de pilastras y arcos modulada para disimular la planta trapezoidal medieval y generar percepción de cuadrado perfecto. Recurso barroco para controlar la experiencia espacial.</p>
            <h3 style="margin-top:1.5rem">Materiales</h3>
            <p style="opacity:.85">Granito local, soluciones estructurales de cantería avanzada (escalera) y falsa bóveda interior en la iglesia. Decoración sobria exterior con acentos de retablística.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="panteon" :class="{active: activeSection==='panteon'}">
      <div class="container">
        <h2 class="section-title">Panteón de Gallegos Ilustres</h2>
        <p class="section-description">{{ panteon.descripcion }}</p>
        <div class="panteon-grid">
          <article v-for="fig in panteon.figuras" :key="fig.nombre" class="panteon-card">
            <div class="panteon-img-wrap">
              <img :src="fig.img" :alt="fig.alt||fig.nombre" loading="lazy" />
            </div>
            <div class="panteon-info">
              <h3>{{ fig.nombre }}</h3>
              <p class="meta">{{ fig.rol }} <span v-if="fig.fechas">· {{ fig.fechas }}</span></p>
              <p class="aporte">{{ fig.aporte }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

  <section id="curiosidades" :class="{active: activeSection==='curiosidades'}">
      <div class="container">
        <h2 class="section-title">Curiosidades</h2>
        <div class="curios-grid" style="margin-top:1.5rem;">
          <article v-for="c in curiosidades" :key="c.titulo" class="curio-card">
            <div class="curio-media">
              <img :src="c.img" :alt="c.alt" loading="lazy" />
            </div>
            <div class="curio-body">
              <h3>{{ c.titulo }}</h3>
              <p>{{ c.texto }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

  <section id="galeria" :class="{active: activeSection==='galeria'}">
      <div class="container">
        <h2 class="section-title">Galería</h2>
        <div class="gallery" style="margin-top:1.5rem;">
            <figure v-for="g in galeriaCreativeCommons" :key="g.titulo" @click="openLightbox(g)" style="cursor:pointer;">
            <img :src="g.img" :alt="g.titulo" loading="lazy" />
            <figcaption>{{ g.titulo }}</figcaption>
          </figure>
        </div>
      </div>
          <LightboxCarousel v-model="lightboxOpen" :item="lightboxItem" />
    </section>

  <section id="creditos" :class="{active: activeSection==='creditos'}">
      <div class="container">
        <h2 class="section-title">Créditos</h2>
        <ul style="margin-top:1rem; line-height:1.5;">
          <li v-for="cr in creditos" :key="cr" class="creditos">{{ cr }}</li>
        </ul>
        <div class="biblio" style="margin-top:1.75rem; font-size:.85rem; line-height:1.6;">
          <strong style="display:block; font-size:.9rem; letter-spacing:.05em; text-transform:uppercase; opacity:.8; margin-bottom:.5rem;">Bibliografía (08/2025)</strong>
          <span v-for="(b,i) in bibliografia" :key="b.url" style="display:inline-block; margin:.15rem .65rem .15rem 0;">
            <a :href="b.url" target="_blank" rel="noopener" style="color:var(--accent2); text-decoration:none;">
              {{ b.nombre }}<span v-if="i < bibliografia.length-1" style="opacity:.55;">,</span>
            </a>
          </span>
        </div>
        <div class="repo-container">
          <a href="https://github.com/glaboryp/bonaval-web" target="_blank" rel="noopener" class="repo-link">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style="fill:currentColor;">
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.87 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.75.8 1.2 1.83 1.2 3.09 0 4.45-2.69 5.42-5.25 5.71.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
            Código fuente en GitHub
          </a>
        </div>
      </div>
    </section>
  </main>
  <footer>
    © 2025 Presentación educativa · Proyecto académico
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { conventoMeta as meta, cronologia, panteon, curiosidades, galeriaCreativeCommons, creditos, bibliografia } from './data/bonaval.js';
import ThreeBackground from './components/ThreeBackground.vue';
import TripleEscalera from './components/TripleEscalera.vue';
import LightboxCarousel from './components/LightboxCarousel.vue';

const esenciales = [
  { titulo: 'Ubicación', texto: meta.ubicacion.join('<br><br>') },
  { titulo: 'Fundación (tradición)', texto: meta.fundacionAtribuida },
  { titulo: 'El templo', texto: meta.templo },
  { titulo: 'Capas estilísticas', texto: meta.estilos.join('<br><br>') },
  { titulo: 'Mecenazgo clave', texto: meta.patronos.join('<br><br>') },
  { titulo: 'Arquitecto destacado', texto: meta.arquitectosDestacados.join(', ') }
];

const secciones = [
  { id:'inicio', short:'Inicio' },
  { id:'datos', short:'Datos' },
  { id:'cronologia', short:'Cronología' },
  { id:'arquitectura', short:'Arquitectura' },
  { id:'panteon', short:'Panteón' },
  { id:'curiosidades', short:'Curiosidades' },
  { id:'galeria', short:'Galería' },
  { id:'creditos', short:'Créditos' }
];

const activeSection = ref('inicio');
const presentationMode = ref(false);
const lightboxOpen = ref(false);
const lightboxItem = ref(null);
let navLock = false;
let navTimer;
let suppressObserver = false; // se mantiene por compatibilidad en caso de ajustes
let scrollBlockerRegistered = false;

function track(id){
  activeSection.value = id;
}

function addScrollBlockers(){
  if(scrollBlockerRegistered) return;
  const handler = e => { 
    if(presentationMode.value){ 
      // Permitimos scroll con rueda solo si no hay animación en curso y dirección coincide con intención
      if(navLock) { e.preventDefault(); return; }
      const delta = e.deltaY;
      if(delta > 30){ e.preventDefault(); advanceSection(1); }
      else if(delta < -30){ e.preventDefault(); advanceSection(-1); }
      else e.preventDefault();
    }
  };
  window.__presentScrollHandler = handler;
  window.addEventListener('wheel', handler, { passive:false });
  window.addEventListener('touchmove', handler, { passive:false });
  scrollBlockerRegistered = true;
}

function removeScrollBlockers(){
  if(!scrollBlockerRegistered) return;
  const h = window.__presentScrollHandler;
  window.removeEventListener('wheel', h);
  window.removeEventListener('touchmove', h);
  window.__presentScrollHandler = null;
  scrollBlockerRegistered = false;
}

function togglePresent(){
  presentationMode.value = !presentationMode.value;
  if(presentationMode.value){
    addScrollBlockers();
    const current = document.elementFromPoint(window.innerWidth/2, window.innerHeight/2)?.closest('section');
    if(current?.id) activeSection.value = current.id;
  } else {
    removeScrollBlockers();
  }
}

// Intersection Observer para resaltar sección activa
onMounted(()=>{
  const animated = new Set();
  const observer = new IntersectionObserver(entries => {
    if(presentationMode.value) return; // en modo presentación gestionamos manualmente
    entries.forEach(e=>{ 
      if(e.isIntersecting){
        activeSection.value = e.target.id; 
        if(!animated.has(e.target.id)){
          animated.add(e.target.id);
          gsap.from(e.target.querySelectorAll('h2,.card,.timeline,.gallery, p, ul, figure'), { 
            opacity:0, y:25, stagger:0.05, duration:0.8, ease:'power2.out'
          });
        }
      }
    });
  }, { threshold: 0.45 });
  secciones.forEach(s=>{
    const el = document.getElementById(s.id);
    if(el) observer.observe(el);
  });

  window.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase()==='p') togglePresent();
    if(presentationMode.value && (e.key==='ArrowDown' || e.key==='PageDown')){
      e.preventDefault();
      advanceSection(1);
    }
    if(presentationMode.value && (e.key==='ArrowUp' || e.key==='PageUp')){
      e.preventDefault();
      advanceSection(-1);
    }
  });
});

function openLightbox(item){
  lightboxItem.value = item;
  lightboxOpen.value = true;
}

function advanceSection(dir){
  if(navLock) return;
  const idx = secciones.findIndex(s=>s.id===activeSection.value);
  const target = secciones[idx+dir];
  if(!target) return;
  navLock = true;
  activeSection.value = target.id;
  const el = document.getElementById(target.id);
  if(el){
    // Intento 1: scrollIntoView suave
    try { el.scrollIntoView({ behavior:'smooth', block:'start' }); } catch(_e){ el.scrollIntoView(); }
    const targetY = window.scrollY + el.getBoundingClientRect().top;
    let attempts = 0;
    const maxAttempts = 20; // ~400ms
    function enforce(){
      const current = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if(Math.abs((window.scrollY + el.getBoundingClientRect().top) - targetY) < 2 || attempts>maxAttempts){
        navLock = false;
        return;
      }
      // Forzar ajuste incremental
      const next = current + (targetY - current)*0.35;
      window.scrollTo(0,next);
      document.documentElement.scrollTop = next;
      document.body.scrollTop = next;
      attempts++;
      requestAnimationFrame(enforce);
    }
    requestAnimationFrame(enforce);
    // Fallback duro final
    setTimeout(()=>{ if(navLock){ window.scrollTo(0,targetY); navLock=false; } }, 1400);
  }
}

</script>