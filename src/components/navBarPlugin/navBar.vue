<template>
    <b-navbar toggleable="md" class="nav">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">GoodFood</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-left">

                <b-nav-item-dropdown text="Catégories" class="dropdown-large">
                    <b-container class="bv-example-row">
                        <b-col>
                            <li class="col-sm-3">
                                <li v-for="item in categories" class="categories" :key="item.product_id" v-bind:style="{ backgroundImage: 'url(' + item.photo_url + ')' }">
                                    <a href="/fff">
                                        <p class="display-3">{{ item.name }}</p>
                                    </a>

                                </li>

                            </li>
                        </b-col>

                    </b-container>
                </b-nav-item-dropdown>

            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">

                <b-button href="#" variant="outline-success">Se connecter</b-button>
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

        imgLogo: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            categories: []
        }
    }, beforeMount() {
        this.$http.get('http://localhost/product/list').then(response => {
            // Fill the work's list
            response.body.forEach(product => {
                this.categories.push(product);
                console.log(this.categories[0].product_id)
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

    }
}
</script>
<style>
.categories {
    background-size: cover;
    height: 96px;
    border-radius: 2px;
    text-align: center;
    width: 150px;
    float: left;
    margin: 4px;
    color: #FFFFFF;
    text-decoration: none;
}

.categories p {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 2rem;
    letter-spacing: 0.015em;
    height: 100%;
    color: #FFFFFF;
    text-decoration: none;
}

.categories a {
    color: #FFFFFF;
    text-decoration: none;
}

.dropdown .dropdown-menu {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;

    max-height: 0;
    display: block;
    overflow: hidden;
    opacity: 0;
}

.dropdown:hover .dropdown-menu {
    max-height: 200px;
    opacity: 1;
}

.categories a {
    height: 100%;
}

.dropdown-large {
    width: 100%;
    position: static !important;
}

.dropdown-menu-large {
    margin-left: 16px;
    margin-right: 16px;
    padding: 20px 0px;
    width: 100%;
}

.dropdown-menu {

    width: 100%;
}

.dropdown-menu-large>li>ul {
    padding: 0;
    margin: 0;
}

.dropdown-menu-large>li>ul>li {
    list-style: none;
}

.dropdown-menu-large>li>ul>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.428571429;
    color: #333333;
    white-space: normal;
}

.dropdown-menu-large>li ul>li>a:hover,
.dropdown-menu-large>li ul>li>a:focus {
    text-decoration: none;
    color: #262626;
    background-color: #f5f5f5;
}

.dropdown-menu-large .disabled>a,
.dropdown-menu-large .disabled>a:hover,
.dropdown-menu-large .disabled>a:focus {
    color: #999999;
}

.dropdown-menu-large .disabled>a:hover,
.dropdown-menu-large .disabled>a:focus {
    text-decoration: none;
    background-color: transparent;
    background-image: none;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    cursor: not-allowed;
}

.dropdown-menu-large .dropdown-header {
    color: #428bca;
    font-size: 18px;
}

@media (max-width: 768px) {
    .dropdown-menu-large {
        margin-left: 0;
        margin-right: 0;
    }
    .dropdown-menu-large>li {
        margin-bottom: 30px;
    }
    .dropdown-menu-large>li:last-child {
        margin-bottom: 0;
    }
    .dropdown-menu-large .dropdown-header {
        padding: 3px 15px !important;
    }
}

.register {
    margin-left: 10px;
    margin-right: 10px;
}

.nav {}
</style>
