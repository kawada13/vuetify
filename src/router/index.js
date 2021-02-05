import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import aa from '@/aa'
import cc from '@/views/cc'
import New from '@/New'
import Validate from '@/Validate'
import Form from '@/Form'
import Dog from '@/Dog'

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
    path: '/dog',
    name: 'Dog',
    component: Dog
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
    path: '/cc',
    name: 'cc',
    component: cc
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
