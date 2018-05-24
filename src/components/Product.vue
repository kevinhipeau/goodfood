<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p> Total Rows : {{ totalRows }} </p>
    <p>{{ list }}</p>
  </div>

</template>

<script>

import Vue from 'vue';

export default {
  name: 'Product',
  data () {
    return {
      msg: 'Welcome to Pickles App',
      list: [],
      totalRows: 0
    };
  },
  beforeMount () {
    this.$http.get('http://localhost/product/list').then(response => {
      // Fill the work's list
      response.body.forEach(product => {
        this.list.push(product);
        console.log(product);
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
a {
  color: #42b983;
}
.home {
  padding-top: 2rem;
}
img {
  max-width: 60%;
}
</style>
