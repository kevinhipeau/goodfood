import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/pages/layouts/MainLayout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MainLayout
    }
  ]
})
