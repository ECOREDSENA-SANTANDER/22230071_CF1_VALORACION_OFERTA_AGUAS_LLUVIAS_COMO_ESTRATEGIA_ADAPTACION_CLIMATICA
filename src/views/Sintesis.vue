<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La caracterización de la precipitación histórica y futura requiere integrar información confiable sobre las fuentes de datos, los periodos de referencia, la organización y validación de las series históricas, así como las proyecciones asociadas con escenarios de cambio climático y sus horizontes temporales. A partir de estos elementos, es posible reconocer variaciones en el comportamiento de la precipitación, comparar condiciones históricas y futuras e interpretar los resultados considerando las unidades, la calidad de los datos, la procedencia de la información y las condiciones de incertidumbre. La herramienta de cálculo complementa este proceso al permitir registrar el área de estudio y sus fuentes, organizar datos históricos y proyectados, aplicar controles básicos, generar resúmenes y calcular cambios absolutos y porcentuales. Su uso adecuado contribuye a mantener la trazabilidad de la información y a sustentar interpretaciones técnicas sobre la disponibilidad de agua lluvia, favoreciendo decisiones informadas relacionadas con el análisis del recurso hídrico y la adaptación frente a posibles cambios climáticos.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual de la precipitación histórica y futura: datos históricos, escenarios de cambio climático y herramienta de cálculo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
