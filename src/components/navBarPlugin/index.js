import navBar from './navBar.vue'

const navBarStore = {
    showNavBar: true,
    displaySidebar(value) {
        this.showSidebar = value
    }
}

const navBarPlugin = {

    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    navBarStore: navBarStore
                }
            }
        })
        Object.defineProperty(Vue.prototype, '$navBar', {
            get() {
                return this.$root.navBarStore
            }
        })
        Vue.component('nav-bar', navBar)

    }
}

export default navBarPlugin
