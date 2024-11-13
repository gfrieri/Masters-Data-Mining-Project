<template>
    <div class="container">
      <div class="header">
        <h1>Model Preparation and Results</h1>
      </div>
      <div class="content">
        <h3>1. Model Preparation:</h3>
        <p>
          The Gradient Boosting Machine (GBM) model was selected for its ability to handle tabular data efficiently and 
          model nonlinear relationships.
        </p>
        <ul>
          <li><b>Data Splitting:</b> Training (70%), Validation (15%), and Test (15%).</li>
          <li><b>Feature Scaling:</b> Standardized features before model training.</li>
          <li><b>Handling Missing Values:</b> Forward-fill imputation applied to fill missing data.</li>
        </ul>
  
        <h3>2. Model Training:</h3>
        <p>
          Hyperparameters used for training:
        </p>
        <ul>
          <li><b>Learning Rate:</b> 0.1</li>
          <li><b>Max Depth:</b> 6</li>
          <li><b>Subsample:</b> 0.8</li>
          <li><b>Colsample by Tree:</b> 0.8</li>
          <li><b>Number of Boosting Rounds:</b> 1000 (with early stopping at 50 rounds).</li>
        </ul>
  
        <h3>3. Metrics:</h3>
        <div>
          <p><b>RMSE:</b> {{ metrics.RMSE }}</p>
          <p><b>R² Score:</b> {{ metrics.R2_Score }}</p>
        </div>
  
        <h3>4. Visualization:</h3>
        <model-visualization />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import ModelVisualization from "@/components/model_visualization.vue";
  import axios from "axios";
  
  export default {
    name: "PreparacionModelo",
    components: {
      ModelVisualization,
    },
    setup() {
      const baseUrl =
        process.env.NODE_ENV === "production"
          ? "/Masters-Data-Mining-Project"
          : "";
  
      const metrics = ref({});
  
      const loadMetrics = async () => {
        try {
          const response = await axios.get(`${baseUrl}/data/json/model/model_metrics.json`);
          metrics.value = response.data.metrics;
        } catch (error) {
          console.error("Error loading metrics:", error);
        }
      };
  
      onMounted(() => {
        loadMetrics();
      });
  
      return { metrics };
    },
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
  </style>
  