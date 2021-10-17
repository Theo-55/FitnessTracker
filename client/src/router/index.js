import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Tracking from '../views/Tracking.vue'
import Profile from '../views/Profile.vue'
import AddFriend from '../views/AddFriend'

const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
      // meta: { requiresLogin: true }
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
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

    },

    {
      path: '/addFriend',
      name: 'AddFriend',
      component: AddFriend

    }


  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router