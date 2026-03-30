<script setup lang="ts">
import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
  <NavComponent></NavComponent>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
/* Reset basique */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Inter', sans-serif;
  background-color: #1a1a1a;
  color: #ffffff;
}
.page-content {
  padding-top: 80px; /* Pour ne pas passer sous la nav fixe */
  min-height: 100vh;
}
</style>
