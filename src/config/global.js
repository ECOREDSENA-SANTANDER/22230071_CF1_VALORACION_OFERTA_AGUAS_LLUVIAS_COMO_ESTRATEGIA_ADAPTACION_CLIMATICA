export default {
  global: {
    Name: 'Caracterización de la precipitación histórica y futura del área de estudio.',
    Description: 'Este componente desarrolla la identificación de las condiciones de precipitación del área de estudio mediante el análisis de datos históricos y proyecciones climáticas. Integra fuentes de información, horizontes temporales, manejo de datos, variables, unidades y uso de la herramienta de cálculo para organizar, presentar e interpretar información histórica y futura.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
    menuPrincipal: {
  "menu": [
    {
      "nombreRuta": "inicio",
      "icono": "fas fa-home",
      "titulo": "Volver al inicio"
    },
    {
      "nombreRuta": "introduccion",
      "icono": "fas fa-info-circle",
      "titulo": "Introducción",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "tema1",
      "numero": "1",
      "titulo": "Bases de datos históricas de precipitación",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "1.1",
          "titulo": "Fuentes de información",
          "hash": "t_1_1"
        },
        {
          "numero": "1.2",
          "titulo": "Horizonte temporal de series históricas",
          "hash": "t_1_2"
        },
        {
          "numero": "1.3",
          "titulo": "Presentación de datos históricos de precipitación",
          "hash": "t_1_3"
        }
      ]
    },
    {
      "nombreRuta": "tema2",
      "numero": "2",
      "titulo": "Proyecciones de precipitación bajo escenarios de cambio climático",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "2.1",
          "titulo": "Panel Intergubernamental sobre Cambio Climático",
          "hash": "t_2_1"
        },
        {
          "numero": "2.2",
          "titulo": "Escenarios de cambio climático para Colombia",
          "hash": "t_2_2"
        },
        {
          "numero": "2.3",
          "titulo": "Horizontes temporales de las proyecciones",
          "hash": "t_2_3"
        },
        {
          "numero": "2.4",
          "titulo": "Reportes, manejo de datos y descripción de escenarios",
          "hash": "t_2_4"
        }
      ]
    },
    {
      "nombreRuta": "tema3",
      "numero": "3",
      "titulo": "Herramienta para presentación de datos históricos y proyectados",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "3.1",
          "titulo": "Hoja 1. Localización y fuentes de datos",
          "hash": "t_3_1"
        },
        {
          "numero": "3.2",
          "titulo": "Hoja 2. Datos históricos de precipitación",
          "hash": "t_3_2"
        },
        {
          "numero": "3.3",
          "titulo": "Hoja 3. Datos proyectados de precipitación",
          "hash": "t_3_3"
        }
      ]
    }
  ],
  "subMenu": [
    {
      "icono": "fas fa-sitemap",
      "titulo": "Síntesis",
      "nombreRuta": "sintesis",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "actividad",
      "icono": "far fa-question-circle",
      "titulo": "Actividad didáctica",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "glosario",
      "icono": "fas fa-sort-alpha-down",
      "titulo": "Glosario"
    },
    {
      "icono": "fas fa-book",
      "titulo": "Referencias bibliográficas",
      "nombreRuta": "referencias"
    },
    {
      "icono": "fas fa-file-pdf",
      "titulo": "Descargar PDF",
      "download": "downloads/dist.pdf"
    },
    {
      "icono": "fas fa-download",
      "titulo": "Descargar material",
      "download": "downloads/material.zip"
    },
    {
      "icono": "far fa-registered",
      "titulo": "Créditos",
      "nombreRuta": "creditos"
    }
  ]
},
  glosario: [
    {
      termino: 'Calidad del dato',
      significado: 'conjunto de características que permiten determinar si un dato es adecuado para el análisis. considera aspectos como completitud, consistencia, unidad de medida y presencia de valores faltantes o inconsistentes.',
    },
    {
      termino: 'Cambio de precipitación',
      significado: 'variación de la precipitación proyectada respecto de una condición histórica de referencia. puede expresarse como cambio absoluto o porcentual e indicar posibles aumentos o disminuciones.',
    },
    {
      termino: 'Datos históricos de precipitación',
      significado: 'registros obtenidos a partir de observaciones realizadas durante un periodo determinado, utilizados para caracterizar el comportamiento de la precipitación y establecer una referencia para comparaciones futuras.',
    },
    {
      termino: 'Escenario de cambio climático',
      significado: 'representación plausible de una posible evolución futura del clima bajo determinadas condiciones socioeconómicas y de emisiones. no constituye una predicción exacta del futuro.',
    },
    {
      termino: 'Escenarios ssp',
      significado: 'trayectorias socioeconómicas compartidas que representan posibles evoluciones de la sociedad y diferentes niveles de forzamiento radiativo empleados para generar y analizar proyecciones climáticas.',
    },
    {
      termino: 'Forzamiento radiativo',
      significado: 'alteración del balance energético del sistema climático producida por factores que modifican el flujo de energía de la tierra. en los escenarios ssp se expresa en w/m².',
    },
    {
      termino: 'Fuente de información',
      significado: 'entidad, estación, base de datos, plataforma o producto climático del que procede un dato. su identificación permite establecer la procedencia y mantener la trazabilidad de la información.',
    },
    {
      termino: 'Horizonte temporal',
      significado: 'periodo futuro utilizado para analizar el comportamiento proyectado de una variable climática y comparar sus posibles cambios a medida que avanza el tiempo.',
    },
    {
      termino: 'Incertidumbre climática',
      significado: 'grado de incertidumbre asociado con las condiciones climáticas futuras, relacionado con factores como la variabilidad del sistema climático, las diferencias entre modelos y los escenarios considerados.',
    },
    {
      termino: 'Modelo climático',
      significado: 'representación matemática del sistema climático que permite simular sus interacciones y explorar posibles condiciones futuras bajo determinados escenarios.',
    },
    {
      termino: 'Periodo histórico de referencia',
      significado: 'intervalo utilizado para caracterizar las condiciones climáticas observadas y establecer una base de comparación frente a posibles cambios futuros.',
    },
    {
      termino: 'Precipitación',
      significado: 'agua que cae desde la atmósfera hacia la superficie terrestre. en este componente constituye la variable climática principal para caracterizar las condiciones históricas y analizar posibles cambios futuros.',
    },
    {
      termino: 'Precipitación proyectada',
      significado: 'valor de precipitación obtenido mediante proyecciones climáticas para un escenario y horizonte temporal determinados. representa una posible condición futura y no una predicción exacta.',
    },
  ],
  referencias: [
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
