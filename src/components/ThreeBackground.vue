<template>
  <canvas ref="canvas" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

let animationId
const canvas = ref(null)

// Referencias para limpieza
let scene, renderer, camera
let geo, mat, mesh
let pGeo, pMat, points

function resize() {
  if (!renderer || !camera) return
  const w = window.innerWidth
  const h = window.innerHeight
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  camera.aspect = w / h
  camera.updateProjectionMatrix()
}

onMounted(() => {
  scene = new THREE.Scene()
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true })
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 6)

  geo = new THREE.IcosahedronGeometry(2.5, 2)
  mat = new THREE.MeshStandardMaterial({
    color: 0x1d2836,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  })
  mesh = new THREE.Mesh(geo, mat)
  scene.add(mesh)

  pGeo = new THREE.BufferGeometry()
  const particles = 800
  const pos = new Float32Array(particles * 3)
  for (let i = 0; i < particles; i++) {
    const r = 12 * Math.random()
    const a = Math.random() * Math.PI * 2
    const b = Math.acos(2 * Math.random() - 1)
    pos[i * 3] = r * Math.sin(b) * Math.cos(a)
    pos[i * 3 + 1] = r * Math.sin(b) * Math.sin(a)
    pos[i * 3 + 2] = r * Math.cos(b)
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  pMat = new THREE.PointsMaterial({ color: 0x3d4d60, size: 0.04, transparent: true, opacity: 0.55 })
  points = new THREE.Points(pGeo, pMat)
  scene.add(points)

  const light = new THREE.DirectionalLight(0xffffff, 0.8)
  light.position.set(5, 5, 5)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0xffffff, 0.25))

  window.addEventListener('resize', resize)
  resize()

  const clock = new THREE.Clock()
  function animate() {
    const t = clock.getElapsedTime()
    mesh.rotation.x = t * 0.08
    mesh.rotation.y = t * 0.12
    points.rotation.y = t * 0.01
    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }
  animate()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  if (scene && mesh) scene.remove(mesh)
  if (scene && points) scene.remove(points)
  if (geo) geo.dispose()
  if (mat) mat.dispose()
  if (pGeo) pGeo.dispose()
  if (pMat) pMat.dispose()
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
