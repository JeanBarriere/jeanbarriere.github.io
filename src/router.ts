import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Resume from '@/views/Resume.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/resume', name: 'resume', component: Resume },
  { path: '/:pathMatch(.*)*', name: 'catchall', redirect: { name: 'home' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
