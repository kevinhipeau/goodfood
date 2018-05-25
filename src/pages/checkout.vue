<template>

</template>

<script>

import Vue from 'vue';

export default {
    name: 'Product',
    data() {
        return {
            msg: 'Liste des produits',
            list: [],
            totalRows: 0,
            basket: []
        };
    },
    beforeMount() {
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
        addProduct: function(product) {


            this.cartStore.add(product);


        }
    },
    components: {
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
