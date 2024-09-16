<template>
  <div class="sidebar">
    <h2>Entregas</h2>
    <ul>
      <li>
        <router-link to="/">Inicio</router-link>
      </li>
      <li>
        <router-link to="/entrega1/seleccion_modelo">Entrega 1</router-link>
      </li>
      <li>
        <router-link to="/entrega2/eda">Entrega 2</router-link>
        <ul>
          <li>
            <router-link to="/entrega2/eda">Descripción de los Datos</router-link>
          </li>
          <li>
            <router-link to="/entrega2/exogenos">Repositorios Exógenos</router-link>
          </li>
          <li>
            <router-link to="/entrega2/visualizacion">Visualización de los Datos</router-link>
          </li>
          <li>
            <router-link to="/entrega2/limpieza">Limpieza de los Datos</router-link>
          </li>
          <li>
            <router-link to="/entrega2/imputacion">Imputación de Datos</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "page_sidebar",
};
</script>

<style scoped>
.sidebar {
  width: 220px;
  background-color: #333;
  color: white;
  padding: 20px;
  position: fixed;
  height: 100vh;
  left: 0;
  z-index: 5;
}

.sidebar h2 {
  text-align: center;
  color: #f1f1f1;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 15px 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.sidebar ul li a:hover {
  background-color: #575757;
}

/* Styling for the nested sublist */
.sidebar ul li ul {
  padding-left: 20px; /* Indentation for the sublist */
}

.sidebar ul li ul li a {
  font-size: 14px; /* Smaller font size for the sublist items */
  padding: 8px;
}

/* Responsive */
@media screen and (max-width: 600px) {
  .sidebar {
    width: 80px;
  }

  .sidebar ul li a {
    font-size: 14px;
    padding: 8px;
  }

  .sidebar ul li ul li a {
    font-size: 12px; /* Even smaller font size for sublist on small screens */
    padding: 6px;
  }
}
</style>