<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <span class="copyright">Guillaume Bouton étudiant en BUT Informatique</span>
        <span class="tech-stack">Développé avec <span class="vue-color">Vue.js</span></span>
      </div>
      
      <div class="footer-right">
        <a href="https://github.com/Guillaume-btn" target="_blank" class="social-link" title="GitHub">
          GitHub
        </a>
        <span class="separator">•</span>
        <a href="https://linkedin.com/in/guillaume-bouton19" target="_blank" class="social-link" title="LinkedIn">
          LinkedIn
        </a>
        <span class="separator">•</span>
        <router-link to="/contact" class="social-link">Contact</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #151515; /* Légèrement plus foncé que le fond de la page */
  border-top: 1px solid #2a2a2a;
  padding: 30px 20px;
  margin-top: 60px; /* S'assure qu'il n'est pas collé au contenu du dessus */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.copyright {
  color: #e0e0e0;
  font-weight: 500;
  font-size: 0.95rem;
}

.tech-stack {
  color: #888;
  font-size: 0.85rem;
}

.vue-color {
  color: #42b883;
  font-weight: 600;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.social-link {
  color: #b3b3b3;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.social-link:hover {
  color: #42b883;
}

.separator {
  color: #444;
  font-size: 0.8rem;
}

/* Version mobile */
@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  
  .footer-left {
    align-items: center;
  }
  
  .footer-right {
    margin-top: 10px;
  }
}
</style>