<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Herramienta para presentación de datos históricos y proyectados
      
      
      
      .row.justify-content-center.mb-5.bg-color-2(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t3/1.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-2(src='@/assets/curso/temas/t3/2.svg')
          p.mb-3.text-white Luego de comprender cómo obtener e interpretar los datos históricos y proyectados, en este apartado se presenta una herramienta diseñada para el curso, mediante la cual se podrán registrar y organizar los datos utilizados en el análisis.
          p.mb-5.text-white Para desarrollar las actividades propuestas en este apartado, descargue la herramienta de cálculo que permitirá registrar, organizar y analizar la información histórica y proyectada de precipitación.
          a.anexo.mb-0.mx-0(:href="obtenerLink('/downloads/Anexo_01_Herramienta_de_calculo_para_datos_de_precipitacion.xlsx')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-xls.svg")
            .anexo__texto
              p.mb-0.text-center #[b Anexo.] Herramienta de calculo para datos de precipitación.
      
      
      .bg-primario.mb-0.px-5.py-4(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img.wcus-1.mx-auto(src='@/assets/curso/temas/t3/3.svg')
          .col-sm-12.col-lg-7
            .titulo-segundo.color-acento-contenido.mb-4
              h3.mb-3 Esquema general de la herramienta
            p.mb-5 Para reconocer la estructura general de la herramienta antes de abordar cada una de sus hojas, consulte la siguiente infografía descargable en formato PDF. En ella se presenta la organización de la herramienta en tres hojas y su función para registrar, organizar y comparar datos históricos y proyectados de precipitación.
            a.boton.me-3.indicador__container(
              :href="obtenerLink('/downloads/Anexo_05_Infografia_Esquema_General_Herramienta.pdf')"
              target="_blank"
              type="application/pdf"
              @mouseover="mostrarIndicador = false")
              span Descargar
              i.fas.fa-file-download
              .indicador--click(v-if="mostrarIndicador")
      
      
      
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Hoja 1. Localización y fuentes de datos
      
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-5.align-items-center
              .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
                img(src='@/assets/curso/temas/t3/4.svg')
              .col-sm-12.col-lg-8.mx-0.px-0
                .bg-color-6.p-4
                  h4.mb-0.text-center Pregunta orientadora
                .bg-color-1.p-4
                  p.mb-2 ¿Dónde está el área de estudio y de dónde provienen los datos que se van a utilizar?
                  p.mb-0 Esta hoja permite caracterizar el área de estudio y documentar las fuentes de información empleadas en el análisis de la precipitación.
            p.mb-0  En ella se registran los datos generales del área, como la ubicación geográfica, el municipio, el departamento, las coordenadas, la altitud, el área y demás características relevantes para el estudio. También se identifican las estaciones meteorológicas, bases de datos o fuentes climáticas utilizadas, incluyendo su código, ubicación, periodo disponible, variable, unidad de medida y procedencia.
      
      
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/6.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 #[b ¿Para qué sirve?] Permite establecer de dónde provienen los datos y a qué lugar corresponden, garantizando la trazabilidad de la información que posteriormente se utilizará en los cálculos.

          p.mb-3 #[b Información principal:] identificación del área de estudio, ubicación geográfica, coordenadas, altitud, área de estudio, estaciones meteorológicas, código de estación, fuente de información, periodo disponible, variable y unidad, observaciones y limitaciones.

          p.mb-0 #[b Resultado:] una ficha técnica del área de estudio y de las fuentes de información que permite conocer el contexto espacial y la procedencia de los datos.
      
      
      
      
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Hoja 2. Datos históricos de precipitación
      
      
      
      .row.justify-content-center.mb-5.bg-color-2.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t3/7.png')
        .col-sm-12.col-lg-7.p-4
          p.mb-3.text-white Pregunta orientadora: ¿Cómo se ha comportado la precipitación en el área de estudio durante el periodo histórico analizado?

          p.mb-3.text-white Esta hoja contiene la serie histórica de precipitación correspondiente al periodo de referencia seleccionado que, para esta herramienta, se establece inicialmente con un horizonte de 30 años.

          p.mb-0.text-white Los datos pueden provenir de estaciones meteorológicas o de bases de datos oficiales y deben incluir la fecha, la estación, la unidad, el valor registrado y la calidad del dato.
      
      
      p.mb-3(data-aos='fade-right') La hoja debe permitir organizar los datos y realizar controles básicos para identificar valores faltantes, inconsistencias, unidades distintas o registros que requieran revisión.

      p.mb-3(data-aos='fade-right') #[b ¿Para qué sirve?] Permite conocer el comportamiento observado de la precipitación y establecer una referencia histórica para comparar posteriormente las condiciones futuras proyectadas.

      p.mb-3(data-aos='fade-right') #[b Información principal:] fecha, año, mes, estación, código, precipitación, unidad, calidad del dato, fuente y observaciones.

      p.mb-5(data-aos='fade-right') También puede generar automáticamente:
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4
          .bg-color-7.p-4.br-1.hcus-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center Precipitación mensual.

        .col-sm-12.col-lg-4
          .bg-color-7.p-4.br-1.hcus-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center Precipitación anual.

        .col-sm-12.col-lg-4
          .bg-color-7.p-4.br-1.hcus-1.d-flex.justify-content-center.align-items-center
            p.mb-0.text-center Promedio histórico.
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4
          .bg-color-7.p-4.br-1.hcus-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center Valores máximos y mínimos.

        .col-sm-12.col-lg-4
          .bg-color-7.p-4.br-1.hcus-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center Porcentaje de datos faltantes.

        .col-sm-12.col-lg-4
          .bg-color-7.p-4.br-1.hcus-1.d-flex.justify-content-center.align-items-center
            p.mb-0.text-center Gráficos del comportamiento de la precipitación.

      
      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        p.mb-0.text-center #[b Resultado:] una serie histórica organizada, validada y trazable, que constituye la referencia para el análisis de escenarios futuros.
      
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Hoja 3. Datos proyectados de precipitación
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t3/8.png')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') #[b Pregunta orientadora:] ¿Cómo podría cambiar la precipitación en el área de estudio bajo diferentes escenarios y periodos futuros?

      p.mb-3(data-aos='fade-right') Esta hoja contiene información sobre la precipitación proyectada bajo diferentes escenarios de cambio climático.

      p.mb-5(data-aos='fade-right') Para el ejercicio se consideran los siguientes escenarios:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center SSP1-2.6

        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center SSP2-4.5

        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center SSP3-7.0

        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.d-flex.justify-content-center.align-items-center
            p.mb-0.text-center SSP5-8.5

      p.mb-4(data-aos='fade-right') Y los siguientes horizontes temporales:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center 2021–2040

        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center 2041–2060

        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.d-flex.justify-content-center.align-items-center.mb-cus
            p.mb-0.text-center 2061–2080

        .col-sm-12.col-lg-3
          .bg-color-7.p-4.br-1.d-flex.justify-content-center.align-items-center
            p.mb-0.text-center 2081–2100


      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/9.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/10.svg')
              .col-sm-12.col-lg-10
                  p.mb-3 Cada registro debe conservar el escenario, el periodo, la variable, la unidad, la fuente y, cuando corresponda, el modelo o conjunto de modelos utilizado.
                  p.mb-0 #[b ¿Para qué sirve?] Permite explorar cómo podría cambiar la precipitación bajo diferentes trayectorias climáticas futuras y comparar estos resultados con el comportamiento histórico.
            p.mb-3 Es importante comprender que estos datos corresponden a #[b proyecciones y no a predicciones determinísticas].

            p.mb-0 #[b Información principal:] escenario SSP, horizonte temporal, año, mes, precipitación proyectada, unidad, fuente, modelo o conjunto de modelos (cuando esté disponible), cambio respecto al periodo histórico y observaciones.

      .cajon.color-adicional-2.p-5.mb-0(data-aos='fade-right')
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6
              p.mb-4 La herramienta puede calcular:
              p.mb-2 • Cambio absoluto.  
              p.mb-5 • Cambio porcentual. 

              p.mb-0 #[b Resultado:] una serie histórica organizada, validada y trazable, que constituye la referencia para el análisis de escenarios futuros.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/11.png')

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
