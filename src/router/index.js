import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Login',
      component: Login
    },
    {
      path: 'about',
      redirect: 'About',
      component: About
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        login: true
      }
    }
  ]
})
