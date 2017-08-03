new Vue({
    el: "#app",
    data: {
        total: 0,
        items: [
            {title: 'Item1' },
            {title: 'Item2' },
            {title: 'Item3' },
            {title: 'Item4' }
        ],
        cart: []
    },
    methods: {
        addItem: function (index) {
            this.total += 9;
            this.cart.push(this.items[index]);

        }
    }
});
