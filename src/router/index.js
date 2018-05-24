import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/pages/layouts/MainLayout.vue'
import Product from '@/components/Product'

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MainLayout
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
  ]
})
