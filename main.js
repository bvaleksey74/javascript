const goods = [{
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
const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({
    title,
    price
}) => {
    return `<div class="goods-item"><div class="goods-item-img"></div><h3>${title}</h3><p>${price}</p><button class="goods-item-button">Добавить</button></div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join('\n');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();