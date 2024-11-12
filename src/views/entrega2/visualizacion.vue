<template>
  <div class="container">
    <div class="header">
      <h1>Data Visualization</h1>
    </div>
    <div class="content">
      <!-- Include the data_visualization component -->
      <DataVisualization />
    </div>
    <div class="footer">
      Delivery date: September 15, 2024
      <br/>
      Developed by: Giuliano Frieri
    </div>
  </div>
</template>

<script>
import DataVisualization from "@/components/data_visualization.vue";

export default {
  name: "visualizacion_datos",
  components: {
    DataVisualization,
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


.content {
  padding: 20px 0;
}



.footer {
  text-align: right;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
}

@media (max-width: 768px) {
  th, td {
    font-size: 14px; /* Smaller font size for smaller screens */
  }
}

</style>