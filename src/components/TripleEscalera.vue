<template>
  <div class="triple-escalera">
    <canvas ref="canvas"></canvas>
    <div class="legend">
      <h3 style="margin:0 0 .25rem;font-size:.9rem;letter-spacing:.05em;text-transform:uppercase">Triple escalera helicoidal</h3>
      <p style="margin:0;font-size:.7rem;line-height:1.3;opacity:.75">Visualización conceptual: tres hélices independientes comparten hueco sin cruzar peldaños.</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
let frame;
const canvas = ref(null);

onMounted(()=>{
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias:true, alpha:true });
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(4,4,6); camera.lookAt(0,2,0);

  const group = new THREE.Group();
  scene.add(group);

  function createHelix(color, phase){
    const helix = new THREE.Group();
    const steps = 40;
    for(let i=0;i<steps;i++){
      const angle = (i/steps)*Math.PI*4 + phase; // 2 vueltas
      const y = i*0.12;
      const radius = 1.2;
      const x = Math.cos(angle)*radius;
      const z = Math.sin(angle)*radius;
      const geom = new THREE.BoxGeometry(0.65,0.05,0.25);
      const mat = new THREE.MeshStandardMaterial({ color, metalness:0.1, roughness:0.6 });
      const stepMesh = new THREE.Mesh(geom, mat);
      stepMesh.position.set(x,y,z);
      stepMesh.rotation.y = -angle + Math.PI/2;
      helix.add(stepMesh);
    }
    return helix;
  }

  const colors = [0xd6b25e,0x6aa7ff,0xffffff];
  colors.forEach((c,i)=> group.add(createHelix(c, i*(Math.PI*2/3))));

  const floorGeo = new THREE.CylinderGeometry(1.55,1.55,0.05, 48,1,true);
  const floorMat = new THREE.MeshBasicMaterial({ color:0xffffff, wireframe:true, opacity:0.15, transparent:true });
  const floor = new THREE.Mesh(floorGeo,floorMat); floor.position.y=-0.05; group.add(floor);

  const light = new THREE.DirectionalLight(0xffffff, 1); light.position.set(3,5,4); scene.add(light);
  scene.add(new THREE.AmbientLight(0xffffff,0.35));

  function resize(){
    const rect = canvas.value.parentElement.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height);
    camera.aspect = rect.width/rect.height; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize); resize();

  const clock = new THREE.Clock();
  function animate(){
    const t = clock.getElapsedTime();
    group.rotation.y = t*0.25;
    renderer.render(scene,camera);
    frame = requestAnimationFrame(animate);
  }
  animate();
});
</script>
<style scoped>
.triple-escalera { position:relative; width:100%; aspect-ratio:4/5; background:linear-gradient(145deg,#14181e,#090a0c); border:1px solid #222830; border-radius:16px; overflow:hidden; }
canvas { width:100%; height:100%; display:block; }
.legend { position:absolute; left:0; right:0; bottom:0; padding:.6rem .75rem .7rem; background:linear-gradient(180deg,transparent,#000c); }
</style>
