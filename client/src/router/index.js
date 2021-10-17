import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Login.vue'

const routes = [
    {
      path: '/',
      name: 'Login',
      component: Home
  
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router