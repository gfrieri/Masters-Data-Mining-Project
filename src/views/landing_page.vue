<template>
    <div class="container">
      <div class="header">
        <h1>Bienvenido al Proyecto de Minería de Datos</h1>
      </div>
      <div class="content">
        <p>
          Este proyecto forma parte de la Maestría en Ingeniería de Sistemas y aborda el uso de datos abiertos para la evaluación de beneficios crediticios. A través de modelos de aprendizaje automático, se busca predecir con precisión el perfil de los usuarios y los beneficios financieros que pueden obtener.
        </p>
        <p>
          A continuación, podrás explorar las diferentes entregas del proyecto, donde se incluyen análisis, visualizaciones y modelos predictivos que han sido desarrollados para este propósito.
        </p>
      </div>
      <div class="actions">
        <router-link to="/entrega1/seleccion_modelo" class="btn">Explorar Entrega 1</router-link>
        <router-link to="/entrega2/eda" class="btn">Explorar Entrega 2</router-link>
      </div>
      <div class="footer">
        <p>&copy; 2024 Proyecto de Minería de Datos</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  /* Estilo minimalista para la landing page */
  .container {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    text-align: center;
  }
  
  .header h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .content p {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
  }
  
  .actions {
    margin-top: 30px;
  }
  
  .actions .btn {
    display: inline-block;
    padding: 12px 24px;
    margin: 10px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s ease;
  }
  
  .actions .btn:hover {
    background-color: #0056b3;
  }
  
  .footer {
    margin-top: 40px;
    font-size: 14px;
    color: #777;
  }
  </style>
  