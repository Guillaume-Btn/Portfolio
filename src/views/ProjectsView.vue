<script setup lang="ts">
import type { Project } from '@/models/projectModel'
import ProjectComponent from '@/components/ProjectComponent.vue'
const myProjects: Project[] = [
  {
    id: 1,
    title: 'Projet de Mod Minecraft',
    date: '09/2025 - Actuel',
    description:
      "Développement complet d'une extension de jeu intégrant de nouveaux blocs, des entités animées avec des modèles personnalisés et de nouvelles mécaniques de jeu complexes (systèmes multiblocs).",
    technologies: ['Java', 'NeoForge', 'Blockbench', 'JSON', 'Datagen'],
  },
  {
    id: 2,
    title: 'Deckalé',
    date: '09/2025 - 03/2026',
    description:
      "Logiciel de jeu de cartes à collectionner et à jouer. Conception globale du projet, rédaction du cahier des charges et développement complet de l'interface et de la logique de jeu.",
    technologies: ['Java', 'JavaSwing', 'Figma', 'SQL'],
  },
  {
    id: 3,
    title: 'Optimisez vos lumières',
    date: '03/2025 - 07/2025',
    description:
      "Logiciel algorithmique de calcul et de visualisation de trajets sur une carte interactive. Intégration d'un système permettant d'estimer et d'afficher les temps de parcours.",
    technologies: ['Java', 'JavaSwing', 'Figma', 'Algorithmique'],
  },
  {
    id: 4,
    title: 'Annuaire numérique en C',
    date: '11/2024 - 01/2025',
    description:
      "Application console performante permettant la gestion complète d'un annuaire numérique. L'accès, la modification et la persistance des données sont gérés via la lecture et l'écriture de fichiers CSV.",
    technologies: ['C', 'Fichiers CSV', 'Gestion de la mémoire'],
  },
]
</script>
<template>
  <div class="projects-page">
    <div class="header-section">
      <h1>Mes <span class="highlight">Projets</span></h1>
      <p>Voici une sélection des réalisations les plus importantes que j'ai pu faire.</p>
    </div>
    <div class="projects-grid">
      <ProjectComponent v-for="proj in myProjects" :key="proj.id" :project="proj" />
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.header-section {
  text-align: center;
  margin-bottom: 50px;
}

.header-section h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.header-section p {
  color: #a0a0a0;
  font-size: 1.1rem;
}

.highlight {
  color: #42b883;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}
</style>
