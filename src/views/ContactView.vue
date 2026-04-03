<template>
  <div class="contact-page">
    <div class="header-section">
      <h1>Me <span class="highlight">Contacter</span></h1>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <h3>Informations de contact</h3>
        <p class="info-text">
          Je suis actuellement à la recherche de nouvelles opportunités de développement,
          d'alternance ou de collaboration sur des projets de jeux.
        </p>
        <div class="info-list">
          <a href="#" @click.prevent="copyEmail" class="info-item">
            <div class="icon-box">✉️</div>
            <span>{{
              emailCopied ? 'Adresse email copiée ! ' : 'guillaume.bouton19@gmail.com'
            }}</span>
          </a>
          <a href="https://github.com/Guillaume-btn" target="_blank" class="info-item">
            <div class="icon-box">💻</div>
            <span>github.com/Guillaume-btn</span>
          </a>
          <a href="https://linkedin.com/in/guillaume-bouton19" target="_blank" class="info-item">
            <div class="icon-box">🔗</div>
            <span>LinkedIn</span>
          </a>
          <div class="info-item">
            <div class="icon-box">📍</div>
            <span>Lyon, France</span>
          </div>
        </div>
      </div>

      <div class="contact-form-container">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Qui êtes-vous ?</label>
            <input type="text" id="name" v-model="formData.name" required placeholder="Votre nom" />
          </div>

          <div class="form-group">
            <label for="email">Votre adresse email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              placeholder="votre@email.com"
            />
          </div>

          <div class="form-group">
            <label for="message">Votre message</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" class="btn-submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
          </button>

          <p v-if="submitSuccess" class="success-message">
            ✅ Merci ! Votre message a bien été simulé.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const emailCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('guillaume.bouton19@gmail.com')
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2500)
  } catch (err) {
    console.error('Erreur lors de la copie :', err)
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false

  try {
    const templateParams = {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
      title: 'Nouveau message Portfolio',
    }

    await emailjs.send('service_qtx43w7', 'template_u7ebqtj', templateParams, 'FVSq_arXSL1BNpGup')

    submitSuccess.value = true
    formData.value = { name: '', email: '', message: '' }

    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error("Erreur d'envoi EmailJS :", error)
    submitError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

textarea {
  resize: none;
}

.header-section {
  text-align: center;
  margin-bottom: 30px;
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  background-color: #2a2a2a;
  border-radius: 16px;
  padding: 40px;
  border: 1px solid #3a3a3a;
}

/* Bloc de gauche */
.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffffff;
}

.info-text {
  color: #b3b3b3;
  margin-bottom: 30px;
  line-height: 1.6;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.2s ease;
}

a.info-item:hover {
  color: #42b883;
  transform: translateX(5px);
}

.icon-box {
  background-color: #1a1a1a;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
}

/* Bloc de droite (Formulaire) */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 500;
  color: #e0e0e0;
  font-size: 0.95rem;
}

input,
textarea {
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  background-color: #1a1a1a;
  border: 1px solid #3a3a3a;
  color: #ffffff;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b883;
}

.btn-submit {
  background-color: #42b883;
  color: #1a1a1a;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.btn-submit:hover:not(:disabled) {
  background-color: #33a06f;
}

.btn-submit:disabled {
  background-color: #2c5a44;
  color: #888;
  cursor: not-allowed;
}

.success-message {
  color: #42b883;
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
}

/* Responsive pour mobile */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    padding: 25px;
  }

  .contact-info {
    margin-bottom: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #3a3a3a;
  }
}
</style>
