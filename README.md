# Convento de Santo Domingo de Bonaval – Presentación Interactiva

## ¿Qué es este proyecto?
Una presentación web interactiva y didáctica sobre el convento e iglesia de Santo Domingo de Bonaval (Santiago de Compostela). El objetivo es sintetizar su evolución histórica, elementos arquitectónicos singulares (como la triple escalera helicoidal) y su dimensión cultural (Panteón de Galegos Ilustres) en un formato atractivo y navegable tipo storytelling / showcase.

Este recurso surge como apoyo educativo para la asignatura de Historia del Arte, facilitando una lectura guiada y visual.

Se prioriza:
- Contextualización histórica en bloques claros (datos, cronología, arquitectura, panteón, curiosidades, galería, créditos)
- Interacción suave (animaciones al entrar secciones, modo presentación secuencial)
- Enfoque visual (background, galería ampliable con lightbox + carrusel)
- Código limpio y fácilmente ampliable para uso académico o demostraciones.

## Características principales
- Navegación por secciones con resaltado automático (IntersectionObserver)
- Modo “Presentación” que bloquea el scroll libre y avanza sección a sección (rueda / teclas)
- Galería con lightbox y carrusel (imágenes ampliadas, navegación teclado, swipe)
- Curiosidades en formato tarjetas horizontales adaptativas
- Panteón con fichas de figuras ilustres
- Fondo global con imagen y hero destacado
- Animaciones de entrada mediante GSAP
- Componentización (Three.js fondo, escalera conceptual, lightbox)

## Stack tecnológico
| Capa | Herramientas |
|------|--------------|
| Framework UI | Vue 3 (script setup) |
| Bundler / Dev Server | Vite |
| Animaciones | GSAP |
| 3D / Canvas decorativo | Three.js |
| Estilos | CSS plano (variables + utilidades propias) |
| Imágenes | WebP (optimización y carga diferida) |

## Estructura del código (resumen)
```
root
├─ index.html          # Punto de entrada Vite
├─ src/
│  ├─ main.js          # Bootstrap Vue
│  ├─ App.vue          # Layout principal y orquestación
│  ├─ style.css        # Estilos globales
│  ├─ components/
│  │  ├─ ThreeBackground.vue
│  │  ├─ TripleEscalera.vue
│  │  └─ LightboxCarousel.vue
│  └─ data/
│     └─ bonaval.js    # Datos estructurados (meta, cronología, panteón, curiosidades, galería, créditos, bibliografía)
└─ public/
   └─ galeria/, panteon/, curiosidades/  # Activos estáticos
```

## Requisitos previos
- Node.js 18+ (recomendado LTS)
- npm (o pnpm / yarn si adaptas scripts)

## Instalación y uso
```bash
npm install
npm run dev   # Servidor de desarrollo (hot reload)
# Abrir la URL mostrada (por defecto http://localhost:5173)

npm run build # Genera versión de producción en dist/
npm run preview # Servir build para comprobación
```

## Configuración / Personalización rápida
| Objetivo | Dónde tocar |
|----------|-------------|
| Añadir nueva sección | `App.vue` (array `secciones` + bloque `<section>`) |
| Cambiar datos / textos | `src/data/bonaval.js` |
| Añadir nuevas imágenes galería | `public/galeria/` + ampliar `galeriaCreativeCommons` o arrays `imagenes` |
| Ajustar estilos globales | `src/style.css` |
| Editar animaciones de entrada | Lógica IntersectionObserver en `App.vue` (gsap.from) |
| Ajustar fondo 3D / canvas | `ThreeBackground.vue` |

## Contribuir
1. Haz un fork o crea una rama descriptiva (`feat/galeria-ampliada`, `fix/accesibilidad-contrast`)
2. Instala dependencias y ejecuta `npm run dev`
3. Aplica cambios (mantén estilo y convenciones, evita introducir dependencias pesadas sin discusión)
4. Revisa accesibilidad básica (alt en imágenes, foco navegable, contraste)
5. Ejecuta build para comprobar que no rompe (`npm run build`)
6. Abre Pull Request explicando: motivación, cambios técnicos, capturas (si UI)

### Estilo de código
- Preferir composición simple en componentes (sin sobre-optimizar prematuremente)
- Usar nombres semánticos en arrays de datos
- Mantener CSS modular por bloques comentados

### Ideas de mejora (roadmap abierto)
- Zoom en lightbox
- Modo oscuro/claro con toggle (variables CSS ajustables)
- Internacionalización (es/en)
- Exportar PDF resumen desde datos estructurados
- Uso de IntersectionObserver para lazy de componentes 3D pesados

## Accesibilidad
- Imágenes con texto alternativo básico
- Navegación por teclado (focus natural + lightbox escucha flechas / ESC)
- Colores revisados para contraste sobre fondo oscuro
(Se pueden añadir mejoras: trap de foco en lightbox, roles ARIA más específicos)