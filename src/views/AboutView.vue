<template>
  <div class="about-page">
    <div class="header-section">
      <h1>À Propos de <span class="highlight">Moi</span></h1>
      <p>Étudiant en BUT Informatique (Lyon 1) en recherche d'alternance pour 2026-2027.</p>
    </div>

    <div class="about-content">
      <div class="profile-section card-style">
        <div class="profile-text">
          <h3>Mon Profil</h3>
          <p>
            Âgé de 19 ans et basé à Lyon, je suis actuellement en fin de deuxième année de <strong>BUT Informatique à l'Université Lyon 1 (Site DOUA)</strong>. 
          </p>
          <p>
            Voulant travailler dans la création de logiciels et le développement web, mon parcours m'a permis d'acquérir une solide base en algorithmique, en programmation orientée objet et en conception d'interfaces. J'ai pu mettre ces compétences en pratique lors de mon récent stage en développement C# chez YAD Informatique.
          </p>
          <div class="objective-box">
            <strong>Objectif :</strong> Je suis activement à la recherche d'une <strong>alternance en développement informatique</strong> pour l'année 2026-2027, dans le cadre de ma troisième et dernière année de BUT.
          </div>
        </div>
      </div>

      <div class="timeline-section">
        <div class="timeline-column card-style">
          <h3>Formation</h3>
          <div class="timeline-item">
            <span class="timeline-date">2024 - Maintenant</span>
            <h4>BUT Informatique</h4>
            <p>Université Lyon 1 - Site DOUA</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-date">2021 - 2024</span>
            <h4>Baccalauréat Général (Mention Bien)</h4>
            <p>Lycée Ampère (Lyon 2)<br/>Spécialités : NSI (Numérique et Sciences Informatiques) et Mathématiques.</p>
          </div>
        </div>

        <div class="timeline-column card-style">
          <h3>Expériences</h3>
          <div class="timeline-item">
            <span class="timeline-date">03/2026 - 05/2026</span>
            <h4>Stage en Développement C# / .NET</h4>
            <p>YAD Informatique</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-date">Été 2025</span>
            <h4>Opérateur Magasinier</h4>
            <p>LEMTECH</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-date">2022</span>
            <h4>Service National Universel (SNU)</h4>
            <p>Séjour de cohésion (2 semaines) et 80h de bénévolat à la Ferme Pédagogique de Charly.</p>
          </div>
        </div>
      </div>

       <div class="skills-section">
        <h3>Mes Compétences</h3>
        <div class="skills-grid">
          
          <div class="skill-category card-style">
            <div class="category-header">
              <span class="icon">💻</span>
              <h4>Développement Logiciel</h4>
            </div>
            <div class="tech-tags">
              <span class="tech-tag">C# / .NET 8</span>
              <span class="tech-tag">.NET MAUI</span>
              <span class="tech-tag">Windows Forms</span>
              <span class="tech-tag">Java</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">POO</span>
            </div>
          </div>

          <div class="skill-category card-style">
            <div class="category-header">
              <span class="icon">🌐</span>
              <h4>Développement Web</h4>
            </div>
            <div class="tech-tags">
              <span class="tech-tag">HTML / CSS</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">PHP / Symfony</span>
            </div>
          </div>

          <div class="skill-category card-style">
            <div class="category-header">
              <span class="icon">🗄️</span>
              <h4>Données & BDD</h4>
            </div>
            <div class="tech-tags">
              <span class="tech-tag">SQL / PL-SQL</span>
              <span class="tech-tag">NoSQL</span>
              <span class="tech-tag">JSON / XML / CSV</span>
              <span class="tech-tag">Conception BDD</span>
            </div>
          </div>

          <div class="skill-category card-style">
            <div class="category-header">
              <span class="icon">🛠️</span>
              <h4>Outils & Logiciels</h4>
            </div>
            <div class="tech-tags">
              <span class="tech-tag">Visual Studio / VS Code / NetBeans / IntelliJ IDEA</span>
              <span class="tech-tag">Git / GitHub / GitLab</span>
              <span class="tech-tag">Figma (UI/UX)</span>
              <span class="tech-tag">Docker / VmWare</span>
              <span class="tech-tag">Power BI</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hobbies-section card-style">
        <h3>Loisirs & Centres d'intérêt</h3>
        <div class="hobbies-grid">
          <div class="hobby-item">
            <div>
              <strong>Voyages :</strong> Inde, Japon, Islande.<br/>
              <span class="hobby-sub">Séjour linguistique (Vinehall, Angleterre) - Anglais B1.</span>
            </div>
          </div>
          <div class="hobby-item">
            <div>
              <strong>Sport :</strong> Escalade de bloc (8 ans), Volley-Ball (3 ans, FFSU).
            </div>
          </div>
          <div class="hobby-item">
            <div>
              <strong>Occupations :</strong> Jeux vidéo, lecture et visionnage de mangas.
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

/* Profil & Objectif */
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

.objective-box {
  margin-top: 20px;
  padding: 15px;
  background-color: rgba(66, 184, 131, 0.1);
  border-left: 4px solid #42b883;
  border-radius: 4px;
  color: #e0e0e0;
  font-size: 1.05rem;
}

/* Timeline (Formation & Expérience) */
.timeline-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.timeline-column h3 {
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 20px;
  border-bottom: 1px solid #3a3a3a;
  padding-bottom: 10px;
}

.timeline-item {
  margin-bottom: 20px;
  position: relative;
  padding-left: 15px;
  border-left: 2px solid #42b883;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-date {
  font-size: 0.85rem;
  color: #42b883;
  font-weight: bold;
}

.timeline-item h4 {
  color: #e0e0e0;
  margin: 5px 0;
  font-size: 1.1rem;
}

.timeline-item p {
  color: #a0a0a0;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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
  font-size: 1rem;
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
  font-size: 0.85rem;
  border: 1px solid #333;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  border-color: #42b883;
  color: #42b883;
  transform: translateY(-2px);
}

/* Loisirs */
.hobbies-section h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 25px;
}

.hobbies-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.hobby-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: #e0e0e0;
}

.hobby-sub {
  font-size: 0.85rem;
  color: #a0a0a0;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-section {
    grid-template-columns: 1fr;
  }
}
</style>