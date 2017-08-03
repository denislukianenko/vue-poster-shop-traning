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
            var item = this.items[index];
            this.cart.push(
                title: item.title,
                qty: 1
                
            );

        }
    }
});
