import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior: (to ,savedPosition) => {
    if (savedPosition) return savedPosition      
    if (to.hash) return { selector: to.hash }
    else return { x: 0, y: 0 }
  }
})

export default router