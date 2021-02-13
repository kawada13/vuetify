import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import aa from '@/aa'
import cc from '@/views/cc'
import New from '@/New'
import Validate from '@/Validate'
import Form from '@/Form'
import Dog from '@/Dog'
import BookList from '@/views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'

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
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'BookList',
    component: BookDetail
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
