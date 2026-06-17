import ContactView from '@/views/ContactView.vue'
import CvView from '@/views/CvView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cv',
      name: 'cv',
      component: CvView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
