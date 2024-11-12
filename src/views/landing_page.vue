<template>
    <div class="container">
      <div class="header">
        <h1>Master's Degree Data Mining Project</h1>
      </div>
      <div class="content">
        <p>
          This project is part of the Data Mining Course for the Master's Degree in Computer Engineering at Universidad del Norte.
          It addresses the use of stock data to evaluate its behavior and estimate future prices.
          Through machine learning models, we aim to predict with accuracy the stock prices of a company.

        </p>
        <p>
          Here you can explore the different deliveries of the project, this includes analysis,
          visualizations and usage of predictive models that have been trained for this purpose.
        </p>
      </div>
      <div class="actions">
        <router-link to="/entrega1/seleccion_modelo" class="btn">See Delivery 1</router-link>
        <router-link to="/entrega2/eda" class="btn">See Delivery 2</router-link>
      </div>
      <div class="footer">
        <p>&copy; 2024 Data Mining Project</p>
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
  