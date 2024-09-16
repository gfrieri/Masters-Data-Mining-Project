<template>
  <div class="container">
    <div class="header">
      <h1>Entrega 2: Visualización de Datos</h1>
    </div>
    <div class="content">
      <p>
        Este análisis exploratorio de datos visualiza relaciones y correlaciones entre diversas variables financieras. 
        Se incluyen dos tipos principales de gráficos: un diagrama de dispersión y un mapa de calor de correlación.
      </p>

      <h2>Análisis de Visualizaciones</h2>

      <h3>Diagrama de Dispersión: Montos Desembolsados vs Número de Créditos Desembolsados</h3>
      <img :src="require('@/assets/monto-credito.png')" alt="Scatter Plot of Montos_desembolsados vs Numero_de_creditos_desembolsados" class="img-responsive">
      <p>
        El diagrama de dispersión muestra una concentración alta de datos cerca del origen, lo que indica que la mayoría de los créditos desembolsados son de montos pequeños y que no hay una tendencia clara que vincule directamente los montos desembolsados con el número de créditos. Sin embargo, hay algunos valores atípicos que sugieren créditos de montos significativamente altos, pero estos son excepciones y no la norma.
      </p>

      <h3>Mapa de Calor de Correlación</h3>
      <img :src="require('@/assets/heatmap.png')" alt="Correlation Matrix Heatmap" class="img-responsive">
      <p>
        El mapa de calor de correlación muestra relaciones débiles entre la mayoría de las variables, con algunas excepciones. Notablemente, la correlación entre 'Montos_desembolsados' y 'Numero_de_creditos_desembolsados' es baja, lo que corrobora la observación del diagrama de dispersión. Esto indica que los montos desembolsados no necesariamente aumentan con un mayor número de créditos, lo cual puede ser indicativo de políticas de crédito que no escalan linealmente con el número de transacciones.
      </p>
    </div>
    <div class="footer">
      Fecha de Entrega: Septiembre 15, 2024
      <br>
      Desarrollado por: Giuliano Frieri
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataVisualization',
};
</script>

<style scoped>
.container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.header h1 {
  font-size: 28px;
  color: #333;
}

.content p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}

.content h3, h4 {
  color: #444;
  margin-top: 20px;
}

.content a {
  color: #007bff;
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}

.footer {
  text-align: right;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
}

.img-responsive {
  width: 100%;    /* Makes the image take the full width of its container */
  height: auto;   /* Maintains the aspect ratio */
  display: block; /* Removes additional space below the image */
}

</style>
