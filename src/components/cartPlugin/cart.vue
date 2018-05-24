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
                    <b-table striped hover :items="this.$root.cartStore.item" :fields="fields"></b-table>
                </b-container>
                <b-button variant="primary" v-b-modal.modalC>
                    <icon name="shopping-cart" /> Payer
                    <b-badge variant="light">
                        {{this.$root.cartStore.item.reduce(function (acc,item) {return acc +item.quantity},0)}}
                    </b-badge>
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
                quantity: {
                    // This key overrides `foo`!
                    label: 'Quantité',
                    sortable: true
                }
            },
            categories: []
        }
    },
    methods: {
        goToLoginPage() {
            this.$router.push('/login')
        }
    }

}

</script>
<style>

</style>
