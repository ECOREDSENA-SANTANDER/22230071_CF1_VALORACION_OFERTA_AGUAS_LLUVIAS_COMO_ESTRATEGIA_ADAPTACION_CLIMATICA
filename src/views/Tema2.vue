<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Proyecciones de precipitación bajo escenarios de cambio climático
      
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-4 El análisis de las condiciones futuras de precipitación requiere comprender cómo se construyen e interpretan los escenarios de cambio climático y de qué manera pueden utilizarse para analizar posibles cambios en el área de estudio. Para ello, es necesario reconocer el papel del Panel Intergubernamental sobre Cambio Climático, las trayectorias socioeconómicas compartidas, los horizontes temporales y las condiciones asociadas al manejo e interpretación de los datos proyectados.
          p.mb-0 Antes de abordar los escenarios de cambio climático, es importante reconocer que los cambios en la precipitación no se expresan únicamente como disminuciones o aumentos en la cantidad de lluvia. También pueden manifestarse mediante variaciones en su frecuencia, intensidad y distribución temporal, con efectos sobre la disponibilidad de agua, la escorrentía y la ocurrencia de periodos secos o lluvias intensas.
      
      .cajon.color-acento-botones.p-4.mb-4(data-aos='fade-right')
        p.mb-0 Explore el siguiente pódcast para comprender cómo estas variaciones pueden influir en el territorio y por qué es necesario analizar el comportamiento de la precipitación antes de interpretar condiciones futuras.
      
      
      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t2/2.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-color-2.mb-0(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast: cuando la lluvia cambia: sequías, inundaciones y decisiones sobre el agua"
              :audio="require_src('@/assets/curso/temas/audio/podcast.mp3')"
          )
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Panel Intergubernamental sobre Cambio Climático
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t2/3.png')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') Para abordar el análisis de la precipitación futura es necesario reconocer el marco científico que sustenta la construcción e interpretación de las proyecciones climáticas.
      p.mb-5(data-aos='fade-right') El Panel Intergubernamental sobre Cambio Climático (Intergovernmental Panel on Climate Change, IPCC) fue creado en 1988 con el propósito de realizar evaluaciones periódicas del conocimiento disponible sobre el cambio climático. Estas evaluaciones constituyen un referente para comprender la evolución del sistema climático y sus posibles consecuencias.
      
      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0 La relación entre el IPCC, el Sexto Informe de Evaluación (Sixth Assessment Report, AR6), las Trayectorias Socioeconómicas Compartidas (Shared Socioeconomic Pathways, SSP), los modelos del Proyecto de Intercomparación de Modelos Acoplados, fase 6 (Coupled Model Intercomparison Project Phase 6, CMIP6) y las proyecciones de precipitación se presenta en la siguiente figura.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-12
          .titulo-sexto.color-primario
            p.mb-0 #[b Figura 2.]  Papel del IPCC en el análisis de proyecciones climáticas
          figure.mb-0
            img.mb-0(src='@/assets/curso/temas/t2/4.svg', alt='Secuencia del IPCC a las proyecciones de precipitación: AR6, trayectorias SSP, modelos CMIP6 y estimaciones futuras.').mb-0
      
      p.mb-3(data-aos='fade-right') En este marco, los escenarios SSP y los modelos climáticos permiten generar proyecciones de precipitación para analizar posibles cambios futuros (IPCC, 2021).

      p.mb-5(data-aos='fade-right') El análisis comparativo de los escenarios permite examinar cómo pueden variar las condiciones de precipitación frente a diferentes trayectorias. A continuación, se presentan los escenarios utilizados para el análisis en Colombia y sus principales características.
      
      
      
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Escenarios de cambio climático para Colombia
      
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t2/5.png')
      p.mb-3(data-aos='fade-right') El IPCC utiliza las Trayectorias Socioeconómicas Compartidas o Shared Socioeconomic Pathways (SSP) como parte del marco de escenarios empleado en su Sexto Informe de Evaluación. La denominación de cada escenario combina una trayectoria socioeconómica (el primer número), con un nivel aproximado de forzamiento radiativo al año 2100 (el segundo número). Por ejemplo, en SSP2-4.5, el número 2 identifica la trayectoria socioeconómica SSP2 y 4.5 corresponde al nivel de forzamiento radiativo aproximado asociado al escenario.
      p.mb-5(data-aos='fade-right') Es importante aclarar que SSP no significa directamente cambio climático. El escenario integra una trayectoria socioeconómica y climática. Por ello, dos escenarios con trayectorias socioeconómicas distintas pueden conducir a niveles similares de forzamiento, mientras que una misma trayectoria socioeconómica puede analizarse bajo distintos niveles de mitigación.
      
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/7.svg')
              .col-sm-12.col-lg-10
                  p.mb-0  El IPCC utiliza cinco escenarios ilustrativos principales en el AR6: SSP1-1.9, SSP1-2.6, SSP2-4.5, SSP3-7.0 y SSP5-8.5. Sin embargo, para la generación de los escenarios de la Cuarta Comunicación Nacional de Colombia, el IDEAM utiliza cuatro de ellos: SSP1-2.6, SSP2-4.5, SSP3-7.0 y SSP5-8.5. El escenario SSP4-6.0 no fue incluido debido a la menor disponibilidad de modelos climáticos globales con información suficiente para mantener la homogeneidad en la selección y evaluación de modelos.

      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        h4 Los escenarios no son predicciones
        p.mb-0 Los escenarios representan diferentes futuros posibles y no permiten afirmar cuál ocurrirá exactamente. Por esta razón, no es técnicamente correcto denominarlos escenarios “buenos”, “malos”, “optimistas” o “pesimistas”. Sus denominaciones deben utilizarse con precaución y no interpretarse como descripciones absolutas de todos los futuros posibles dentro de cada familia SSP.
      

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 ¿Qué significa cada escenario?

      p.mb-5(data-aos='fade-right') Para interpretar las proyecciones de precipitación es necesario reconocer las características particulares de cada escenario utilizado por el IDEAM y su relación con las condiciones socioeconómicas, las emisiones y el nivel de forzamiento climático.


      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/3.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Escenarios de cambio climático utilizados por el IDEAM

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-card").mb-5(data-aos='fade-right')
        .row.justify-content-center.align-items-center(titulo="SSP1-2.6: bajas emisiones y alta mitigación")
          .col-sm-12.col-lg-6
              p.mb-3 El escenario SSP1-2.6 representa una trayectoria caracterizada por mayores esfuerzos de sostenibilidad y de reducción de emisiones. La sociedad avanza hacia modelos de desarrollo con mayor cooperación internacional, desarrollo inclusivo y tecnologías limpias, con menor intensidad de recursos y menores emisiones de gases de efecto invernadero. Desde el punto de vista climático, corresponde a una trayectoria de bajo forzamiento radiativo. El calentamiento proyectado es considerablemente menor que el de los escenarios de mayores emisiones.

              p.mb-3 Para el análisis de la precipitación, esto no implica que permanezca constante. Incluso en este escenario, pueden presentarse modificaciones en la distribución temporal y espacial de la precipitación, así como cambios en los eventos extremos y en la variabilidad climática.

              p.mb-0 Por esta razón, bajo SSP1-2.6 también deben analizarse los cambios en la precipitación y no asumir que la disponibilidad futura de agua será igual a la histórica.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/8.png')

        .row.justify-content-center.align-items-center(titulo="SSP2-4.5: trayectoria intermedia")
          .col-sm-12.col-lg-6
            p El SSP2-4.5 representa una trayectoria intermedia en la que las tendencias sociales, económicas y tecnológicas evolucionan sin transformaciones tan profundas como las planteadas en el SSP1, manteniendo el desarrollo y el crecimiento económico con esfuerzos moderados de mitigación.
            p.mb-0 El nivel de emisiones y de forzamiento se sitúa en un rango intermedio. Por esta razón, este escenario suele utilizarse como una referencia útil para explorar condiciones futuras intermedias. En el análisis de la precipitación, se debe analizar si los cambios proyectados son consistentes entre periodos, regiones y modelos, y no limitarse a comparar únicamente el valor final del siglo.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/9.png')

        .row.justify-content-center.align-items-center(titulo="SSP3-7.0: altas emisiones")
          .col-sm-12.col-lg-6
            p El escenario SSP3-7.0 representa una trayectoria caracterizada por un mundo fragmentado, altas desigualdades, poco progreso tecnológico, mayores dificultades de cooperación internacional, desarrollo desigual, mayores barreras para la mitigación y niveles elevados de emisiones. El IPCC lo incorpora como un escenario de altas emisiones que permite explorar condiciones climáticas considerablemente diferentes de las asociadas con escenarios de mitigación fuerte.
            p.mb-0 Para el análisis de la precipitación, este escenario es particularmente útil para estudiar cómo pueden aumentar las diferencias respecto al periodo histórico a medida que avanza el siglo. Sin embargo, es importante comprender que un escenario de mayor calentamiento no implica necesariamente una disminución uniforme de la precipitación en todas las regiones. Los cambios en la precipitación dependen de la región, la estación, la variable analizada y el modelo climático.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/10.png')

        .row.justify-content-center.align-items-center(titulo="SSP5-8.5: emisiones muy altas")
          .col-sm-12.col-lg-6
            p El SSP5-8.5 representa una trayectoria de emisiones muy altas, asociada a un desarrollo energético intensivo basado en combustibles fósiles, con rápido crecimiento económico, altos niveles de consumo y uso intensivo de recursos.
            p Es el escenario con el mayor forzamiento radiativo de los cuatro utilizados por el IDEAM. En el contexto del análisis de riesgos climáticos, permite explorar condiciones futuras asociadas a un nivel elevado de cambio climático.
            p Este escenario permite analizar qué podría ocurrir si se materializara una trayectoria de emisiones y condiciones socioeconómicas de estas características. El IPCC incluye SSP5-8.5 en el conjunto de escenarios de altas y muy altas emisiones utilizados para explorar la respuesta del sistema climático.
            p.mb-0 La comparación de estos escenarios permite analizar la sensibilidad de las condiciones de precipitación frente a diferentes trayectorias. Para comprender cómo se obtiene una proyección, también es necesario reconocer la relación entre el escenario, el modelo climático, la variable analizada, el horizonte temporal y el área de estudio.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/11.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 ¿Cómo se relacionan los escenarios con la precipitación?
      
      .bloque-texto-g.bloque-texto-g.bg-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/12.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Una idea fundamental es que los escenarios no proporcionan una cantidad fija de lluvia. El escenario constituye una de las entradas del sistema de modelación climática y, a partir de este, los modelos generan posibles trayectorias futuras de diferentes variables, entre ellas precipitación, temperatura media, temperatura máxima, temperatura mínima, humedad relativa, velocidad del viento y radiación.
          p.mb-0 La relación entre el escenario, el modelo climático y la variable analizada puede representarse mediante la siguiente secuencia.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-12
          .titulo-sexto.color-primario
            p.mb-0 #[b Figura 3.] Estructura conceptual de una proyección climática
          figure.mb-0
            img.mb-4(src='@/assets/curso/temas/t2/13.svg', alt='Secuencia de una proyección climática: trayectoria, emisiones, forzamiento, modelo, proyección, variable, horizonte y área de análisis').mb-0

      .cajon.color-acento-contenido.p-4.mb-0(data-aos='fade-right')
        p.mb-0 #[b Por ejemplo:] SSP2-4.5 → modelo climático → precipitación → 2041–2060 → área de estudio → cambio respecto al periodo de referencia.







      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Horizontes temporales de las proyecciones
      
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/14.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/15.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 Un horizonte temporal corresponde a un periodo futuro de referencia utilizado en las proyecciones climáticas para analizar posibles cambios y comparar diferentes condiciones futuras.
            p.mb-0 Una de las ventajas del visualizador del IDEAM es que permite analizar los cambios en distintos periodos del siglo XXI. Para la Cuarta Comunicación Nacional, las proyecciones se organizan en cuatro horizontes temporales: 2021–2040, 2041–2060, 2061–2080 y 2081–2100.
      
      p.mb-5(data-aos='fade-right') El IDEAM dispone de información diferenciada para cada escenario y para cada uno de estos periodos. El visualizador contiene, por ejemplo, capas específicas de cambio de precipitación para SSP1-2.6, SSP2-4.5, SSP3-7.0 y SSP5-8.5 en cada horizonte temporal. 

      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        h4 Escenario y horizonte deben analizarse juntos
        p.mb-0 El cambio climático no se interpreta únicamente comparando escenarios; también es necesario analizar cómo cambia una variable a medida que avanza el horizonte temporal.
      
      p.mb-5(data-aos='fade-right') Para una misma área de estudio se puede comparar SSP2-4.5 / 2021–2040 con SSP2-4.5 / 2041–2060 y posteriormente con SSP2-4.5 / 2081–2100. De esta manera, se puede identificar si la señal de cambio se mantiene, aumenta, disminuye o presenta una alta variabilidad. 
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Periodo de referencia y cambio climático
      

      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t2/16.png')(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') Para interpretar correctamente las proyecciones, es necesario diferenciar entre la precipitación histórica y el cambio proyectado. El periodo histórico constituye la referencia contra la cual se compara la condición futura. En la metodología de la Cuarta Comunicación Nacional, las series futuras se generaron tomando 1981–2010 como periodo histórico de referencia.
      p.mb-5(data-aos='fade-right') El cambio de la precipitación puede expresarse de manera absoluta o porcentual. El siguiente ejemplo muestra cómo calcular e interpretar ambas magnitudes.
      

      .titulo-tercer-nivel-2.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel-2__icon(src='@/assets/curso/temas/bg/3.svg')
        h3.titulo-tercer-nivel-2__text.mb-0.px-0.py-2 Cómo calcular e interpretar el cambio de precipitación

      LineaTiempoE.color-secundario.mb-5
        .row.justify-content-center.mb-0(titulo='Paso 1')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/17.svg')
          .col-sm-12.col-lg-10
            h4 Identificar los valores
            p Para una zona se tiene:
            p #[b Precipitación de referencia:] 1.200 mm
            p.mb-0 #[b Precipitación futura:] 1.080 mm

        .row.justify-content-center.mb-0(titulo='Paso 2')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/18.svg')
          .col-sm-12.col-lg-10
            h4 Calcular el cambio absoluto
            p Ecuación 1. Cálculo de cambio absoluto
            p #[b ΔP = P futuro – P referencia]
            p Aplicando los valores:
            p #[b ΔP = 1.080 – 1.200 = –120 mm]
            p.mb-0 El resultado indica una disminución de #[b 120 mm] respecto al periodo de referencia.

        .row.justify-content-center.mb-0(titulo='Paso 3')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/19.svg')
          .col-sm-12.col-lg-10
            h4 Calcular el cambio porcentual
            p Ecuación 2. Cálculo de cambio porcentual
            p #[b ΔP (%) = [(P futuro – P referencia) / P referencia] × 100]
            p Aplicando los valores:
            p #[b ΔP (%) = [(1.080 – 1.200) / 1.200] × 100 = –10 %]
            p.mb-0 El resultado indica una disminución equivalente al 10 % respecto al periodo de referencia.

        .row.justify-content-center.mb-0(titulo='Paso 4')
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/20.svg')
          .col-sm-12.col-lg-10
            h4 Interpretar el resultado
            p.mb-0 La precipitación proyectada presenta una disminución de #[b 120 mm], equivalente al #[b 10 %] respecto de la referencia.

      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0.text-center Nota. Cambio absoluto y cambio porcentual son magnitudes diferentes. Un cambio del 10 % no equivale a 10 mm de precipitación.

      p.mb-3(data-aos='fade-right') Para complementar la interpretación de las proyecciones, se recomienda consultar el portal institucional del IDEAM y ubicar el recurso “Escenarios de cambio climático”. Allí se encuentra un visualizador que permite explorar, entre otros elementos, cambios proyectados de precipitación para diferentes escenarios SSP, horizontes temporales y áreas del territorio colombiano.
      p.mb-0(data-aos='fade-right') La consulta del visualizador tiene un propósito exploratorio y de interpretación espacial. Para análisis cuantitativos detallados deben utilizarse los datos originales disponibles en los recursos técnicos del IDEAM.



      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Reportes, manejo de datos y descripción de escenarios
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/21.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 En el contexto colombiano, el análisis debe complementarse con la información oficial del IDEAM. La Guía metodológica de la elaboración de los escenarios de cambio climático de la Cuarta Comunicación Nacional de Cambio Climático de Colombia, código GCI-G004 y publicada en marzo de 2026, constituye una fuente técnica para comprender la metodología, los insumos, los modelos, los escenarios y las condiciones de utilización de las proyecciones nacionales (IDEAM, 2026b).
          p.mb-0 La metodología de la Cuarta Comunicación Nacional genera series futuras a escala diaria para el periodo 2021–2100, cuyas condiciones de generación y utilización deben considerarse durante el análisis (IDEAM, 2026b).  

      p.mb-3(data-aos='fade-right') En el manejo de estos datos es fundamental diferenciar entre datos observados, información histórica modelada y proyecciones futuras. Cada categoría tiene un propósito y un nivel de incertidumbre diferentes, por lo que no debe mezclarse sin una identificación explícita.

      p.mb-5(data-aos='fade-right') Para utilizar correctamente una proyección es necesario conservar la información que permita identificar sus condiciones de generación y utilización. Esta información puede organizarse mediante la siguiente tabla.



      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        p.mb-0  #[b Tabla 2.] Información para identificar y utilizar una proyección climática
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/22.png')
        .col-sm-12.col-lg-7
          .tabla-a.color-secundario.mb-0.t-cus-2
            table
              thead
                tr
                  th #[b Elemento]
                  th #[b Información que se debe identificar]
              tbody
                tr
                  td Referencia temporal
                  td Periodo de referencia
                tr
                  td Proyección temporal
                  td Horizonte futuro
                tr
                  td Escenario
                  td Escenario SSP
                tr
                  td Modelación
                  td Modelo o conjunto de modelos
                tr
                  td Variable
                  td Variable climática analizada
                tr
                  td Unidad
                  td Unidad de medida
                tr
                  td Escala espacial
                  td Resolución espacial
                tr
                  td Escala temporal
                  td Resolución temporal
                tr
                  td Procedencia
                  td Fuente
                tr
                  td Procesamiento
                  td Método de procesamiento

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/23.png')
          .col-sm-12.col-lg-7
              .row.justify-content-center.mb-3
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t2/24.svg')
                .col-sm-12.col-lg-10
                    p.mb-0 La comparación entre la precipitación histórica y la futura debe realizarse sobre periodos equivalentes y con unidades y escalas compatibles. Para cuantificar esta comparación se utilizan los cambios absoluto y porcentual desarrollados en el apartado 2.3.1. Estos resultados deben acompañarse de los valores absolutos, especialmente cuando la precipitación de referencia es baja.
              p.mb-0 La interpretación debe incorporar la incertidumbre de las proyecciones. El IPCC utiliza conjuntos de modelos y medidas de acuerdo entre sí para comunicar la robustez de determinadas señales de cambio.


      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        h4 La divergencia también debe comunicarse
        p.mb-3 Cuando diferentes modelos presentan resultados divergentes, esta divergencia debe comunicarse como parte del resultado y no ocultarse mediante la selección arbitraria de un único modelo (IPCC, 2021).
        p.mb-0 El reconocimiento de estas condiciones favorece una interpretación técnica y trazable de los datos proyectados.











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
