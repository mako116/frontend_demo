import { createRouter, createWebHistory } from 'vue-router'
// import LoginPage from '../pages/LoginPage.vue'
// import DashboardPage from '../pages/DashboardPage.vue'
// import { token } from '../utils/auth'
import LoginPage from '@/pages/LoginPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import { token } from '@/utils/useAuthStorage'

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    beforeEnter: (to, from, next) => {
      if (!token()) next('/')
      else next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
