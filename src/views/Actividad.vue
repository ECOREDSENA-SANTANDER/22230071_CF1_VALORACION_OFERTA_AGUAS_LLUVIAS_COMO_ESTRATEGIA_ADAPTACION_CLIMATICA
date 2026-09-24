<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion: '<b>Objetivo:</b> verificar la apropiación de los conceptos relacionados con fuentes y series históricas de precipitación, horizontes temporales, organización y validación de datos, escenarios de cambio climático, proyecciones climáticas y uso de la herramienta de cálculo para interpretar información histórica y futura.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [{"id": 1, "texto": "Para seleccionar una fuente de precipitación histórica, ¿qué criterio debe tener mayor prioridad?", "imagen": "@/assets/actividad/imagen1.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Que contenga la mayor cantidad de registros, sin considerar su ubicación.", "esCorrecta": false}, {"id": "b", "texto": "Que presente los valores de precipitación más altos.", "esCorrecta": false}, {"id": "c", "texto": "Que sea representativa del área de estudio y cuente con información pertinente, trazable y de calidad.", "esCorrecta": true}, {"id": "d", "texto": "Que incluya únicamente datos de los últimos cinco años.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 2, "texto": "¿Qué tipo de fuente combina observaciones y resultados de modelos para generar series climáticas integradas?", "imagen": "@/assets/actividad/imagen2.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Estaciones meteorológicas.", "esCorrecta": false}, {"id": "b", "texto": "Datos de reanálisis.", "esCorrecta": true}, {"id": "c", "texto": "Mediciones con instrumentos propios.", "esCorrecta": false}, {"id": "d", "texto": "Registros de campo sin procesamiento.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 3, "texto": "Antes de incorporar una serie histórica mensual de 30 años a la herramienta, ¿qué procedimiento es el más adecuado?", "imagen": "@/assets/actividad/imagen3.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Promediar de inmediato todos los valores y conservar solo un resultado.", "esCorrecta": false}, {"id": "b", "texto": "Verificar fuente, periodo, unidades, faltantes y consistencia, y luego organizar la serie.", "esCorrecta": true}, {"id": "c", "texto": "Eliminar los años con precipitación inferior al promedio.", "esCorrecta": false}, {"id": "d", "texto": "Sustituir los valores extremos por el promedio histórico.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 4, "texto": "¿Para qué resultan especialmente útiles los datos mensuales de precipitación?", "imagen": "@/assets/actividad/imagen4.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Para identificar exclusivamente eventos diarios extremos.", "esCorrecta": false}, {"id": "b", "texto": "Para reemplazar la información anual de la serie.", "esCorrecta": false}, {"id": "c", "texto": "Para reconocer patrones de estacionalidad a lo largo del año.", "esCorrecta": true}, {"id": "d", "texto": "Para determinar la ubicación geográfica de una estación.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 5, "texto": "¿Qué información básica debe acompañar una gráfica de precipitación para facilitar su interpretación?", "imagen": "@/assets/actividad/imagen5.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Solo el valor máximo y el nombre del archivo.", "esCorrecta": false}, {"id": "b", "texto": "Únicamente el periodo y el color de las barras.", "esCorrecta": false}, {"id": "c", "texto": "Solo la fuente y el promedio general.", "esCorrecta": false}, {"id": "d", "texto": "Variable, unidad, periodo, fuente y escala temporal.", "esCorrecta": true}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 6, "texto": "¿Qué conjunto de elementos contribuye directamente a la trazabilidad de un dato de precipitación?", "imagen": "@/assets/actividad/imagen6.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Fuente, estación o producto, fecha o periodo y unidad de medida.", "esCorrecta": true}, {"id": "b", "texto": "Color de la gráfica, tamaño de letra y ubicación del título.", "esCorrecta": false}, {"id": "c", "texto": "Valor máximo, valor mínimo y número de páginas del reporte.", "esCorrecta": false}, {"id": "d", "texto": "Nombre del municipio sin información sobre la fuente.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 7, "texto": "¿Cuál es la función principal del Panel Intergubernamental sobre Cambio Climático (IPCC)?", "imagen": "@/assets/actividad/imagen7.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Generar directamente los registros observados de todas las estaciones meteorológicas.", "esCorrecta": false}, {"id": "b", "texto": "Evaluar y sintetizar el conocimiento científico disponible sobre el cambio climático.", "esCorrecta": true}, {"id": "c", "texto": "Definir la ubicación de las áreas de captación de aguas lluvias.", "esCorrecta": false}, {"id": "d", "texto": "Reemplazar las fuentes climáticas nacionales en el análisis territorial.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 8, "texto": "¿Cuál relación entre AR6, escenarios SSP y modelos CMIP6 es correcta?", "imagen": "@/assets/actividad/imagen8.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "AR6 es una estación climática, los SSP son registros históricos y CMIP6 es una unidad de medida.", "esCorrecta": false}, {"id": "b", "texto": "AR6 y CMIP6 son horizontes temporales, mientras los SSP corresponden a estaciones meteorológicas.", "esCorrecta": false}, {"id": "c", "texto": "AR6 sintetiza conocimiento científico, los SSP representan trayectorias y CMIP6 reúne modelos climáticos.", "esCorrecta": true}, {"id": "d", "texto": "Los tres términos representan predicciones exactas de precipitación.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 9, "texto": "¿Cómo deben interpretarse los escenarios SSP utilizados en las proyecciones climáticas?", "imagen": "@/assets/actividad/imagen9.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Como predicciones exactas de la precipitación que ocurrirá.", "esCorrecta": false}, {"id": "b", "texto": "Como posibles trayectorias futuras utilizadas para explorar diferentes condiciones climáticas.", "esCorrecta": true}, {"id": "c", "texto": "Como series históricas obtenidas de estaciones meteorológicas.", "esCorrecta": false}, {"id": "d", "texto": "Como unidades utilizadas para expresar la precipitación.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 10, "texto": "¿Qué caracteriza de manera general al escenario SSP5-8.5?", "imagen": "@/assets/actividad/imagen10.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Una trayectoria asociada con bajas emisiones y fuerte mitigación.", "esCorrecta": false}, {"id": "b", "texto": "Un periodo histórico de referencia de 30 años.", "esCorrecta": false}, {"id": "c", "texto": "Una trayectoria intermedia con cambios moderados.", "esCorrecta": false}, {"id": "d", "texto": "Una trayectoria asociada con emisiones y forzamiento muy altos.", "esCorrecta": true}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 11, "texto": "En el análisis de precipitación futura, ¿qué representa el periodo 2061-2080?", "imagen": "@/assets/actividad/imagen1.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "El periodo histórico utilizado para validar estaciones.", "esCorrecta": false}, {"id": "b", "texto": "Un horizonte temporal futuro para analizar proyecciones climáticas.", "esCorrecta": true}, {"id": "c", "texto": "La duración mínima de una serie observada.", "esCorrecta": false}, {"id": "d", "texto": "El periodo de funcionamiento de la herramienta de cálculo.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 12, "texto": "¿Qué información debe conservarse al interpretar un dato proyectado de precipitación?", "imagen": "@/assets/actividad/imagen2.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Únicamente el valor numérico proyectado.", "esCorrecta": false}, {"id": "b", "texto": "Solo el nombre del municipio y el año de consulta.", "esCorrecta": false}, {"id": "c", "texto": "Escenario, horizonte temporal, variable, fuente y modelo o producto utilizado.", "esCorrecta": true}, {"id": "d", "texto": "Solo el promedio histórico y el color de la gráfica.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 13, "texto": "Si la referencia histórica es 100 mm y la precipitación proyectada es 110 mm, ¿cuál es el cambio correspondiente?", "imagen": "@/assets/actividad/imagen3.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Cambio absoluto de +10 mm y cambio porcentual de +10 %.", "esCorrecta": true}, {"id": "b", "texto": "Cambio absoluto de +110 mm y cambio porcentual de +100 %.", "esCorrecta": false}, {"id": "c", "texto": "Cambio absoluto de -10 mm y cambio porcentual de -10 %.", "esCorrecta": false}, {"id": "d", "texto": "No puede calcularse porque ambos valores están en milímetros.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 14, "texto": "¿Qué debe hacerse cuando diferentes modelos climáticos muestran resultados divergentes para un mismo análisis?", "imagen": "@/assets/actividad/imagen4.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Eliminar los resultados que se alejen del promedio.", "esCorrecta": false}, {"id": "b", "texto": "Seleccionar únicamente el valor más alto.", "esCorrecta": false}, {"id": "c", "texto": "Presentar un único resultado sin mencionar diferencias.", "esCorrecta": false}, {"id": "d", "texto": "Comunicar la divergencia como parte de la incertidumbre del análisis.", "esCorrecta": true}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 15, "texto": "¿Cómo está organizada la herramienta de cálculo utilizada en el componente?", "imagen": "@/assets/actividad/imagen5.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "En una sola hoja que mezcla fuentes, datos históricos y proyecciones.", "esCorrecta": false}, {"id": "b", "texto": "En cuatro hojas de cálculo independientes y sin relación entre sí.", "esCorrecta": false}, {"id": "c", "texto": "En una pestaña de instrucciones y tres hojas: área y fuentes, histórico y proyecciones.", "esCorrecta": true}, {"id": "d", "texto": "En dos hojas destinadas únicamente a gráficos y resultados.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 16, "texto": "¿Cuál es el propósito principal de la hoja 1 “Localización y fuentes de datos”?", "imagen": "@/assets/actividad/imagen6.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Caracterizar el área de estudio y documentar la procedencia y condiciones de las fuentes utilizadas.", "esCorrecta": true}, {"id": "b", "texto": "Calcular automáticamente los cambios absoluto y porcentual.", "esCorrecta": false}, {"id": "c", "texto": "Generar únicamente las gráficas de precipitación anual.", "esCorrecta": false}, {"id": "d", "texto": "Sustituir las series históricas por valores proyectados.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 17, "texto": "¿Qué controles básicos aplica la hoja 2 a la serie histórica de precipitación?", "imagen": "@/assets/actividad/imagen7.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Color de la gráfica, tamaño de fuente y número de hojas.", "esCorrecta": false}, {"id": "b", "texto": "Faltantes, valores negativos, unidad, duplicados y completitud temporal.", "esCorrecta": true}, {"id": "c", "texto": "Escenario SSP, modelo climático y horizonte futuro.", "esCorrecta": false}, {"id": "d", "texto": "Área de captación, eficiencia y coeficiente de escorrentía.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 18, "texto": "¿Qué resultados puede generar la hoja 2 después de procesar la serie histórica?", "imagen": "@/assets/actividad/imagen8.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Únicamente el valor máximo de precipitación.", "esCorrecta": false}, {"id": "b", "texto": "Solo una lista de fuentes utilizadas.", "esCorrecta": false}, {"id": "c", "texto": "Resumen climatológico mensual, resumen anual y representaciones gráficas.", "esCorrecta": true}, {"id": "d", "texto": "Escenarios SSP y modelos climáticos globales.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 19, "texto": "¿Qué realiza la hoja 3 al relacionar la precipitación proyectada con la referencia histórica?", "imagen": "@/assets/actividad/imagen9.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Elimina automáticamente los valores que presentan incertidumbre.", "esCorrecta": false}, {"id": "b", "texto": "Convierte todos los horizontes futuros en un único periodo.", "esCorrecta": false}, {"id": "c", "texto": "Sustituye la fuente de información por el nombre del área de estudio.", "esCorrecta": false}, {"id": "d", "texto": "Calcula cambios absoluto y porcentual y permite comparar escenarios y horizontes.", "esCorrecta": true}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 20, "texto": "Antes de interpretar los resultados de la herramienta, ¿qué secuencia refleja una práctica adecuada?", "imagen": "@/assets/actividad/imagen10.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Revisar primero las gráficas y después completar las fuentes si son necesarias.", "esCorrecta": false}, {"id": "b", "texto": "Documentar fuentes, validar datos históricos y proyectados, revisar alertas y luego interpretar los resultados.", "esCorrecta": true}, {"id": "c", "texto": "Modificar las celdas de fórmula hasta obtener resultados esperados.", "esCorrecta": false}, {"id": "d", "texto": "Completar los datos faltantes automáticamente y omitir las limitaciones.", "esCorrecta": false}], "mensaje_correcto": "Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}], 
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion: '<b>Objetivo:</b> verificar la apropiación de los conceptos relacionados con fuentes y series históricas de precipitación, horizontes temporales, organización y validación de datos, escenarios de cambio climático, proyecciones climáticas y uso de la herramienta de cálculo para interpretar información histórica y futura.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
