import { createRouter, createWebHistory } from 'vue-router'
import Terminal from '@/components/terminal/terminal.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Terminal },
    { path: '/project', name: 'project', component: ProjectPage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/contact', name: 'contact', component: ContactPage },
  ],
})

export default router
