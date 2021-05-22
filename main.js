//Add a description to the data object with the value "A pair of warm, fuzzy socks".
// Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'very important',
        selectedVariant: 0,
        inventory: 8,
        cart: 0,
        brand: "Super quality",

        variants: [
            {
                variantId: 12,
                variantColor: 'green',
                variantImage: './assets/green_socks.jpg',
                variantQuantity: 20,
            }, {
                variantId: 22,
                variantColor: 'blue',
                variantImage: './assets/blue_socks.jpg',
                variantQuantity: 0,
            },

        ]
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        removeFromCart: function () {
            this.cart -= 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title: function () {
            return this.brand + ' ' + this.product

        },
        image: function () {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock: function () {
            return this.variants[this.selectedVariant].variantQuantity

        }
    }
})