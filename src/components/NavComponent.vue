<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'projects' }">Projets</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    <RouterLink :to="{ name: 'cv' }">CV</RouterLink>
  </nav>
</template>
<style scoped>
template {
  margin-bottom: 50px;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover,
a.router-link-active {
  opacity: 1;
}
</style>
