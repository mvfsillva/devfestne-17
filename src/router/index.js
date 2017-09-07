import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Pages/Main'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  }
]

export default new Router({
  routes,
  mode: 'history'
})
