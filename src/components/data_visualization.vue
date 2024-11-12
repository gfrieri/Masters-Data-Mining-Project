<template>
    <div class="visualization-container">
      <div class="charts">
        <!-- NVIDIA Stock Trends -->
        <h2>NVIDIA Stock Trends</h2>
        <canvas id="nvdaStockChart"></canvas>
  
        <!-- Market Comparisons -->
        <h2>Market Comparisons: NVIDIA vs. SP500 and VIX</h2>
        <canvas id="marketComparisonChart"></canvas>
  
        <!-- Economic Indicators -->
        <h2>Economic Indicators Correlation</h2>
        <canvas id="economicIndicatorsChart"></canvas>
  
        <!-- Organizational Growth -->
        <h2>NVIDIA Employee Growth</h2>
        <canvas id="employeeGrowthChart"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { Chart } from "chart.js";
  import { createLineChartConfig, createBarChartConfig, createScatterChartConfig } from "@/utils/chart_config";
  import axios from "axios";
  
  export default {
    name: "DataVisualization",
    setup() {
      const baseUrl =
      process.env.NODE_ENV === "production"
        ? "/Masters-Data-Mining-Project"
        : "";

      const nvdaStockData = ref([]);
      const sp500Data = ref([]);
      const vixData = ref([]);
      const unemploymentData = ref([]);
      const cpiData = ref([]);
      const interestRateData = ref([]);
      const gdpData = ref([]);
      const employeesData = ref([]);
  
      const loadChartData = async () => {
        try {
        nvdaStockData.value = (await axios.get(`${baseUrl}/data/json/nvda_stock.json`)).data;
        sp500Data.value = (await axios.get(`${baseUrl}/data/json/sp500.json`)).data;
        vixData.value = (await axios.get(`${baseUrl}/data/json/vix.json`)).data;
        unemploymentData.value = (await axios.get(`${baseUrl}/data/json/unemployment.json`)).data;
        cpiData.value = (await axios.get(`${baseUrl}/data/json/cpi.json`)).data;
        interestRateData.value = (await axios.get(`${baseUrl}/data/json/interest_rate.json`)).data;
        gdpData.value = (await axios.get(`${baseUrl}/data/json/gdp.json`)).data;
        employeesData.value = (await axios.get(`${baseUrl}/data/json/employees.json`)).data;
        createCharts();
        } catch (error) {
          console.error("Failed to load data:", error);
        }
      };
  
      const createCharts = () => {
        // NVIDIA Stock Trends
        const nvdaLabels = nvdaStockData.value.map((d) => d.Date);
        const nvdaPrices = nvdaStockData.value.map((d) => d.Close);
        const nvdaConfig = createLineChartConfig(
          nvdaLabels,
          [
            {
              label: "NVIDIA Stock Price",
              data: nvdaPrices,
              borderColor: "rgba(75, 192, 192, 1)",
              fill: false,
            },
          ],
          "NVIDIA Stock Trends"
        );
        new Chart(document.getElementById("nvdaStockChart"), nvdaConfig);
  
        // Market Comparisons
        const sp500Prices = sp500Data.value.map((d) => d.Close);
        const vixPrices = vixData.value.map((d) => d.Close);
        const marketConfig = createLineChartConfig(
          nvdaLabels,
          [
            {
              label: "NVIDIA Stock Price",
              data: nvdaPrices,
              borderColor: "rgba(75, 192, 192, 1)",
              fill: false,
            },
            {
              label: "SP500",
              data: sp500Prices.slice(0, nvdaLabels.length),
              borderColor: "rgba(153, 102, 255, 1)",
              fill: false,
            },
            {
              label: "VIX",
              data: vixPrices.slice(0, nvdaLabels.length),
              borderColor: "rgba(255, 159, 64, 1)",
              fill: false,
            },
          ],
          "Market Comparisons"
        );
        new Chart(document.getElementById("marketComparisonChart"), marketConfig);

        // Economic Indicators Correlation
        if (Array.isArray(cpiData.value) && Array.isArray(unemploymentData.value)) {
          const scatterDataset = [
            {
              label: "CPI vs Unemployment",
              data: cpiData.value.map((d, i) => ({
                x: d.CPI,
                y: unemploymentData.value[i]?.UNRATE || null,
              })),
              backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
          ];

          const economicConfig = createScatterChartConfig(
            scatterDataset,
            "Economic Indicators Correlation"
          );

          new Chart(document.getElementById("economicIndicatorsChart"), economicConfig);
        } else {
          console.error("Economic indicator data is not an array or is missing.");
        }

        // Sort by Date
        employeesData.value.sort((a, b) => new Date(a.Date) - new Date(b.Date));

        // Organizational Growth
        const employeeLabels = employeesData.value.map((d) => d.Date);
        const employeeCounts = employeesData.value.map((d) => d.Employees);
        const employeeConfig = createBarChartConfig(
          employeeLabels,
          [
            {
              label: "Employees",
              data: employeeCounts,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
          ],
          "NVIDIA Employee Growth"
        );
        new Chart(document.getElementById("employeeGrowthChart"), employeeConfig);
      };
  
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
  