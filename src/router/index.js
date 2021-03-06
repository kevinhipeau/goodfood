import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/pages/layouts/MainLayout.vue'
import Login from '@/pages/login.vue'
import Checkout from '@/pages/checkout.vue'
import Product from '@/components/Product'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MainLayout
    },
    {
      path: '/login', //nom du parametre dans le router link
      name: 'Login',
      component: Login
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
  ]
})
