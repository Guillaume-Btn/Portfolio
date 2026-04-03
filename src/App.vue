<script setup lang="ts">
import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
  <NavComponent></NavComponent>
  <main class="page-content">
    <RouterView></RouterView>
  </main>
</template>

<style>
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
  padding-top: 70px; 
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
