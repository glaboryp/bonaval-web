// Datos estructurados para la presentación (resumen propio, basado en fuentes públicas)
export const conventoMeta = {
  nombre: 'Convento de Santo Domingo de Bonaval',
  ubicacion: ['Santiago de Compostela (Galicia, España)', 'El edificio se sitúa al nordeste de la ciudad, junto a la principal vía de entrada a la ciudad por el Camino Francés.'],
  coordenadas: { lat: 42.88239, lng: -8.53774 },
  fundacionAtribuida: '1220 por Santo Domingo de Guzmán',
  templo: 'Planta de cruz latina con tres naves de cinco tramos, la central de mayores dimensiones, que rematan en otras tantas capillas absidiales de planta poligonal, y un transepto.',
  usosActuales: ['Museo do Pobo Galego', 'Panteón de Galegos Ilustres', 'Parque público en antiguos huertos'],
  estilos: ['Gótico mendicante (siglos XIII-XIV)', 'Renacentista (elementos)', 'Barroco compostelano (siglos XVII-XVIII)'],
  patronos: ['Casa de Altamira', 'Arzobispo Antonio de Monroy'],
  arquitectosDestacados: ['Domingo de Andrade'],
  elementosSingulares: ['Triple escalera helicoidal de tres espirales independientes', 'Claustro con artificio óptico para cuadrar planta trapezoidal', 'Panteón de Gallegos Ilustres', 'Fachada barroca con escudos y sartas de frutas'],
};

export const cronologia = [
  { fecha: 1220, titulo: 'Tradición fundacional', texto: 'Fundado según la tradición en 1220 por Santo Domingo de Guzmán.' },
  { fecha: 'Siglo XIII', titulo: 'Primera construcción', texto: 'Convento primitivo e iglesia, de los que se conservan el alzado del templo y restos escultóricos como el tímpano de la fachada principal, algunos capiteles del claustro, y seis cruces inscritas en círculos.' },
  { fecha: 'Siglos XIII-XIV', titulo: 'Ampliación de la iglesia', texto: 'Se amplia la iglesia por la cabecera, utilizándose el espacio de las dos capillas laterales para construir el transepto.' },
  { fecha: 'Siglo XV', titulo: 'Capilla mayor', texto: 'Se situaron en la capilla mayor cuatro sepulcros para los enterramientos de los condes de Altamira.' },
  { fecha: 'Siglo XVIII', titulo: 'Reconstrucción', texto: 'Inicio de grandes reformas dirigidas por Domingo de Andrade bajo el patrocinio del arzobispo Antonio de Monroy. Estas obras supusieron una modificación de todo el templo.' },
  { fecha: 'Siglo XIX', titulo: 'Desamortización', texto: 'Entró a formar parte de los bienes del municipio de Santiago, instalándose aquí un hospicio y un colegio para discapacitados' },
  { fecha: 1963, titulo: 'Museo municipal', texto: 'Se inaugura museo en parte del edificio.' },
  { fecha: 2015, titulo: 'Camino de Santiago', texto: 'Figura como elemento asociado en ampliación del Camino de Santiago.' }
];

export const panteon = {
  descripcion: 'Capilla lateral que acoge restos de personalidades clave de la cultura e identidad de Galicia.',
  figuras: [
    {
      nombre: 'Rosalía de Castro',
      rol: 'Escritora',
      img: '/panteon/rosalia-de-castro.webp',
      alt: 'Retrato de Rosalía de Castro',
      fechas: '1837-1885',
      aporte: 'Figura central del Rexurdimento literario gallego.'
    },
    {
      nombre: 'Alfredo Brañas',
      rol: 'Pensador',
      img: '/panteon/alfredo-branas.webp',
      alt: 'Imagen de Alfredo Brañas',
      fechas: '1859-1900',
      aporte: 'Defensor del regionalismo gallego.'
    },
    {
      nombre: 'Ramón Cabanillas',
      rol: 'Poeta',
      img: '/panteon/ramon-cabanillas.webp',
      alt: 'Imagen de Ramón Cabanillas',
      fechas: '1876-1959',
      aporte: 'Poeta nacional, voz del agrarismo.'
    },
    {
      nombre: 'Domingo Fontán',
      rol: 'Cartógrafo',
      img: '/panteon/domingo-fontan.webp',
      alt: 'Imagen de Domingo Fontán',
      fechas: '1788-1866',
      aporte: 'Primera carta geométrica de Galicia.'
    },
    {
      nombre: 'Francisco Asorey',
      rol: 'Escultor',
      img: '/panteon/francisco-asorey.webp',
      alt: 'Imagen de Francisco Asorey',
      fechas: '1889-1961',
      aporte: 'Escultura renovadora de temática gallega.'
    },
    {
      nombre: 'Alfonso Rodríguez Castelao',
      rol: 'Escritor y político',
      img: '/panteon/alfonso-castelao.webp',
      alt: 'Imagen de Castelao',
      fechas: '1886-1950',
      aporte: 'Intelectual clave, símbolo del galleguismo.'
    }
  ]
};

