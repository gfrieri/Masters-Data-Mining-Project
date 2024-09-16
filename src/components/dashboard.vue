<template>
    <div>
      <h2>Gráfico o Dashboard</h2>
      <!-- Aquí puedes agregar un gráfico usando Chart.js, por ejemplo -->
      <Graph />
    </div>
  </template>
  
  <script>
  import Graph from './Graph.vue';
  
  export default {
    components: {
      Graph,
    },
  };
  </script>
  