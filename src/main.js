// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navBar from './components/navBarPlugin'
import cart from './components/cartPlugin'

import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('icon', Icon)

Vue.use(BootstrapVue);

Vue.config.productionTip = false
Vue.use(navBar)
Vue.use(cart)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
