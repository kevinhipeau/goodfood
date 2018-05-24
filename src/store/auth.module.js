import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//export const SOME_MUTATION = 'SOME_MUTATION' --> good practice


Vue.use(Vuex)

/*const QUERY_GET_COLLECTIONS =  "https://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/collections"
const QUERY_GET_PRODUCTS =  "https://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/produits/"
const QUERY_POST_COMMANDE = "https://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/commande"
const QUERY_POST_EMAIL = "https://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/commande"
*/

const _initialState = {
     collections:[],
     products: [],
    /* list_addedCollections:[],
     list_addedProducts:[],
    isProductsPage:false*/
 }

const state = {
    token: null,//localStorage.getItem('user-token') || '',
    status: '',
 }

 
const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

const mutations = {

   // [AUTH_REQUEST] --> good practice
    AUTH_REQUEST:(state) => {
        state.status = 'loading'
      },
    AUTH_SUCCESS: (state, token) => {
        state.status = 'success'
        state.token = token
      },
    AUTH_ERROR: (state) => {
        state.status = 'error'
      },

    }
      
const actions = {
    
    AUTH_REQUEST: ({commit, dispatch}, user) => {
        return new Promise((resolve, reject) => { // The Promise used for router redirect in login
          commit(AUTH_REQUEST)
          axios({url: 'auth', data: user, method: 'POST' })
            .then(resp => {
              const token = resp.data.token
              localStorage.setItem('user-token', token) // store the token in localstorage
              commit(AUTH_SUCCESS, token)
              // you have your token, now log in your user :)
              dispatch(USER_REQUEST)
              resolve(resp)
            })
          .catch(err => {
            commit(AUTH_ERROR, err)
            localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
            reject(err)
          })
        })
      },
      
    AUTH_LOGOUT: ({commit, dispatch}) => {
        return new Promise((resolve, reject) => {
          commit(AUTH_LOGOUT)
          localStorage.removeItem('user-token') // clear your user's token from localstorage
          resolve()
        })
      },
    
}
export default {
    state,
    mutations,
    getters,
    actions
}
/*let store = new Vuex.Store({
     state: state,
     mutations: mutations,
     getters: getters,
     actions: actions,
     strict: true
 })

 global.store = store;
 export default store*/