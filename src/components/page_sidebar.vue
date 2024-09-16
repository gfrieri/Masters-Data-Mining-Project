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
/* Estilo para la barra lateral */
.sidebar {
  width: 220px;
  background-color: #333; /* Asegúrate de ajustar la opacidad si necesitas transparencia */
  color: white;
  padding: 20px;
  position: fixed;
  height: 100vh;
  left: 0; /* Asegúrate de que la barra está alineada a la izquierda */
  z-index: 5; /* Menor que el z-index del contenido para mantenerlo detrás */
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

/* Responsive */
@media screen and (max-width: 600px) {
  .sidebar {
    width: 80px;
  }

  .sidebar ul li a {
    font-size: 14px;
    padding: 8px;
  }
}
</style>