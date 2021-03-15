class Api {
    constructor() {
        this.url = '/goods.json'
    }
    fetch(error, success) {
        var xhr;
      
        if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { 
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
      
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              if(xhr.status === 200){
            success(JSON.parse(xhr.responseText));}
            else if(xhr.status >400){
                error();
            }
          }
        }
      
        xhr.open('GET', this.url, true);
        xhr.send();
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
        this.api = new Api();
        this.$goodsList = document.querySelector('.goods-list');
        this.goods = [];
        this.api.fetch(this.onFetchError.bind(this), this.onFetchSuccess.bind(this))
    }

    onFetchSuccess(data){
        this.goods = data.map(({
            title,
            price
        }) => new GoodsItem(title, price));
        this.render();
    }

    onFetchError(){
        this.$goodsList.insertAdjacentHTML('beforeend', "<h3>Произошла ошибка</h3>");
    }

    render() {
        this.$goodsList.textContent = '';
        this.goods.forEach((good) => {
            this.$goodsList.insertAdjacentHTML('beforeend', good.getHtml());
        })
    }

    addToCart(){
        cartList.goods.push(goodsList.goods[0]);
    }
}


class CartItem extends GoodsItem {
    deleteFromCart(){
     cartList.goods.splice(0, 1)           
    }
}

class Cart{
    constructor(){
        this.goods = [];
    }
    getItemList(){
        console.log(this.goods);
    }
    byuAllItems(){        
    }
    clearCart(){
        this.goods = [];
    }
    getTotalPrice() {
        return this.goods.reduce((total, good) => total += good.price, 0);
    }
}

const goodsList = new GoodsList();


const cartItems = new CartItem();
const cartList = new Cart();
cartList.clearCart();


