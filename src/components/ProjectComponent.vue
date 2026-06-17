<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true,
  },
})

// Fonction pour attribuer une couleur CSS spécifique selon le contexte
const getContextClass = (context: string) => {
  if (!context) return 'context-default'
  
  const ctx = context.toLowerCase()
  if (ctx === 'stage') return 'context-stage'
  if (ctx === 'universitaire') return 'context-uni'
  if (ctx === 'personnel') return 'context-perso'
  
  return 'context-default'
}
</script>

<template>
  <div class="project-card">
    <div class="card-header">
      <div class="title-container">
        <h3 class="title">{{ project.title }}</h3>
        <span class="context-badge" :class="getContextClass(project.context)">
          {{ project.context }}
        </span>
      </div>
      <span class="date">{{ project.date }}</span>
    </div>

    <div class="card-body">
      <div v-if="project.team" class="team-info">
        <span>{{ project.team }}</span>
      </div>
      
      <p class="description">{{ project.description }}</p>
    </div>

    <div class="card-footer">
      <div class="tech-list">
        <span v-for="(tech, index) in project.technologies" :key="index" class="tech-badge">
          {{ tech }}
        </span>
      </div>
      
      <div v-if="project.butSkills && project.butSkills.length > 0" class="but-skills-container">
        <span class="skills-label">Compétences BUT :</span>
        <div class="skills-list">
          <span v-for="(skill, index) in project.butSkills" :key="index" class="skill-pill" :title="skill.level">
            {{ skill.name }}
            <span class="skill-level-badge">{{ skill.level.replace('Niveau ', 'N') }}</span>
          </span>
        </div>
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
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #3a3a3a;
  height: 100%;
}

.context-badge {
  font-size: 0.75rem;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.context-stage {
  background-color: rgba(66, 184, 131, 0.15);
  color: orange;
  border: 1px solid rgba(66, 184, 131, 0.3);
}

.context-uni {
  background-color: rgba(97, 175, 239, 0.15);
  color: #61afef; 
  border: 1px solid rgba(97, 175, 239, 0.3);
}

.context-perso {
  background-color: rgba(198, 120, 221, 0.15);
  color: #c678dd; 
  border: 1px solid rgba(198, 120, 221, 0.3);
}

.context-default {
  background-color: #333;
  color: #aaa;
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

.team-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 12px;
  font-style: italic;
}

.team-icon {
  color: #888;
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

.title-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.but-skills-container {
  margin-top: 5px;
  padding-top: 15px;
  border-top: 1px dashed #3a3a3a;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skills-label {
  font-size: 0.8rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  background-color: rgba(97, 175, 239, 0.1);
  color: #61afef; /* Bleu pour se démarquer des technos */
  border: 1px solid rgba(97, 175, 239, 0.3);
  padding: 2px 4px 2px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.skill-level-badge {
  background-color: #61afef;
  color: #1a1a1a;
  margin-left: 6px;
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 0.65rem;
  font-weight: bold;
}
</style>