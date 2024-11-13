<template>
  <div class="container">
    <div class="header">
      <h1>Delivery 3: Data Migration to BigQuery</h1>
    </div>
    <div class="content">
      <br />

      <h3>1. Migration Plan:</h3>
      <p>
        To migrate the processed CSV files (CPI, GDP, Interest Rates, NVIDIA data, etc.) into BigQuery the plan is
        structured as follows:
      </p>
      <ul>
        <li>
          <b>Data Preparation:</b>
          Ensure all CSV files are cleaned and normalized, as already done during the data cleansing phase. This involves
          consistent column naming, proper data types, and ready-to-load structures.
        </li>
        <li>
          <b>Schema Design:</b>
          Design table schemas in BigQuery with appropriate data types for each column (e.g., FLOAT for numeric data,
          DATE for date columns). Each CSV will map to a corresponding table in BigQuery with ease, again, thanks to the
          cleansing phase.
        </li>
        <li>
          <b>Loading Strategy:</b>
          Use Python’s <code>google-cloud-bigquery</code> library for uploading. Batch the upload process to handle
          large files and minimize memory usage. Use partitioned tables for date-specific data (e.g., stock prices).
        </li>
      </ul>

      <h3>2. Execution:</h3>
      <p>The migration process followed these steps:</p>
      <ol>
        <li>
          <b>Environment Setup:</b>
          <ul>
            <li>Enable BigQuery API on GCP.</li>
            <li>Create a service account and generate the JSON key.</li>
            <li>Install necessary Python libraries (<code>google-cloud-bigquery</code>, <code>pandas</code>).</li>
          </ul>
        </li>
        <li>
          <b>Data Upload:</b>
          <ul>
            <li>Iterate through the processed CSV files, creating or appending to tables in BigQuery.</li>
            <li>Ensure the localization and correct schema for each table.</li>
          </ul>
        </li>
        <li>
          <b>Challenges Encountered:</b>
          <ul>
            <li>
                The main challenge was setting up the environment and permissions for a seamless GCP authentication and integration.
                A robust and organized integration in Google Collab was programed. This environment connects through a Service Account Key
                and is capable of automatically extracting, processing and uploading the information into BigQuery.
            </li>
            <li>
                During the migration, the schemas across files started presenting inconsistencies. To overcome this,
                the data was pre-processed to align the schemas for all the data and ensure compatibility with BigQuery.
            </li>
          </ul>
        </li>
        <li><b>Validation:</b> Run test queries in BigQuery to ensure data integrity and proper loading.</li>
      </ol>

      <div class="pipeline">
        <h4>Data Pipeline:</h4>
        <div class="pipeline-content">
          <p><b>Collab:</b> Data Extraction from Yahoo Finance, FRED, and StockAnalysis.</p>
          <p><b>Collab:</b> Data cleansing, merging, and preparation.</p>
          <p><b>Collab -> BigQuery:</b> Uploading and partitioning tables into BigQuery.</p>
          <p><b>BigQuery:</b> Feature extraction for GBM model training.</p>
          <p><b>Looker Studio:</b> Visualization and analysis of data and results.</p>
        </div>
      </div>

      <div class="graphs">
        <h4>Pipeline Graph:</h4>
        <img src="@/assets/pipeline_graph.svg" alt="Pipeline Graph" />
      </div>

      <h3>3. Models:</h3>
      <p>
        A <b>star schema</b> has been adopted to organize the data in BigQuery, leveraging the available datasets for
        efficient querying and modeling. This schema includes the following components:
      </p>
      <ul>
        <li>
          <b>Fact Table: `Stock_History`</b>
          <ul>
            <li><b>Date:</b> Stored as `DATE`, partitioned for optimized querying.</li>
            <li>
              <b>NVIDIA Stock Data:</b> Daily stock data, including open, high, low, close, adjusted close, and volume.
            </li>
            <li>
              <b>Economic Indicators:</b> Metrics such as GDP, CPI, unemployment rate, and interest rates.
            </li>
            <li>
              <b>Market Metrics:</b> Includes data like VIX and SP500 indices for additional predictive features.
            </li>
          </ul>
        </li>
        <li>
          <b>Dimension Tables:</b>
          <ul>
            <li>
              <b>Companies:</b> Metadata about NVIDIA using available employee data.
              <ul>
                <li>`company_id`: Unique identifier (e.g., "NVIDIA").</li>
                <li>`company_name`: "NVIDIA Corporation".</li>
                <li>`sector`: Technology.</li>
                <li>`employee_count`: Historical employee data from the NVIDIA employee dataset.</li>
              </ul>
            </li>
            <li>
              <b>Economic Indicators:</b> A dimension table storing historical values for macroeconomic indicators.
              <ul>
                <li>`indicator_name`: Name of the indicator (e.g., "CPI", "GDP").</li>
                <li>`value`: Value of the indicator.</li>
                <li>`date`: Date of the indicator.</li>
              </ul>
            </li>
            <li>
              <b>Market Data:</b> Historical metrics for major indices like SP500 and VIX.
              <ul>
                <li>`market_index_name`: Name of the index (e.g., "SP500", "VIX").</li>
                <li>`value`: Value of the index.</li>
                <li>`date`: Date of the index value.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <div class="graphs">
        <h4>Model Graph:</h4>
        <img src="@/assets/model_graph.svg" alt="Model Graph" />
      </div>

      <p>
        This structure allows seamless integration of NVIDIA stock data with macroeconomic and market metrics for
        training the Gradient Boosting Model (GBM).
      </p>

    </div>

    <div class="footer">
      Delivery date: October 15, 2024
      <br />
      Developed by: Giuliano Frieri
    </div>
  </div>
</template>

<script>
export default {
  name: "migracion_bq",
};
</script>

<style scoped>
/* Minimalist styling for the page */
.container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.header h1 {
  font-size: 28px;
  color: #333;
  text-align: center;
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

.pipeline {
  text-align: center;
  margin-top: 20px;
}

.pipeline-content {
  display: inline-block;
  text-align: left;
}

.graphs {
  text-align: center;
  margin-top: 20px;
}

.graphs img {
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
}

.footer {
  text-align: right;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
}
</style>
