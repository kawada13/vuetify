import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import aa from '@/aa'
import New from '@/New'
import Validate from '@/Validate'
import Form from '@/Form'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/validate',
    name: 'Validate',
    component: Validate
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/aa',
    name: 'aa',
    component: aa
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
