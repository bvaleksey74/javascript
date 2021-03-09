class ApiMock {
    constructor() {

    }

    fetch() {
        return [{
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 50
            },
            {
                title: 'Jacket',
                price: 350
            },
            {
                title: 'Shoes',
                price: 250
            },
        ];
    }
}

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    getHtml() {
        return `<div class="goods-item"><div class="goods-item-img"></div><h3>${this.title}</h3><p>${this.price}</p><button class="goods-item-button">Добавить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.api = new ApiMock();
        this.$goodsList = document.querySelector('.goods-list');
        this.goods = [];
    }

    fetchGoods() {
        this.goods = this.api.fetch().map(({
            title,
            price
        }) => new GoodsItem(title, price));
    }

    render() {
        this.$goodsList.textContent = '';
        this.goods.forEach((good) => {
            this.$goodsList.insertAdjacentHTML('beforeend', good.getHtml());
        })
    }
    getTotalPrice() {
        return this.goods.reduce((total, good) => total += good.price, 0);
    }
}


class CartItem extends GoodsItem {
    constructor(options) {
        super(options)
        this.size = options.size;
        this.color = options.color;
        this.discount = options.discount;
        this.count = options.count;
    }
    deleteFromCart(){        
    }
}

class Cart extends GoodsList {
    byuAllItems(){        
    }
    clearCart(){
    }
}

const goodsList = new GoodsList();

goodsList.fetchGoods();
goodsList.render();


