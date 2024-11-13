<template>
    <div class="dashboard-container">
      <!-- Dashboard Header -->
      <div class="dashboard-header">
        <h1>Delivery 4: Dashboard Presentation</h1>
      </div>
  
      <!-- Section 1: Dashboard Design -->
      <div class="section">
        <h2>1. Dashboard Design</h2>
        <ul>
          <li>
            <b>Top Section (KPIs):</b> Displays the most important metrics at a glance, such as NVIDIA's stock value,
            CPI, S&P500, and GDP, as scorecards.
          </li>
          <li>
            <b>Middle Section (Charts):</b> Includes line charts to track trends in NVIDIA's stock over time,
            scatter plots to visualize relationships with economic variables, and bar charts for feature importance.
          </li>
          <li>
            <b>Bottom Section (Table and Filters):</b> Provides a detailed data table for exploration and
            interactive filters for selecting date ranges and variables.
          </li>
        </ul>
      </div>
  
      <!-- Section 2: Implementation -->
      <div class="section">
        <h2>2. Implementation</h2>
        <ol>
          <li>
            <b>Data Preparation:</b> Data was imported into BigQuery, where preprocessing steps included handling null values,
            calculating rolling averages, etc.
          </li>
          <li>
            <b>Looker Studio Integration:</b> BigQuery was linked to Looker Studio to enable live data querying.
          </li>
          <li>
            <b>Embedding:</b> The Looker Studio dashboard is embedded here using the iframe option.
          </li>
        </ol>
      </div>
  
      <!-- Section 3: Presentation of Results -->
      <div class="section">
        <h2>3. Presentation of Results</h2>
        <ul>
          <li>
            <b>Trends:</b> NVIDIA's stock value has shown significant growth over the last decade, as seen in the
            line chart tracking its monthly close price.
          </li>
          <li>
            <b>Correlations:</b> Scatter plots highlight strong relationships between NVIDIA's stock value and S&P500, GDP,
            and other variables, while CPI appears to have a weaker correlation.
          </li>
          <li>
            <b>Raw Data Exploration:</b> The data table allows users to validate trends and analyze specific data points,
            enabling deeper exploration of NVIDIA's stock performance during economic changes.
          </li>
        </ul>
      </div>
  
      <!-- Section 4: User Interaction -->
      <div class="section">
        <h2>4. User Interaction</h2>
        <ul>
          <li>
            <b>Filters:</b> A date range filter allows users to analyze specific time periods, while dropdown menus let users
            select and compare economic variables.
          </li>
          <li>
            <b>Sorting:</b> The data table is sortable by any column, enabling detailed exploration of key metrics.
          </li>
          <li>
            <b>Drill-Down:</b> Users can click on specific data points in scatter plots to focus on a particular event
            or time frame.
          </li>
          <li>
            <b>Example:</b> Investors can study how NVIDIA’s stock responded to high market volatility (e.g., spikes in VIX)
            or analyze trends during periods of economic downturn.
          </li>
        </ul>
      </div>
  
      <!-- Embedded Looker Studio Dashboard -->
      <div class="dashboard-iframe">
        <iframe width="960" height="810"
            src="https://lookerstudio.google.com/embed/reporting/9f383ac0-c0ec-43c1-86b0-7a32a4448836/page/tEnnC" 
            frameborder="0" 
            style="border:0" 
            allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
        </iframe>
      </div>

    <div class="footer">
    Delivery date: November 12, 2024
    <br />
    Developed by: Giuliano Frieri
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NvidiaStockDashboard",
  };
  </script>
  
<style scoped>
    .dashboard-container {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .dashboard-header {
    text-align: center;
    margin-bottom: 20px;
    }

    .dashboard-header h1 {
    font-size: 24px;
    color: #333;
    }

    .dashboard-header p {
    font-size: 16px;
    color: #555;
    }

    .section {
    margin-bottom: 20px;
    }

    .section h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
    }

    .section p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    }

    .section ul,
    .section ol {
    margin-top: 10px;
    margin-left: 20px;
    color: #555;
    font-size: 16px;
    }

    .dashboard-iframe {
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    }

    .footer {
    text-align: right;
    font-size: 14px;
    color: #777;
    margin-top: 30px;
    }
</style>
  