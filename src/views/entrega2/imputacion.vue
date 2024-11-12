<template>
  <div class="container">
    <div class="header">
      <h1>Delivery 2: Data Imputation</h1>
    </div>
    <div class="content">
      <br/>

      <h3>1. Resampling to Monthly Frequency:</h3>
      <p>
        <strong>Method:</strong> All datasets were resampled to monthly frequency:
      </p>
      <ul>
        <li>Stock prices (e.g., NVDA, S&P 500): The last daily value of each month was retained to reflect end-of-month prices.</li>
        <li>VIX: Monthly averages were computed to represent overall market volatility for the month.</li>
      </ul>

      <h3>2. Imputation for Macroeconomic Data:</h3>
      <p>
        <strong>Method:</strong> For GDP and employee data:
      </p>
      <ul>
        <li>GDP (trimestral): Forward filling was applied to propagate trimestral values to the corresponding months.</li>
        <li>Employee numbers (yearly): Forward filling was applied to assign the same value across all months of the year.</li>
      </ul>

      <h3>3. Justification for Monthly Management:</h3>
      <p>
        Stocks tend to respond to monthly trends, and the majority of the data (e.g., stock prices, VIX, S&P 500) 
        originated in daily or monthly frequencies. Therefore:
      </p>
      <ul>
        <li>Data was standardized to monthly intervals to enable consistent integration and analysis.</li>
        <li>GDP (trimestral) and employee numbers (yearly) were retained as key features to provide broader economic context.</li>
      </ul>

    </div>
    <div class="footer">
      Delivery date: September 15, 2024
      <br/>
      Developed by: Giuliano Frieri
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
