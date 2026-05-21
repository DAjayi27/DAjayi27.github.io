import { createRouter, createWebHistory } from 'vue-router'
import Terminal from '@/components/terminal/terminal.vue'
import ProjectPage from '@/views/ProjectPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Terminal },
    { path: '/project', name: 'project', component: ProjectPage },
  ],
})

export default router
