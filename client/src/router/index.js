import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Tracking from '../views/Tracking.vue'
import Profile from '../views/Profile.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
  
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/tracking',
      name: 'Tracking',
      component: Tracking

    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile

    }


  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router