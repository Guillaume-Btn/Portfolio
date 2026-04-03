<script setup lang="ts"></script>

<template>
  <div class="home-container">
    <div class="hero">
      <h1>Bonjour ! Je suis <span class="highlight">Guillaume Bouton</span></h1>
      <p class="subtitle">Étudiant & Développeur (Java, Web, Jeux)</p>

      <div class="actions">
        <router-link to="/projects" class="btn primary">Découvrir mes projets</router-link>
        <a href="https://github.com/guillaume-btn" target="_blank" class="btn secondary"
          >Mon GitHub</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 10px;
}

.highlight {
  color: #42b883;
}

.subtitle {
  font-size: 1.5rem;
  color: #a0a0a0;
  margin-bottom: 40px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.btn.primary {
  background-color: #42b883;
  color: #1a1a1a;
}

.btn.primary:hover {
  background-color: #33a06f;
}

.btn.secondary {
  border: 2px solid #42b883;
  color: #42b883;
}

.btn.secondary:hover {
  background-color: rgba(66, 184, 131, 0.1);
}
</style>
