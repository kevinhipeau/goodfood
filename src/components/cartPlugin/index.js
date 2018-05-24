import cart from './cart.vue'

const cartStore = {
    item: [],
    add(aitem) {
        if (this.item.filter(i => i.product_id === aitem.product_id).length > 0) {
            var tmp = this.item.filter(i => i.product_id === aitem.product_id)[0]
            tmp.quantity++;
            var idx = this.item.findIndex(i => i.product_id === aitem.product_id);
            this.item.splice(idx, 1);
            this.item.push(tmp)
            console.log(tmp.quantity);
        } else {
            aitem.quantity = 1;
            this.item.push(aitem);
        }
    }
}

const cartPlugin = {

    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    cartStore: cartStore
                }
            }
        })
        Object.defineProperty(Vue.prototype, '$cart', {
            get() {
                return this.$root.cartStore
            }
        })
        Vue.component('cart', cart)

    }
}

export default cartPlugin
