<template>
    <div>
        <b-button variant="primary" v-b-modal.modalC>
            <icon name="shopping-cart" /> Panier
            <b-badge variant="light">
                {{this.$root.cartStore.item.reduce(function (acc,item) {return acc +item.quantity},0)}}
            </b-badge>
        </b-button>

        <!-- Modal Component -->
        <div>
            <b-modal hide-footer id="modalC" title="Votre panier">
                <b-container class="bv-example-row">
                    <b-table striped hover :items="this.$root.cartStore.item" :fields="fields">
                        <template slot="_quantity" slot-scope="row">
                            <b-form-select v-model="row.item.quantity" class="mb-3" size="sm">
                                <option v-for="i in (0,row.item.quantity)" :key="i">{{i}}</option>
                            </b-form-select>
                        </template>
                    </b-table>
                </b-container>

                <b-button v-on:click="redirect" class="mt-3" variant="success" v-b-modal.modalC>
                    <icon name="shopping-cart" /> Payer
                    <b-badge variant="light">
                        {{precisionRound(this.$root.cartStore.item.reduce(function (acc,item) {return acc +item.quantity*item.price},0),2)}}
                    </b-badge>
                    €
                </b-button>
                <b-button v-on:click="deleteI" class="mt-3" variant="warning">
                    <icon name="shopping-cart" /> Vider mon panier €
                </b-button>
            </b-modal>
        </div>
    </div>
</template>
<script>


export default {
    props: {

        imgLogo: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            fields: {
                name: {
                    label: 'Produit',
                    sortable: true
                },
                price: {
                    label: 'Prix unitaire',
                    sortable: false
                },
                _quantity: {
                    // This key overrides `foo`!
                    label: 'Quantité',
                    sortable: true
                }

            },
            categories: []
        }
    },
    methods: {
        deleteI() {
            this.$root.cartStore.deteleCookie();
            this.$root.cartStore.item = [];
        },
        redirect() {
            window.location.href = 'checkout';
        },
        precisionRound(number, precision) {
            var factor = Math.pow(10, precision);
            return Math.round(number * factor) / factor;
        },

        goToLoginPage() {
            this.$router.push('/login')
        }
    }

}

</script>
<style>

</style>
