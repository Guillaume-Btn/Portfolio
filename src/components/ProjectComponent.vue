<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="project-card">
    <div class="card-header">
      <h3 class="title">{{ project.title }}</h3>
      <span class="date">{{ project.date }}</span>
    </div>

    <div class="card-body">
      <p class="description">{{ project.description }}</p>
    </div>

    <div class="card-footer">
      <div class="tech-list">
        <span v-for="(tech, index) in project.technologies" :key="index" class="tech-badge">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  border: 1px solid #3a3a3a;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: #42b883;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 10px;
}

.title {
  font-size: 1.4rem;
  color: #ffffff;
  margin: 0;
}

.date {
  font-size: 0.85rem;
  color: #42b883;
  font-weight: bold;
}

.card-body {
  flex-grow: 1;
  margin-bottom: 20px;
}

.description {
  color: #b3b3b3;
  line-height: 1.5;
  font-size: 0.95rem;
}

.card-footer {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  background-color: #1a1a1a;
  color: #e0e0e0;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 1px solid #333;
}

.github-link:hover {
  text-decoration: underline;
}
</style>
