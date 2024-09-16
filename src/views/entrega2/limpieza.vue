<template>
  <div class="container">
    <div class="header">
      <h1>Entrega 2: Limpieza de Datos</h1>
    </div>
    <div class="content"> 
      <h3>1. Manejo de Valores Faltantes:</h3>
      <p>
        Se identificaron las columnas con valores faltantes utilizando <code>df.isnull().sum()</code>. Dependiendo del tipo de datos:
        <ul>
          <li>Para columnas numéricas, se utilizó la imputación por media/mediana o se eliminaron si el porcentaje de valores faltantes era elevado.</li>
          <li>Para columnas categóricas, se realizó la imputación por moda o eliminación según el porcentaje de valores faltantes.</li>
        </ul>
      </p>

      <h3>2. Manejo de Valores Atípicos (Outliers):</h3>
      <p>
        Se identificaron los outliers mediante gráficos de caja (box plots) y métodos estadísticos como el Z-score y el rango intercuartílico (IQR). Dependiendo del contexto:
        <ul>
          <li>Los outliers fueron eliminados o se les aplicó una restricción (cap) en ciertos umbrales.</li>
        </ul>
      </p>

      <h3>3. Manejo de Inconsistencias:</h3>
      <p>
        Se estandarizaron los valores categóricos para evitar inconsistencias (e.g., 'Hombre' vs 'hombre'). Además, se corrigieron los tipos de datos para que correspondieran adecuadamente con sus categorías (e.g., fechas, categóricos).
      </p>

      <h3>4. Transformaciones y Normalizaciones:</h3>
      <p>
        Se aplicaron técnicas de normalización a las columnas numéricas, como la normalización Min-Max y la normalización por Z-score. 
        <br>Para las variables categóricas, se utilizaron técnicas de codificación como One-Hot Encoding o Label Encoding, dependiendo de la naturaleza de los datos.
      </p>

      <h3>Resumen:</h3>
      <p>
        <ul>
          <li><strong>Valores Faltantes:</strong> Imputados o eliminados según el contexto.</li>
          <li><strong>Outliers:</strong> Identificados y tratados mediante IQR.</li>
          <li><strong>Inconsistencias:</strong> Valores categóricos estandarizados y tipos de datos corregidos.</li>
          <li><strong>Transformaciones:</strong> Aplicada normalización y codificación de variables categóricas.</li>
        </ul>
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
  name: 'limpieza_datos',
};
</script>

<style scoped>
/* Estilo minimalista para la página */
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

.content h3 {
  color: #444;
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

.footer {
  text-align: right;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
}
</style>