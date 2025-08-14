<template>
  <HeaderNav
    :secciones="secciones"
    :active-section="activeSection"
    @navigate="track"
  />
  <PresentToggle
    :presentation-mode="presentationMode"
    @toggle="togglePresent"
  />
  <main :class="{ 'presentation-mode': presentationMode }">
    <InicioHero :active="activeSection === 'inicio'" />
    <DatosEsenciales
      :esenciales="esenciales"
      :active="activeSection === 'datos'"
    />
    <CronologiaView
      :cronologia="cronologia"
      :active="activeSection === 'cronologia'"
    />
    <ArquitecturaView
      :meta="meta"
      :active="activeSection === 'arquitectura'"
    />
    <PanteonView
      :panteon="panteon"
      :active="activeSection === 'panteon'"
    />
    <CuriosidadesView
      :curiosidades="curiosidades"
      :active="activeSection === 'curiosidades'"
    />
    <GaleriaView
      :galeria="galeriaCreativeCommons"
      :active="activeSection === 'galeria'"
    />
    <CreditosView
      :creditos="creditos"
      :bibliografia="bibliografia"
      :active="activeSection === 'creditos'"
    />
  </main>
  <footer>© 2025 Presentación educativa · Proyecto académico</footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import {
  conventoMeta as meta,
  cronologia,
  panteon,
  curiosidades,
  galeriaCreativeCommons,
  creditos,
  bibliografia,
} from '@/data/bonaval.js'
import HeaderNav from '@/components/HeaderNav.vue'
import PresentToggle from '@/components/PresentToggle.vue'
import InicioHero from '@/sections/InicioHero.vue'
import DatosEsenciales from '@/sections/DatosEsenciales.vue'
import CronologiaView from '@/sections/CronologiaView.vue'
import ArquitecturaView from '@/sections/ArquitecturaView.vue'
import PanteonView from '@/sections/PanteonView.vue'
import CuriosidadesView from '@/sections/CuriosidadesView.vue'
import GaleriaView from '@/sections/GaleriaView.vue'
import CreditosView from '@/sections/CreditosView.vue'

const esenciales = [
  { titulo: 'Ubicación', texto: meta.ubicacion.join('<br><br>') },
  { titulo: 'Fundación (tradición)', texto: meta.fundacionAtribuida },
  { titulo: 'El templo', texto: meta.templo },
  { titulo: 'Capas estilísticas', texto: meta.estilos.join('<br><br>') },
  { titulo: 'Mecenazgo clave', texto: meta.patronos.join('<br><br>') },
  { titulo: 'Arquitecto destacado', texto: meta.arquitectosDestacados.join(', ') },
]

const secciones = [
  { id: 'inicio', short: 'Inicio' },
  { id: 'datos', short: 'Datos' },
  { id: 'cronologia', short: 'Cronología' },
  { id: 'arquitectura', short: 'Arquitectura' },
  { id: 'panteon', short: 'Panteón' },
  { id: 'curiosidades', short: 'Curiosidades' },
  { id: 'galeria', short: 'Galería' },
  { id: 'creditos', short: 'Créditos' },
]

const activeSection = ref('inicio')
const presentationMode = ref(false)
let navLock = false
let scrollBlockerRegistered = false

function track(id) {
  activeSection.value = id
}

function addScrollBlockers() {
  if (scrollBlockerRegistered) return
  const handler = (e) => {
    if (presentationMode.value) {
      // Permitimos scroll con rueda solo si no hay animación en curso y dirección coincide con intención
      if (navLock) {
        e.preventDefault()
        return
      }
      const delta = e.deltaY
      if (delta > 30) {
        e.preventDefault()
        advanceSection(1)
      } else if (delta < -30) {
        e.preventDefault()
        advanceSection(-1)
      } else e.preventDefault()
    }
  }
  window.__presentScrollHandler = handler
  window.addEventListener('wheel', handler, { passive: false })
  window.addEventListener('touchmove', handler, { passive: false })
  scrollBlockerRegistered = true
}

function removeScrollBlockers() {
  if (!scrollBlockerRegistered) return
  const h = window.__presentScrollHandler
  window.removeEventListener('wheel', h)
  window.removeEventListener('touchmove', h)
  window.__presentScrollHandler = null
  scrollBlockerRegistered = false
}

function togglePresent() {
  presentationMode.value = !presentationMode.value
  if (presentationMode.value) {
    addScrollBlockers()
    const current = document
      .elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
      ?.closest('section')
    if (current?.id) activeSection.value = current.id
  } else {
    removeScrollBlockers()
  }
}

// Intersection Observer para resaltar sección activa
onMounted(() => {
  const animated = new Set()
  const observer = new IntersectionObserver(
    (entries) => {
      if (presentationMode.value) return // en modo presentación gestionamos manualmente
      entries.forEach((e) => {
        if (e.isIntersecting) {
          activeSection.value = e.target.id
          if (!animated.has(e.target.id)) {
            animated.add(e.target.id)
            gsap.from(e.target.querySelectorAll('h2,.card,.timeline,.gallery, p, ul, figure'), {
              opacity: 0,
              y: 25,
              stagger: 0.05,
              duration: 0.8,
              ease: 'power2.out',
            })
          }
        }
      })
    },
    { threshold: 0.45 }
  )
  secciones.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })

  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'p') togglePresent()
    if (presentationMode.value && (e.key === 'ArrowDown' || e.key === 'PageDown')) {
      e.preventDefault()
      advanceSection(1)
    }
    if (presentationMode.value && (e.key === 'ArrowUp' || e.key === 'PageUp')) {
      e.preventDefault()
      advanceSection(-1)
    }
  })
})

function advanceSection(dir) {
  if (navLock) return
  const idx = secciones.findIndex((s) => s.id === activeSection.value)
  const target = secciones[idx + dir]
  if (!target) return
  navLock = true
  activeSection.value = target.id
  const el = document.getElementById(target.id)
  if (el) {
    // Intento 1: scrollIntoView suave
    try {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } catch {
      el.scrollIntoView()
    }
    const targetY = window.scrollY + el.getBoundingClientRect().top
    let attempts = 0
    const maxAttempts = 20 // ~400ms
    function enforce() {
      const current =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      if (
        Math.abs(window.scrollY + el.getBoundingClientRect().top - targetY) < 2 ||
        attempts > maxAttempts
      ) {
        navLock = false
        return
      }
      // Forzar ajuste incremental
      const next = current + (targetY - current) * 0.35
      window.scrollTo(0, next)
      document.documentElement.scrollTop = next
      document.body.scrollTop = next
      attempts++
      requestAnimationFrame(enforce)
    }
    requestAnimationFrame(enforce)
    // Fallback duro final
    setTimeout(() => {
      if (navLock) {
        window.scrollTo(0, targetY)
        navLock = false
      }
    }, 1400)
  }
}
</script>
