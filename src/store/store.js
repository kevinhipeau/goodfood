import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from './auth.module.js'

Vue.use(Vuex)

const QUERY_GET_COLLECTIONS =  "https://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/collections"
const QUERY_GET_PRODUCTS =  "https://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/produits/"
const QUERY_POST_COMMANDE = "https://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/commande"
const QUERY_POST_EMAIL = "https://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/commande"

const _initialState = {
     collections:[],
     products: [],
    /* list_addedCollections:[],
     list_addedProducts:[],
    isProductsPage:false*/
 }

const state = {
    collections:[],
    products: [],
   /* list_addedCollections:[],
    list_addedProducts:[],
    isProductsPage:false*/
 }

 
const getters = {
   // collections: state => state.collections,
    //products: state => state.map_collectionsProducts[state.currentCollectionID],*/
     /*isOnProducts: state => state.isProductsPage,
     sessionStarted: state => state.list_addedCollections.length ? true: state.list_addedProducts.length ? true: false,
     collectionsProducts: state => state.map_collectionsProducts,*/
     //productsLength: state => store.getters.map_collectionsProducts.get(state.currentCollectionID).length
     //alreadyHasProducts: state => store.map_collectionsProducts.get(state.currentCollectionID).length
}

const mutations = {


     ADD_PRODUCT: (state, payload) =>{
       /* if(!(state.list_addedProducts.indexOf(payload.id) > -1)){
            state.list_addedProducts.push(payload);
            state.products[payload.index].selected = true;
        }*/
     },
     DELETE_PRODUCT: (state, payload) =>{
        /*if((state.list_addedProducts.indexOf(payload.id) > -1)){
            state.list_addedProducts.splice(state.list_addedProducts.indexOf(payload.id), 1);
            state.products[payload.index].selected = false;
           }*/
    },
     ADD_COLLECTION: (state, payload) =>{
        /*if(!state.collections[payload.index].selected){
            state.list_addedCollections.push(payload);
            state.collections[payload.index].selected = true;
        }*/
        
    },
    DELETE_COLLECTION: (state, payload) =>{
       /*if(state.collections[payload.index].selected){
        state.list_addedCollections.splice(state.list_addedCollections.indexOf(payload.id), 1);
        state.collections[payload.index].selected = false;
       }*/
    },
    SHOW_PRODUCT_DETAIL:(state, index) =>{
        state.products[index].showInfo = true
    },
    HIDE_PRODUCT_DETAIL: (state, index)=>{
        state.products[index].showInfo = false;
    },
    CREATE_COLLECTIONS:(state, collections)=>{
       // state.map_collectionsProducts //= new Map();
        
       /* let collectionList = collections.map(c => {
            let obj = {
              id: c.id,
              name: c.nom,
              selected: false,
              img_path: c.img_path,
              img_link: c.img_link
            };
            state.map_collectionsProducts[c.id] = [];
            return obj;
          });
          
         // state.map_collectionsProducts[]]
          state.collections = collectionList;
          console.log('CREATE - MAP COLLECTION  '+ JSON.stringify(state.map_collectionsProducts));*/
    },
    CREATE_PRODUCTS:(state, payload)=>{
        /*state.products = payload.productData.map(p => {
            let obj = {
              id: p.id,
              name: p.nom,
              description: p.description,
              composition: p.composition,
              selected: false,
              img_path: p.img_path,
              showInfo: false,
              img_link: p.img_link,
              collection: p.id_collection
            };
            
            return obj;
          });
          state.currentCollectionID = payload.idCollection;
          state.map_collectionsProducts[payload.idCollection] = state.products;
          console.log('CREATE - MAP PRODUCTS '+ JSON.stringify(state.map_collectionsProducts ));*/
    },
    SWITCH_PAGE:()=>{
      /*  if(!state.isProductsPage){
            state.isProductsPage = true;
            return
        }
        state.isProductsPage = false;*/
    },
    UPDATE_NAME:(state, value)=>{
       // state.retailer_name = value;
    },
    UPDATE_EMAIL:(state, value)=>{
        //state.retailer_email = value;
    },
    RESET_STATE:(state) =>{
       /* if(state.collections.length > 0){
            state.collections.map(elem => elem.selected = false);

        }
        if(state.products.length > 0){
            state.products.map(elem => elem.selected = false);
        }
        state.list_addedCollections =[];
        state.list_addedProducts =[];
        state.isProductsPage = false;
        //console.log(state);*/
    },
    CLEAR_PRODUCTS:()=>{
        store.products = [];
    }

 }


const actions = {
    
    addCollection: (state, payload) => {
        //console.log(index);
        store.commit('ADD_COLLECTION', payload)
    },
    deleteCollection: (state, payload) => {
        store.commit('DELETE_COLLECTION', payload)
    },
    addProduct: (state, payload) => {
        store.commit('ADD_PRODUCT', payload)
    },
    deleteProduct: (state, payload) => {
        store.commit('DELETE_PRODUCT', payload)
    },
    showProductDetail:(state, index)=>{
        store.commit('SHOW_PRODUCT_DETAIL', index)
    },
    hideProductDetail:(state, index)=>{
        store.commit('HIDE_PRODUCT_DETAIL', index)
    },
    switchPage:(state)=>{
        store.commit('SWITCH_PAGE')
    },
    fetchCollections:()=>{
        //console.log('api 1 !!! ' + JSON.stringify(query_getCollections))
       /* axios
        .get(QUERY_GET_COLLECTIONS, {
          headers: {
            "Access-Control-Allow-Origin": true,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          store.commit('CREATE_COLLECTIONS', response.data.Collections)
        })
        .catch(error => console.error(error));*/
    },
    fetchProducts:(state, idCollection)=>{

       /* //state.map_collectionsProducts = new Map();
        state.currentCollectionID = idCollection;
        console.log('has' + JSON.stringify(state.map_collectionsProducts))
        if(!state.map_collectionsProducts[idCollection].Length > 0){
            axios
        .get(QUERY_GET_PRODUCTS.concat(idCollection), {
          headers: {
            "Access-Control-Allow-Origin": true,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
            console.log(response)
          store.commit('CREATE_PRODUCTS', {productData: response.data.Produits, idCollection:idCollection})
        })
        .catch(error => console.error(error));
        }*/
       
        
    },
    sendOrder:() => {
        //console.log('retailer 2 '+state.retailer_email);
        //console.log('retailer 2 '+state.retailer_name);
       /* return new Promise((resolve, reject) => {
            axios.post(QUERY_POST_COMMANDE, {
                name: state.retailer_name,
                email: state.retailer_email,
                listProducts: state.list_addedProducts,
                listCollections: state.list_addedCollections
              })
              .then(response => {
                  //QUERY_POST_EMAIL
                axios.post(QUERY_POST_EMAIL, {
                    name: state.retailer_name,
                    email: state.retailer_email,
                    listProducts: state.list_addedProducts,
                    listCollections: state.list_addedCollections
                  }).then(function (response){
                    store.commit('RESET_STATE');
                    //console.log(response);
                  });

                  resolve(response);
               
              }, error => {
                // http failed, let the calling function know that action did not work out
                reject(error);
            })
        })*/
    },
    clearProducts:() => {
       // store.commit('CLEAR_PRODUCTS');
    }
}

let store = new Vuex.Store({
    modules:{
      auth
    },
     state: state,
     mutations: mutations,
     getters: getters,
     actions: actions,
     strict: true
 })

 global.store = store;
 export default store