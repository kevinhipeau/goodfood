<template>
  <div>
  
    <form class="login" @submit.prevent="login">
  
      <h1>Sign in</h1>
  
      <label>User name</label>
  
      <input required v-model="username" type="text" placeholder="Snoopy" />
  
      <label>Password</label>
  
      <input required v-model="password" type="password" placeholder="Password" />
  
      <hr/>
  
      <button type="submit">Login</button>
  
    </form>
  
  </div>
</template>

<script>
  //
  
  //import axios from 'axios'
  
  //import store from '../store.js'
  
  import Vuex from 'vuex'
  import store from '../store/store.js'
  
  //import * as easings from 'vuetify/es5/util/easing-patterns'
  
  
  
  export default { // ==> https://blog.sqreen.io/authentication-best-practices-vue/
  
    data() {
  
      return {
  
  
  
      }
  
    },
  
    store: store,
  
    mounted() {
  
  
  
    },
  
    computed: {
  
      //...Vuex.mapGetters(['collections','isOnProducts'])
  
    },
  
    methods: {
  
      ...Vuex.mapActions({
  
        /*  onScroll () {
  
              if (typeof window === 'undefined') return
  
              const top = window.pageYOffset ||
  
                  document.documentElement.offsetTop || 0
  
          },*/
  
      }),
  
      login: function() {
  
        const {
  
          username,
  
          password
  
        } = this
  
        this.$store.dispatch(AUTH_REQUEST, {
  
          username,
  
          password
  
        }).then(() => {
  
          this.$router.push('/')
  
        })
  
      },
  
  
  
      logout: function() {
  
        this.$store.dispatch(AUTH_LOGOUT)
  
          .then(() => {
  
            this.$router.push('/login')
  
          })
  
      }
  
    }
  
  }
</script>
<style scoped>
   /*css appliqué que pour cette vue grâce au mot clé scoped*/
</style>


