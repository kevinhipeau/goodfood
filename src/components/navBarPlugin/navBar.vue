<template>
    <b-navbar toggleable="md" class="nav">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">GoodFood</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <icon name="align-justify" />Catégories
                </b-nav-item>
                <b-button  variant="outline-success">Se connecter</b-button>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">

                <b-button  variant="outline-success" @click="goToLoginPage()">Se connecter</b-button>
                <b-button class="register" href="#" variant="success">S'inscrire</b-button>
                <b-nav-item href="#">
                    <icon name="shopping-cart" />
                </b-nav-item>

            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>
<script>


export default {
    props: {
        title: {
            type: String,
            default: 'Vue MD'
        },
        imgLogo: {
            type: String,
            default: ""
        }
    },
    methods:{
        goToLoginPage(){
            this.$router.push('/login')
        }
    }
}
</script>
<style>
.register {
    margin-left: 10px;
    margin-right: 10px;
}

.nav {
    border-bottom: 1px #e0e0e0 solid;
}
</style>
