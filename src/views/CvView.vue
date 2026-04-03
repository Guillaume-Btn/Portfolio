<template>
  <div class="resume-page">
    <div class="header-section">
      <h1>Mon <span class="highlight">Curriculum Vitae</span></h1>
      <p>Consultez mon parcours ou téléchargez mon CV au format PDF.</p>
    </div>

    <div class="pdf-container">
      <object 
        data="/Portfolio/CV.pdf#view=FitH&scrollbar=0&toolbar=0" 
        type="application/pdf" 
        class="pdf-viewer"
      >
        <!-- Message si le navigateur ne marche pas pour le pdf -->
        <div class="fallback-message">
          <p>Votre navigateur ne permet pas d'afficher le PDF directement.</p>
          <a href="/Portfolio/CV.pdf" target="_blank" class="btn-fallback">
            Cliquez ici pour l'ouvrir
          </a>
        </div>
      </object>
    </div>

    <!-- Le bouton de téléchargement placé en dessous -->
    <div class="action-section">
      <a 
        href="/Portfolio/CV.pdf" 
        download="CV - Guillaume BOUTON.pdf" 
        class="btn-download"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Télécharger le CV
      </a>
    </div>
  </div>
</template>

<style scoped>
.resume-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-section {
  text-align: center;
  /* Marge réduite (était de 30px) */
  margin-bottom: 15px;
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
  /* Marge réduite à 0 (était de 25px) pour coller le PDF */
  margin-bottom: 0;
}

.pdf-container {
  width: 100%;
  max-width: 700px;
  aspect-ratio: 210 / 297;
  height: auto;
  
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid #3a3a3a;
  background-color: #2a2a2a;
}

.pdf-viewer {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}

/* Nouvelle section pour espacer le bouton du PDF */
.action-section {
  margin-top: 30px;
}

.btn-download {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #42b883;
  color: #1a1a1a;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-download:hover {
  background-color: #33a06f;
  transform: translateY(-2px);
}

.fallback-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: #e0e0e0;
}

.btn-fallback {
  margin-top: 15px;
  color: #42b883;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .pdf-container {
    width: 100%;
  }
}
</style>