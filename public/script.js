var PRICE = 9.99;
var LOAD_NUM = 10;
new Vue({
    el: "#app",
    data: {
        total: 0,
        items: [],
        results: [],
        cart: [],
        newSearch: 'design',
        lastSearch: '',
        resHide: false
    },
    methods: {
        onSubmit: function() {
            this.resHide = true;
            this.items = [];
            this.$http
            .get('/search/'.concat(this.newSearch))
            .then( function(res) {
                this.resHide = false;
                this.results = res.data;
                this.items = res.data.slice(0, LOAD_NUM);
                this.lastSearch = this.newSearch;

            })
        },
        addItem: function (index) {
            this.total += PRICE;
            var item = this.items[index];
            var found = false;
            for(var i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === item.id) {
                    found = true;
                    this.cart[i].qty++;
                    break;
                } 
            }
            if(!found) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    price: PRICE
                });
            }
        },
        inc: function(item) {
            item.qty++
            this.total += PRICE
        },
        dec: function(item) {
            item.qty--;
            this.total -= PRICE;
            if (item.qty <= 0) {
                for(var i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].id === item.id) {
                        this.cart.splice(i, 1);
                        break;
                    }
                }
            }
        }
    },
    filters: {
        price: function(price) {
            return price.toFixed(2);
        }
    },
    mounted: function() {
        this.onSubmit();
    }
});
