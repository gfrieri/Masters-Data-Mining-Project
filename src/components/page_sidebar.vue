<template>
  <div>
    <div class="sidebar" :class="{ open: isSidebarOpen }">
      <h2>Deliveries</h2>
      <ul>
        <li>
          <router-link to="/">Main</router-link>
        </li>
        <li>
          <router-link to="/entrega1/seleccion_modelo">Delivery 1</router-link>
        </li>
        <li>
          <router-link to="/entrega2/eda">Delivery 2</router-link>
          <ul>
            <li>
              <router-link to="/entrega2/eda">Data Description</router-link>
            </li>
            <li>
              <router-link to="/entrega2/exogenos">External Repositories</router-link>
            </li>
            <li>
              <router-link to="/entrega2/visualizacion">Data Visualization</router-link>
            </li>
            <li>
              <router-link to="/entrega2/limpieza">Data Cleansing</router-link>
            </li>
            <li>
              <router-link to="/entrega2/imputacion">Data Imputation</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/entrega3/migracion_bq">Delivery 3</router-link>
          <ul>
            <li>
              <router-link to="/entrega3/migracion_bq">Data Migration to BigQuery</router-link>
            </li>
            <li>
              <router-link to="/entrega3/preparacion_modelo">Model Preparation</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/entrega4/presentacion_dashboard">Delivery 4</router-link>
          <ul>
            <li>
              <router-link to="/entrega4/presentacion_dashboard">Dashborad Presentation</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <button class="sidebar-toggle" @click="toggleSidebar">☰</button>
  </div>
</template>

<script>
export default {
  name: "page_sidebar",
  data() {
    return {
      isSidebarOpen: true, // Sidebar starts open on larger screens
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // Toggle sidebar visibility
    },
  },
};
</script>

<style scoped>
/* Base styles for the sidebar */
.sidebar {
  width: 220px;
  background-color: #333;
  color: white;
  padding: 20px;
  position: fixed;
  height: 100vh;
  left: 0;
  z-index: 5;
  transition: transform 0.3s ease; /* Smooth open/close animation */
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar {
  transform: translateX(-220px); /* Hide sidebar by default */
}

/* Button to toggle sidebar */
.sidebar-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.sidebar-toggle:hover {
  background-color: #575757;
}

/* Styling for the sidebar content */
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

.sidebar ul li ul {
  padding-left: 20px;
}

.sidebar ul li ul li a {
  font-size: 14px;
  padding: 8px;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .sidebar {
    width: 180px;
  }

  .sidebar ul li a {
    font-size: 14px;
    padding: 8px;
  }

  .sidebar ul li ul li a {
    font-size: 12px;
    padding: 6px;
  }
}

@media screen and (max-width: 600px) {
  .sidebar {
    width: 0; /* Fully hidden by default */
    transform: translateX(-220px); /* Slide out of view */
  }

  .sidebar.open {
    width: 180px; /* Adjust width for smaller screens */
    transform: translateX(0); /* Slide into view */
  }

  .sidebar-toggle {
    display: block;
  }
}
</style>