export const curiosidades = [
  {
    titulo: 'Triple escalera',
    texto: 'Innovación estructural con tres espirales independientes.',
    img: '/curiosidades/triple-escalera.webp',
    alt: 'Vista de la triple escalera helicoidal',
  },
  {
    titulo: 'Ilusión del claustro',
    texto: 'Juego de distancias en pilastras y arcos para “regularizar” una planta trapezoidal y percibir un cuadrado perfecto.',
    img: '/curiosidades/claustro.webp',
    alt: 'Detalle del claustro y su ilusión óptica',
  },
  {
    titulo: 'Púlpito perdido',
    texto: 'Tradición popular: fragmento de un antiguo púlpito conservado en la Cofradía del Rosario (sin confirmación documental).',
    img: '/curiosidades/abside.webp',
    alt: 'Ábside gótico de la iglesia',
  },
  {
    titulo: 'Parque memorial',
    texto: 'El parque actual reutiliza antiguos huertos y cementerio: ejemplo de adaptación paisajística patrimonial.',
    img: '/curiosidades/parque.webp',
    alt: 'Rincón verde del parque de Bonaval',
  }
];

export const galeriaCreativeCommons = [
  {
    titulo: 'Fachada principal',
    img: '/galeria/fachada.webp',
    imagenes: [
      '/galeria/fachada.webp',
      '/galeria/fachada_2.webp',
      '/galeria/fachada_3.webp'
    ]
  },
  {
    titulo: 'Ábside',
    img: '/galeria/abside.webp',
    imagenes: [
      '/galeria/abside.webp',
      '/galeria/abside_2.webp'
    ]
  },
  {
    titulo: 'Claustro',
    img: '/galeria/claustro.webp',
    imagenes: [
      '/galeria/claustro.webp',
      '/galeria/claustro_2.webp',
      '/galeria/claustro_3.webp',
      '/galeria/claustro_4.webp'
    ]
  },
  {
    titulo: 'Parque de Bonaval',
    img: '/galeria/parque.webp',
    imagenes: [
      '/galeria/parque.webp',
      '/galeria/parque_2.webp',
      '/galeria/parque_3.webp',
      '/galeria/parque_4.webp'
    ]
  },
  {
    titulo: 'Triple escalera',
    img: '/galeria/triple-escalera.webp',
    imagenes: [
      '/galeria/triple-escalera.webp',
      '/galeria/triple-escalera_2.webp',
      '/galeria/triple-escalera_3.webp',
      '/galeria/triple-escalera_4.webp'
    ]
  }
];

export const creditos = [
  'Síntesis elaborada por Gloria Labory Pesquer para la asignatura historia del arte, impartida por la profesora Susana García Mangas en agosto de 2025.',
  'Librerías de JavaScript utilizadas: Vue.js, GSAP, Three.js.'
];

export const bibliografia = [
  { nombre: 'Arteguias', url: 'https://www.arteguias.com/convento/conventosantodomingobonavalsantiago.htm' },
  { nombre: 'Santiago Turismo', url: 'https://www.santiagoturismo.com/monumentos/igrexa-e-convento-de-san-domingos-de-bonaval' },
  { nombre: 'Audioguía', url: 'https://www.audioguia.org/info/convento-bonaval-compostela/' }
];
