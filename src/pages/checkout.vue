<template>
    <b-container class="bv-example-row">
        <b-row class="text-center part">
            <b-col>
                <h2>1. Adresse de livraison</h2>
            </b-col>
            <b-col>
                <h5>8 impasse dupont 44000-Nantes</h5>
            </b-col>
            <b-col>
                <b-button href="#" variant="success">Modifier</b-button>
            </b-col>
        </b-row>
        <b-row class="text-center part">
            <b-col>
                <h2>2. Choix du créneau de livraison</h2>
            </b-col>
            <b-col>

                <h5>Notre livreur vous livrera jeudi soir à 19h</h5>
                <h6>Livraison gratuite</h6>
            </b-col>
            <b-col>
                <b-button href="#" variant="success">Modifier</b-button>
            </b-col>
        </b-row>
        </b-row>
        <b-row class="text-center part">
            <b-col>
                <h2>3. Votre payement</h2>
            </b-col>
            <b-col>
                <h5>Carte enregistré :</h5>
                <h6>Mastercard 5689 4985 XXXX XXXX XXXX</h6>
            </b-col>
            <b-col>
                <b-button href="#" variant="success">Modifier</b-button>
            </b-col>
        </b-row>
        <b-row class="text-center part">
            <b-col>
                <h2>4. Payer</h2>
            </b-col>
            <b-col>
                <h5>Total de votre commande: {{precisionRound(this.$root.cartStore.item.reduce(function (acc,item) {return acc +item.quantity*item.price},0),2)}}€ </h5>
                <h5>Frais de livraison: 0€ </h5>
                <h5>Total: {{precisionRound(this.$root.cartStore.item.reduce(function (acc,item) {return acc +item.quantity*item.price},0),2)}}€ </h5>
            </b-col>
            <b-col>
                <b-button href="#" variant="primary">Je paye</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import Vue from 'vue';

export default {
    name: 'Checkout',
    data() {
        return {
            msg: 'Liste des produits',
            list: [],
            totalRows: 0,
            basket: []
        };
    },
    beforeMount() {

    },

    methods: {
        precisionRound(number, precision) {
            var factor = Math.pow(10, precision);
            return Math.round(number * factor) / factor;
        }
    },
    components: {
    }
};
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}



.part {
    margin-top: 50px;
}
</style>
