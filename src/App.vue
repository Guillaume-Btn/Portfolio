<script setup lang="ts">
import NavComponent from '@/components/NavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="app-wrapper">
    <NavComponent></NavComponent>
    <main class="page-content">
      <RouterView></RouterView>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Prend au moins toute la hauteur de l'écran */
}

.page-content {
  padding-top: 70px;
  flex-grow: 1; /* Le contenu principal "pousse" le footer vers le bas si la page est courte */
  padding-left: 20px;
  padding-right: 20px;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>
