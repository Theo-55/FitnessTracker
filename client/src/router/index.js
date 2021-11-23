import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Tracking from '../views/Tracking.vue'
import Profile from '../views/Profile.vue'
import AddFriend from '../views/AddFriend'
import Session from '../services/session';

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

  router.beforeEach((to, from, next) => {
    if(to.meta.requiresLogin && !Session.user){
        next('/Home');
    }else{
        next();
    }
  } )


  export default router