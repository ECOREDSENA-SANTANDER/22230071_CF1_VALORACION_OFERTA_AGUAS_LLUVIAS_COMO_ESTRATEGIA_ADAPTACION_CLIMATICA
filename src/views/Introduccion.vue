<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/intro/1.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/intro/2.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 La valoración de la oferta de aguas lluvias requiere comprender cómo se comporta la precipitación en el área de estudio, tanto a partir de registros históricos como de posibles condiciones futuras asociadas con escenarios de cambio climático. Para ello, no basta con reunir datos; es necesario reconocer su procedencia, el periodo que representan, la escala temporal, las unidades utilizadas y las condiciones que pueden afectar su calidad e interpretación.
            p.mb-0 En este componente formativo se abordarán las bases de datos históricas de precipitación, sus fuentes de información, los horizontes temporales y las formas de organizar y presentar los registros. Asimismo, se estudiarán las proyecciones de precipitación bajo escenarios de cambio climático, los referentes del Panel Intergubernamental sobre Cambio Climático y los escenarios utilizados para analizar posibles condiciones futuras en Colombia.
    
    .cajon.color-acento-botones.p-4.mb-5
      p.mb-0 El desarrollo culminará con el uso de una herramienta de cálculo que permitirá registrar y organizar información del área de estudio, datos históricos y datos proyectados de precipitación. A partir de las salidas generadas, el aprendiz podrá reconocer patrones, variaciones y diferencias entre condiciones históricas y futuras, manteniendo la trazabilidad entre la información utilizada y los resultados obtenidos.







    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
