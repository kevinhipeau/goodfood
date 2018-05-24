<template>
  <div class="products">
    <h1>{{ msg }}</h1>

    <b-card-group deck>
        <div v-for="product in list" v-bind:key="product._id">
            <b-card :title="product.name"
                    :img-src="product.photo_url"
                    style="max-width: 20rem;"
                    class="h-100">
                <p class="card-text">
                {{product.price}} euros
                </p>
                <b-button variant="primary" v-on:click="addProduct(product)">Ajouter au panier</b-button>
            </b-card>
        </div>
    </b-card-group>

    <div class="basket">
        <h1>Mon panier</h1>
        <div v-for="product in basket" v-bind:key="product._id">
            <p>{{product.name}}</p>
            <p>{{product.quantity}}</p>
            <p>{{product.priceBasket}}</p>
        </div>
        <!-- <p>{{basket}}<p> -->
    </div>

  </div>
</template>

<script>

import Vue from 'vue';

export default {
  name: 'Product',
  data () {
    return {
      msg: 'Liste des produits',
      list: [],
      totalRows: 0,
      basket:[]
    };
  },
  beforeMount () {
    this.$http.get('http://localhost/product/list').then(response => {
      // Fill the product's list
      response.body.forEach(product => {
        this.list.push(product);
        // this.$http.get('http://localhost/work/' + work.id).then(response => {
        //   this.list.push(response.body);
        // }, response => {
        //   console.log('Error ! Get work failed.');
        // });
      });
      this.totalRows = response.body.total_rows;
    }, response => {
      console.log('Error ! Get work list failed.');
    });
  },
  methods: {
      addProduct: function (product) {
        //   console.log(product);
          if(!product.quantity) {
            product.quantity = 1;
            product.priceBasket = product.price;
            this.basket.push(product);
          } else {
            product.quantity += 1;
            product.priceBasket += product.price;
            product.priceBasket = Math.round(product.priceBasket * 100) / 100;
            this.basket.push('');
          }
      }
  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.products {
  padding-top: 2rem;
}

.wrapper {
  display: grid;
}

.fill {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}

.product {
  margin: 10px;
}

.product:hover {
  cursor: pointer;
}

</style>
