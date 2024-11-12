<template>
  <div class="container">
    <div class="header">
      <h1>Delivery 2: Data Cleansing</h1>
    </div>
    <div class="content">
      <br/>
      
      <h3>1. Handling Missing Values:</h3>
      <p> Missing values were addressed depending on the data type:</p>
      <ul>
        <li>For numeric columns (e.g., stock prices, VIX, S&P 500), rows with missing values were dropped.</li>
        <li>For macroeconomic indicators (e.g., GDP, CPI), forward filling was applied to propagate previous values where gaps existed.</li>
      </ul>

      <h3>2. Standardizing Data Formats:</h3>
      <p>The date column was standardized as a datetime index for all datasets. This allowed seamless integration during the merging step. Additionally:</p>
      <ul>
        <li>Volume data in stock datasets was normalized by dividing it into millions for better scaling.</li>
        <li>CPI column was renamed to "CPI" for uniformity.</li>
      </ul>
      
      <h3>3. Outlier Handling:</h3>
      <p>
          Given that we are working with stock-related data, extreme values often represent genuine market 
          conditions rather than errors. Preserving these factual values is critical for accurately modeling stock behavior and trends.
      </p>

      <h3>4. Consistency in Employee Data:</h3>
      <p>
        Employee data was adjusted to align with fiscal year conventions:
      </p>
      <ul>
        <li>Dates for employee records were shifted to represent the start of the fiscal year.</li>
        <li>Employee data was aggregated to yearly frequency, consistent with its role as a key feature.</li>
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