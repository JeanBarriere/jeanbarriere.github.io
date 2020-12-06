import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '/@/views/Home.vue'
import Projects from '/@/views/Projects.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/:pathMatch(.*)*', name: 'catchall', redirect: { name: 'home' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
