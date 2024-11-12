<template>
  <div class="container">
    <div class="header">
      <h1>Delivery 2: Exploratory Data Analysis (EDA)</h1>
    </div>
    <div class="content">
      <p>
        Observations: {{ numberOfRows }}
        <br />
        Variables: {{ numberOfColumns }}
      </p>
      <h2>General Data Description</h2>
      <h4>Variable List and Data Types</h4>
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

      <h4>Variable Descriptions</h4>
      <ul>
        <li v-for="(description, variable) in variableDescriptions" :key="variable">
          <strong>{{ variable }}:</strong> {{ description }}
        </li>
      </ul>

      <h4>Summary Statistics for Numerical Variables</h4>
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
      Delivery date: September 15, 2024
      <br />
      Developed by: Giuliano Frieri
    </div>
  </div>
</template>

<script>
export default {
  name: "exploratory-data-analysis",
  data() {
    return {
      numberOfRows: 0,
      numberOfColumns: 0,
      dataTypes: {},
      summaryStats: {}, // Holds summary statistics for numerical variables
      variableDescriptions: {
        Date: "Date of the value in ISO 8601 datetime format (YYYY-MM-DDTHH:mm+TZD)",
        "Adj Close": "Adjusted closing price after market factors in USDs",
        Close: "Closing price of the stock for the day in USDs",
        High: "Highest price of the stock for the day in USDs",
        Low: "Lowest price of the stock for the day in USDs",
        Open: "Opening price of the stock for the day in USDs",
        Volume: "Total number of shares traded (in millions)",
      },
    };
  },
  methods: {
    async loadJsonData() {
      try {
        const response = await fetch("/data/json/nvda_stock.json");
        const data = await response.json();

        // Update rows and columns count
        this.numberOfRows = data.length;
        this.numberOfColumns = Object.keys(data[0] || {}).length;

        // Infer data types
        this.dataTypes = Object.keys(data[0] || {}).reduce((acc, key) => {
          acc[key] = typeof data[0][key];
          return acc;
        }, {});

        // Compute summary statistics for numerical variables
        this.summaryStats = this.calculateSummaryStats(data);

        // Log for debugging
        console.log("Data loaded successfully:", data);
        console.log("Summary Statistics:", this.summaryStats);
      } catch (error) {
        console.error("Failed to load JSON data:", error);
      }
    },

    calculateSummaryStats(data) {
      const stats = {};

      // Identify numerical fields
      const fields = Object.keys(data[0] || {});
      const numericalFields = fields.filter(
        (field) => typeof data[0][field] === "number"
      );

      numericalFields.forEach((field) => {
        const values = data
          .map((row) => row[field])
          .filter((val) => !isNaN(val) && val !== null && val !== undefined); // Sanitize data

        if (values.length > 0) {
          const count = values.length;
          const mean = values.reduce((sum, val) => sum + val, 0) / count;
          const std = Math.sqrt(
            values.reduce((sum, val) => sum + (val - mean) ** 2, 0) / count
          );
          const sortedValues = [...values].sort((a, b) => a - b);
          const percentile = (percent) =>
            sortedValues[Math.floor((percent / 100) * (count - 1))];

          stats[field] = {
            count,
            mean: mean.toFixed(6),
            std: std.toFixed(6),
            min: Math.min(...values).toFixed(6),
            q25: percentile(25).toFixed(6),
            q50: percentile(50).toFixed(6),
            q75: percentile(75).toFixed(6),
            max: Math.max(...values).toFixed(6),
          };
        } else {
          stats[field] = {
            count: 0,
            mean: "N/A",
            std: "N/A",
            min: "N/A",
            q25: "N/A",
            q50: "N/A",
            q75: "N/A",
            max: "N/A",
          };
        }
      });

      return stats;
    },
  },
  mounted() {
    this.loadJsonData();
  },
};
</script>

<style scoped>
.container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 900px;
  margin: 0 auto;
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

.content h3,
h4 {
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
  table-layout: auto;
}

table,
th,
td {
  border: 1px solid #ddd;
  text-align: left;
}

th,
td {
  padding: 12px;
  font-size: 16px;
  white-space: normal;
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
  th,
  td {
    font-size: 14px;
  }
}
</style>
