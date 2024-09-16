<template>
  <div class="container">
    <div class="header">
      <h1>Entrega 2: Análisis Exploratorio de Datos (EDA)</h1>
    </div>
    <div class="content">
      <p>
        Observaciones: 25053597
        <br> 
        Variables: 23
      </p>
      <h2>Descripción General de los Datos</h2>
      <h4>Lista de Variables y Tipos de Datos</h4>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(type, variable) in dataTypes" :key="variable">
            <td>{{ variable }}</td>
            <td>{{ type }}</td>
          </tr>
        </tbody>
      </table>
      
      <h4>Resumen Estadístico de Las Variables Númericas</h4>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Count</th>
            <th>Mean</th>
            <th>Std</th>
            <th>Min</th>
            <th>25%</th>
            <th>50%</th>
            <th>75%</th>
            <th>Max</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stats, variable) in summaryStats" :key="variable">
            <td>{{ variable }}</td>
            <td>{{ stats.count }}</td>
            <td>{{ stats.mean }}</td>
            <td>{{ stats.std }}</td>
            <td>{{ stats.min }}</td>
            <td>{{ stats.q25 }}</td>
            <td>{{ stats.q50 }}</td>
            <td>{{ stats.q75 }}</td>
            <td>{{ stats.max }}</td>
          </tr>
        </tbody>
      </table>
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
  name: 'seleccion_modelo',
  data() {
    return {
      // Data types of the variables
      dataTypes: {
        'Tipo_Entidad': 'int64',
        'Nombre_Tipo_Entidad': 'object',
        'Codigo_Entidad': 'int64',
        'Nombre_Entidad': 'object',
        'Fecha_Corte': 'object',
        'Tipo_de_persona': 'object',
        'Sexo': 'object',
        'Tamaño_de_empresa': 'object',
        'Tipo_de_crédito': 'object',
        'Tipo_de_garantía': 'object',
        'Producto_de_crédito': 'object',
        'Plazo_de_crédito': 'object',
        'Tasa_efectiva_promedio_ponderada': 'float64',
        'margen_adicional': 'float64',
        'Montos_desembolsados': 'float64',
        'Numero_de_creditos_desembolsados': 'int64',
        'Grupo_Etnico': 'object',
        'Antiguedad_de_la_empresa': 'object',
        'Tipo_de_Tasa': 'object',
        'Rango_monto_desembolsado': 'object',
        'Clase_deudor': 'object',
        'Codigo_CIIU': 'float64',
        'Codigo_Municipio': 'float64'
      },
      // Summary statistics for the numerical variables
      summaryStats: {
        'Tipo_Entidad': { count: '25053600', mean: '1.59', std: '3.13', min: '1', q25: '1', q50: '1', q75: '1', max: '32' },
        'Codigo_Entidad': { count: '25053600', mean: '25.05', std: '20.68', min: '1', q25: '7', q50: '26', q75: '39', max: '125' },
        'Tasa_efectiva_promedio_ponderada': { count: '25053600', mean: '24.28', std: '15.98', min: '0', q25: '1.67', q50: '30.81', q75: '34.85', max: '87' },
        'margen_adicional': { count: '25053600', mean: '0.20', std: '1.55', min: '-12', q25: '0', q50: '0', q75: '0', max: '33.98' },
        'Montos_desembolsados': { count: '25053600', mean: '50595290', std: '1839356000', min: '0', q25: '206000', q50: '1000000', q75: '4234900', max: '1.02864e+12' },
        'Numero_de_creditos_desembolsados': { count: '25053600', mean: '40.89', std: '2101.34', min: '0', q25: '1', q50: '1', q75: '4', max: '830668' },
        'Codigo_CIIU': { count: '24802140', mean: '3842.48', std: '3288.41', min: '10', q25: '90', q50: '4644', q75: '6619', max: '9900' },
        'Codigo_Municipio': { count: '24802140', mean: '33999.40', std: '27414.80', min: '5001', q25: '11001', q50: '23001', q75: '66001', max: '99773' }
      }
    };
  }
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

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto; /* Allows table cells to adjust based on content */
}

table, th, td {
  border: 1px solid #ddd;
  text-align: left;
}

th, td {
  padding: 8px;
  font-size: 16px;
  white-space: normal; /* Allows text to wrap */
}

th {
  background-color: #f2f2f2;
}

.footer {
  text-align: right;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
}

@media (max-width: 768px) {
  th, td {
    font-size: 14px; /* Smaller font size for smaller screens */
  }
}
</style>
