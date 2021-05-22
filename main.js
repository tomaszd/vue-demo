//Add a description to the data object with the value "A pair of warm, fuzzy socks".
// Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'very important',
        image: './assets/green_socks.jpg',
        inventory: 8,
        cart: 0,

        variants: [
            {
                variantId: 1,
                variantColor: 'green',
                variantImage: './assets/green_socks.jpg',
            }, {
                variantId: 2,
                variantColor: 'blue',
                variantImage: './assets/blue_socks.jpg',
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
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})