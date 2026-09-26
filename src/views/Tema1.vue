<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Bases de datos históricas de precipitación
      
      
      .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 Antes de analizar las condiciones históricas de precipitación es necesario reconocer de dónde procede la información, qué periodo representa y de qué manera debe organizarse para conservar su calidad y trazabilidad. Estos aspectos permiten establecer una base coherente para la posterior incorporación de los datos a la herramienta de cálculo.
      
      
      
      
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Fuentes de información
      
      p.mb-5(data-aos='fade-right') La identificación de las condiciones históricas de precipitación inicia con la selección de fuentes de información que permitan representar adecuadamente el área de estudio. Esta selección no debe basarse únicamente en la proximidad geográfica, sino que también debe considerar la representatividad espacial y temporal, la calidad de los registros, la continuidad de la información, la resolución y la disponibilidad de metadatos. La Organización Meteorológica Mundial (OMM) establece orientaciones para la identificación de estaciones, redes de observación, instrumentos, métodos de medición y procedimientos asociados a la generación de información hidrológica y meteorológica (OMM, 2008).

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-12
          .titulo-sexto.color-primario
            p.mb-0 #[b Figura 1.]  Fuentes de información de precipitación histórica
          figure.mb-0
            img.mb-4(src='@/assets/curso/temas/t1/2.svg', alt='Cinco fuentes de precipitación histórica: estaciones meteorológicas, satélites, reanálisis, productos en malla e instrumentos propios.').mb-0
      
      p.mb-5(data-aos='fade-right') En Colombia, el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) constituye una fuente institucional fundamental para la consulta de información meteorológica y climática (IDEAM, 2026a). La selección de la fuente requiere relacionar las características de la información disponible con las necesidades del análisis.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ruta para seleccionar la fuente de información
      
      
      .bg-fondo-1.p-4.mb-5(data-aos='fade-right')
        PasosB.color-acento-botones.bg-white.p-4.br-1
          .row.justify-content-center(titulo='')
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/3.png')
            .col-sm-12.col-lg-6
              h4 Definir el objetivo
              p.mb-0 Precisar el propósito del análisis que se va a realizar.
          .row.justify-content-center(titulo='')
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/4.png')
            .col-sm-12.col-lg-6
              h4 Evaluar la cobertura
              p.mb-0 Revisar la cobertura espacial y temporal de las fuentes disponibles.
          .row.justify-content-center(titulo='')
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/5.png')
            .col-sm-12.col-lg-6
              h4 Revisar el periodo
              p.mb-0 Comprobar que el periodo disponible sea pertinente para el análisis.
          .row.justify-content-center(titulo='')
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/6.png')
            .col-sm-12.col-lg-6
              h4 Analizar la calidad
              p.mb-0 Valorar la calidad y confiabilidad de la información disponible.
          .row.justify-content-center(titulo='')
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/7.png')
            .col-sm-12.col-lg-6
              h4 Seleccionar la fuente
              p.mb-0 Elegir la fuente que responda mejor al análisis o combinar fuentes cuando sea necesario.

      p.mb-5(data-aos='fade-right') Para garantizar la trazabilidad, la información asociada a cada fuente debe conservar los datos necesarios para reconstruir su procedencia y las condiciones en las que fue obtenida o procesada.
      
      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        p.mb-0  #[b Tabla 1.] Información para la trazabilidad de las fuentes de precipitación
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .tabla-a.color-secundario.mb-0.t-cus
            table
              thead
                tr
                  th #[b Aspecto]
                  th #[b Información que se debe registrar]
              tbody
                tr
                  td Identificación
                  td Nombre o código de la estación o del producto
                tr
                  td Localización
                  td Ubicación, coordenadas y elevación
                tr
                  td Características del registro
                  td Variable, unidad de medida, frecuencia y periodo disponible
                tr
                  td Generación de la información
                  td Instrumento o método de generación y resolución espacial o temporal
                tr
                  td Trazabilidad
                  td Versión y fecha de consulta
                tr
                  td Información espacial, cuando corresponda
                  td Sistema de referencia, resolución de la malla y procedimiento de selección o extracción


        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/8.png')
      
      p.mb-5(data-aos='fade-right') Los productos satelitales y de reanálisis pueden complementar los registros de estaciones cuando la cobertura espacial o temporal es limitada. Sin embargo, debe distinguirse entre una observación directa y una estimación derivada de modelos, sensores remotos o procedimientos de integración de la información.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Trazabilidad de la fuente
      

      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-5.bg-color-1.align-items-center
              .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
                img(src='@/assets/curso/temas/t1/10.svg')
              .col-sm-12.col-lg-8
                  p.mb-0.p-4 La fuente debe conservar su naturaleza durante todo el procesamiento y la presentación de los resultados.
            p.mb-0 La selección de la fuente constituye, por tanto, una decisión técnica que debe quedar sustentada. Cuando ninguna fuente representa completamente el área de estudio, se deben documentar la alternativa seleccionada, sus ventajas y limitaciones y, cuando sea necesario, utilizar una fuente principal y otra de contraste. El propósito no es forzar la coincidencia entre bases de datos, sino establecer qué características de la precipitación son consistentes y cuáles dependen de la fuente, la escala o el método utilizado.













      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Horizonte temporal de series históricas
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/11.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/12.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 El horizonte temporal corresponde al periodo durante el cual se dispone de información histórica y se caracteriza el comportamiento de la precipitación. Su selección debe considerar el propósito del análisis, la resolución requerida, la disponibilidad de registros y la calidad de la información.
            p.mb-0 Los datos de precipitación pueden analizarse a diferentes escalas temporales. Los registros diarios permiten estudiar eventos y secuencias, tanto secas como húmedas; los datos mensuales permiten identificar patrones de estacionalidad; y los datos anuales facilitan la comparación de magnitudes generales, aunque pueden ocultar la distribución de la precipitación a lo largo del año. La OMM recomienda que la observación y el procesamiento de variables hidrológicas consideren adecuadamente la escala temporal y las características del sistema de medición (OMM, 2008).
      
      
      .bg-primario.mb-5.px-5.py-4(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img.wcus-1.mx-auto(src='@/assets/curso/temas/t1/13.svg')
          .col-sm-12.col-lg-7
            .titulo-segundo.color-acento-contenido.mb-4
              h3.mb-3 Horizontes temporales de precipitación histórica
            p.mb-5 Para ampliar la información sobre los horizontes temporales utilizados en el análisis de series históricas de precipitación, consulte la siguiente infografía descargable en formato PDF. En ella se presentan los periodos de análisis, su utilidad y algunas recomendaciones para su selección.
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/Anexo_02_Infografia_Horizontes_Temporales_Precipitacion_Historica.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false")
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")

      .row.justify-content-center.mb-5.bg-color-2.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t1/14.png')
        .col-sm-12.col-lg-7.p-4
          p.mb-3.text-white La escala seleccionada debe ser compatible tanto con la herramienta de cálculo como con el propósito del análisis. Un acumulado mensual, por ejemplo, no debe desagregarse artificialmente en valores diarios, ya que dicha operación introduciría información no observada.

          p.mb-0.text-white Antes de utilizar una serie histórica, se debe verificar la fecha inicial y final, la continuidad, los años completos, los periodos parciales, los años bisiestos, las convenciones temporales y los posibles cambios en el sistema de medición. También deben identificarse los datos faltantes, los duplicados, los valores extremos y los registros inconsistentes.
      
      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/16.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 La calidad temporal no debe evaluarse únicamente mediante el porcentaje global de datos disponibles. Una serie puede presentar una alta completitud y, simultáneamente, contener una secuencia prolongada de datos faltantes durante un periodo relevante. Por esta razón, se debe analizar tanto la completitud general como su distribución temporal.
            p.mb-0 En el contexto colombiano, el IDEAM ha desarrollado análisis de tendencias de precipitación para el periodo 1981–2020 como insumo para la Cuarta Comunicación Nacional de Cambio Climático, lo que constituye un referente importante para la caracterización histórica del clima del país (IDEAM, 2023).
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/15.png')
      
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Presentación de datos históricos de precipitación
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
            p.mb-5 La presentación de los datos históricos debe permitir su lectura, verificación y posterior incorporación a la herramienta de cálculo. Para ello, se recomienda estructurar la información mediante una matriz trazable en la que cada fila represente una observación y cada campo tenga una función claramente definida.
            .bg-color-3.p-4.mb-0
              p.mb-4 Como mínimo, la matriz debe contener sitio, fecha, precipitación, unidad, fuente, versión, periodo y observaciones. Cuando se incorporan diferentes conjuntos de datos, se deben incluir campos que permitan diferenciar la fuente, el escenario, el modelo, el horizonte y el tratamiento aplicado.

              p.mb-0 Los valores numéricos deben conservar una estructura compatible con la herramienta. Las unidades no deben incorporarse en las celdas numéricas, y los códigos utilizados para representar datos faltantes deben diferenciarse de los valores cero. Un cero indica ausencia de precipitación medible, mientras que una celda vacía indica ausencia de información. La conservación de estas diferencias es fundamental para evitar alteraciones en los cálculos.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/17.svg')  

      p.mb-3(data-aos='fade-right') La presentación debe incluir, además, una síntesis gráfica que permita reconocer el comportamiento histórico de la precipitación. Según la escala de análisis, pueden utilizarse series temporales, acumulados mensuales o anuales, promedios climatológicos, percentiles y otras representaciones estadísticas.

      p.mb-5(data-aos='fade-right') Toda gráfica debe identificar claramente la variable, el periodo, la unidad, la fuente y la escala temporal. La representación gráfica debe facilitar la interpretación, pero no sustituye la revisión de la calidad y la procedencia de los datos.

      .bg-primario.mb-5.px-5.py-4(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img.wcus-1.mx-auto(src='@/assets/curso/temas/t1/18.svg')
          .col-sm-12.col-lg-7
            .titulo-segundo.color-acento-contenido.mb-4
              h3.mb-3 Presentación anual de datos históricos de precipitación
            p.mb-5 Para ampliar la comprensión sobre la forma en que pueden organizarse y visualizarse los datos históricos de precipitación correspondientes a una serie anual, consulte la siguiente infografía descargable en formato PDF. En ella se presenta un ejemplo con metadatos de la serie, matriz de datos, resumen mensual, control de calidad, serie diaria de precipitación y distribución mensual.
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/Anexo_03_Infografia_Presentacion_Anual_Datos_Historicos_Precipitacion.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false")
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-5 Cuando se dispone de información histórica de precipitación correspondiente a varios años, su presentación requiere una organización que facilite la comparación y el análisis de patrones de comportamiento. Consulte la siguiente infografía descargable en formato PDF. En ella se presenta un ejemplo multianual con metadatos de la serie, matriz de datos, resumen anual, estadísticas generales, promedio mensual climatológico y distribución intraanual.

          .bg-color-4.p-4.mb-0.br-2
            .row.justify-content-around.align-items-center.mb-0
              .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                img(src="@/assets/curso/temas/t1/20.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Infografía
                    p.mb-0 Presentación multianual de datos históricos de precipitación.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_04_Infografia_Presentacion_Multianual_Datos_Historicos_Precipitacion.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/19.png')

  </template>

<script>
export default {
  name: 'Tema1',
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
