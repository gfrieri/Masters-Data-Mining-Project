<template>
  <div id="app">
    <Sidebar />
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/page_sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente en el viewport */
  align-items: flex-start; /* Alinea al inicio verticalmente */
  min-height: 100vh; /* Asegura que ocupa toda la altura de la vista */
}

.content-wrapper {
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  margin: 40px auto;
  max-width: 1000px;
  width: 90%;
}
</style>
