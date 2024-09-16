<template>
  <div class="container">
    <div class="header">
      <h1>Entrega 2: Imputación de Datos</h1>
    </div>
    <div class="content">
      <h3>1. Imputación por Media/Mediana para Columnas Numéricas:</h3>
      <p>
        <strong>Método:</strong> Se reemplazaron los valores faltantes con la media o la mediana de la columna.
        <br><strong>Justificación:</strong>
        <ul>
          <li><strong>Imputación por Media:</strong> Adecuada para datos distribuidos normalmente, ya que preserva la media del conjunto de datos.</li>
          <li><strong>Imputación por Mediana:</strong> Preferida para datos sesgados, ya que es menos afectada por los valores atípicos.</li>
        </ul>
      </p>

      <h3>2. Imputación por Moda para Columnas Categóricas:</h3>
      <p>
        <strong>Método:</strong> Se reemplazaron los valores faltantes con la moda (el valor más frecuente) de la columna.
        <br><strong>Justificación:</strong> La imputación por moda es efectiva para datos categóricos, ya que mantiene la categoría más común, la cual es una estimación razonable para los valores faltantes.
      </p>

      <h3>3. Eliminación de Filas/Columnas:</h3>
      <p>
        <strong>Método:</strong> Se eliminaron filas o columnas con valores faltantes cuando el porcentaje de valores faltantes era elevado.
        <br><strong>Justificación:</strong> Si una columna tiene un alto porcentaje de valores faltantes, la imputación puede introducir un sesgo significativo. En estos casos, eliminar dichas columnas o filas puede ser una mejor opción para mantener la calidad de los datos.
      </p>

      <h3>4. Relleno Adelante/Atrás para Datos de Series Temporales:</h3>
      <p>
        <strong>Método:</strong> Se utilizó el valor anterior o siguiente para rellenar los valores faltantes en los datos de series temporales.
        <br><strong>Justificación:</strong> El método de relleno hacia adelante (propagar la última observación válida) o hacia atrás (usar la próxima observación válida) es útil en series temporales, donde se asume que el valor faltante es similar al anterior o al siguiente.
      </p>

      <h3>Nota Importante:</h3>
      <p>
        Muchos de los pasos de imputación se vieron reducidos gracias al proceso de limpieza de datos realizado previamente, el cual eliminó muchas inconsistencias y valores faltantes.
      </p>

      <h3>Resumen:</h3>
      <p>
        <ul>
          <li><strong>Imputación por Media/Mediana:</strong> Utilizada para columnas numéricas según la distribución de los datos.</li>
          <li><strong>Imputación por Moda:</strong> Aplicada en columnas categóricas para mantener la categoría más común.</li>
          <li><strong>Eliminación de Filas/Columnas:</strong> Usada cuando el porcentaje de valores faltantes era alto para evitar sesgos.</li>
          <li><strong>Relleno Adelante/Atrás:</strong> Aplicado en datos de series temporales para mantener la continuidad.</li>
        </ul>
      </p>
      <h3>Datos Antes de los Procesos:</h3>
      <p>
        Observaciones: 25053597
        <br> 
        Variables: 23
      </p>
      <h3>Datos Después de los Procesos:</h3>
      <p>
        Observaciones: 21327254
        <br> 
        Variables: 166
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
  name: 'imputacion_datos',
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
