<template>
  <div class="about-page">
    <div class="header-section">
      <h1>À Propos de <span class="highlight">Moi</span></h1>
      <p>Étudiant en BUT Informatique passionné par le développement logiciel et les interfaces utilisateur.</p>
    </div>

    <div class="about-content">
      <!-- Section Présentation -->
      <div class="profile-section card-style">
        <div class="profile-text">
          <h3>Mon Parcours</h3>
          <p>
            Actuellement en fin de deuxième année de <strong>BUT Informatique</strong>, je me spécialise dans le développement d'applications logicielles et web. Mon parcours universitaire m'a permis d'acquérir une solide base algorithmique et méthodologique, que j'ai pu mettre en pratique lors de mon récent stage en entreprise.
          </p>
          <p>
            Passionné par la création d'outils performants et intuitifs, j'apprécie particulièrement travailler sur l'ergonomie (UI/UX) et l'optimisation du code, que ce soit pour des logiciels métiers professionnels (C#, .NET MAUI, WinForms) ou des projets de développement de jeux vidéo (Java, Mods Minecraft).
          </p>
          <p>
            <strong>Objectif professionnel :</strong> Je suis actuellement à la recherche de nouvelles opportunités (alternance ou premier emploi) pour poursuivre mon évolution dans le développement full-stack ou logiciel.
          </p>
          <div class="personal-interests">
            <span class="interest-badge">🏐 Volley-ball (FFSU)</span>
            <span class="interest-badge">🎮 Développement de jeux</span>
            <span class="interest-badge">🧩 UI/UX Design</span>
          </div>
        </div>
      </div>

      <!-- Section Compétences Techniques -->
      <div class="skills-section">
        <h3>Mes Compétences Techniques</h3>
        
        <div class="skills-grid">
          <!-- Langages -->
          <div class="skill-category card-style">
            <div class="category-header">
              <span class="icon">💻</span>
              <h4>Langages</h4>
            </div>
            <div class="tech-tags">
              <span class="tech-tag">Java</span>
              <span class="tech-tag">C#</span>
              <span class="tech-tag">C</span>
              <span class="tech-tag">JavaScript / TS</span>
              <span class="tech-tag">SQL</span>
            </div>
          </div>

          <!-- Frameworks & Technologies -->
          <div class="skill-category card-style">
            <div class="category-header">
              <span class="icon">⚡</span>
              <h4>Frameworks & Tech</h4>
            </div>
            <div class="tech-tags">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">.NET MAUI</span>
              <span class="tech-tag">Windows Forms</span>
              <span class="tech-tag">JavaSwing</span>
              <span class="tech-tag">NeoForge</span>
            </div>
          </div>

          <!-- Outils & Méthodes -->
          <div class="skill-category card-style">
            <div class="category-header">
              <span class="icon">🛠️</span>
              <h4>Outils & Méthodes</h4>
            </div>
            <div class="tech-tags">
              <span class="tech-tag">Git / GitHub</span>
              <span class="tech-tag">Figma</span>
              <span class="tech-tag">Visual Studio</span>
              <span class="tech-tag">Traitement JSON/XML</span>
              <span class="tech-tag">Design UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
}

.header-section h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.highlight {
  color: #42b883;
}

.header-section p {
  color: #a0a0a0;
  font-size: 1.1rem;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.card-style {
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #3a3a3a;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Profil */
.profile-section h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.profile-text p {
  color: #b3b3b3;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 1rem;
}

.profile-text strong {
  color: #e0e0e0;
}

.personal-interests {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 25px;
}

.interest-badge {
  background-color: rgba(66, 184, 131, 0.1);
  color: #42b883;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(66, 184, 131, 0.3);
}

/* Compétences */
.skills-section h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #3a3a3a;
}

.category-header .icon {
  font-size: 1.2rem;
}

.category-header h4 {
  color: #e0e0e0;
  margin: 0;
  font-size: 1.1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background-color: #1a1a1a;
  color: #d0d0d0;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  border: 1px solid #333;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  border-color: #42b883;
  color: #42b883;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .profile-section {
    padding: 20px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>