<template>
    <div class="visualization-container">
      <div class="charts">
        <!-- Correlation Matrix -->
        <h2>Correlation Matrix</h2>
        <canvas id="correlationMatrixChart"></canvas>
  
        <!-- Feature Importance -->
        <h2>Feature Importance</h2>
        <canvas id="featureImportanceChart"></canvas>
  
        <!-- Residual Plot -->
        <h2>Residual Plot</h2>
        <canvas id="residualPlotChart"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { Chart } from "chart.js";
  import {
    createBarChartConfig,
    createScatterChartConfig,
    createHeatmapChartConfig,
  } from "@/utils/chart_config";
  import axios from "axios";
  
  export default {
    name: "ModelVisualization",
    setup() {
      const baseUrl =
        process.env.NODE_ENV === "production"
          ? "/Masters-Data-Mining-Project"
          : "";
  
      const featureImportance = ref({});
      const residuals = ref([]);
      const correlationMatrix = ref({ data: [], labels: [] });
  
      // Function to load and process chart data
      const loadChartData = async () => {
        try {
          // Fetch Correlation Matrix Data
          const matrixData = (
            await axios.get(`${baseUrl}/data/json/corr_matrix.json`)
          ).data.correlation_matrix;
          correlationMatrix.value = transformCorrelationMatrix(matrixData);
  
          // Fetch Feature Importance Data
          featureImportance.value = (
            await axios.get(`${baseUrl}/data/json/model/feature_importance.json`)
          ).data.feature_importance;
  
          // Fetch Residuals Data
          residuals.value = (
            await axios.get(`${baseUrl}/data/json/model/model_predictions.json`)
          ).data.predictions;
  
          // Create charts after data is loaded
          createCharts();
        } catch (error) {
          console.error("Failed to load data:", error.message);
        }
      };
  
      // Transform correlation matrix to fit heatmap structure
      const transformCorrelationMatrix = (matrix) => {
        const labels = Object.keys(matrix);
        const data = [];
  
        labels.forEach((rowLabel, i) => {
          labels.forEach((colLabel, j) => {
            data.push({
              x: j, // Column index
              y: i, // Row index
              v: matrix[rowLabel][colLabel],
            });
          });
        });
  
        return { data, labels };
      };
  
      // Create all the charts
      const createCharts = () => {
        // Correlation Matrix
        const heatmapConfig = createHeatmapChartConfig(
          correlationMatrix.value.data,
          correlationMatrix.value.labels,
          "Correlation Matrix"
        );
        new Chart(
          document.getElementById("correlationMatrixChart"),
          heatmapConfig
        );
  
        // Feature Importance Bar Chart
        const featureLabels = Object.keys(featureImportance.value);
        const importanceValues = Object.values(featureImportance.value);
  
        const featureImportanceConfig = createBarChartConfig(
          featureLabels,
          [
            {
              label: "Feature Importance",
              data: importanceValues,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
          "Feature Importance"
        );
        new Chart(
          document.getElementById("featureImportanceChart"),
          featureImportanceConfig
        );
  
        // Residuals Scatter Plot
        const residualDataset = [
          {
            label: "Residuals",
            data: residuals.value.true_values.map((t, i) => ({
              x: t,
              y: residuals.value.residuals[i],
            })),
            backgroundColor: "rgba(255, 99, 132, 0.6)",
          },
        ];
  
        const residualConfig = createScatterChartConfig(
          residualDataset,
          "Residual Plot"
        );
        new Chart(document.getElementById("residualPlotChart"), residualConfig);
      };
  
      // Load chart data and initialize charts when component is mounted
      onMounted(() => {
        loadChartData();
      });
  
      return {};
    },
  };
  </script>
  
  <style scoped>
  .visualization-container {
    padding: 20px;
  }
  .charts canvas {
    margin-bottom: 40px;
    max-width: 100%;
  }
  </style>
  