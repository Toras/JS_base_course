function Product(name, price, edizm) {
    this.name = name;
    this.price = price;
    this.edizm = edizm;
}

function Basket() {
    this.products = new Map();
}

function addToBaket(basket, product, quantity) {
    if (basket.products.has(product)) {
        let qInBasket = basket.products.get(product);
        basket.products.set(product, quantity + qInBasket);
    } else {
        basket.products.set(product, quantity);
    }
}

function removeFromBaket(basket, product) {
    basket.products.delete(product);
}

function countBasketPrice(curBasket) {
    let sumInBasket = 0;
    for (let basketItem of curBasket.products) {
        sumInBasket += basketItem[0].price * basketItem[1];
    }
    return sumInBasket;
}

let curBasket = new Basket();
let catalogArray = new Array();
catalogArray.push(new Product('p1', 45, 'kg'));
catalogArray.push(new Product('p2', 100, 'unit'));
catalogArray.push(new Product('p3', 100, 'kg'));
addToBaket(curBasket, catalogArray[0], 1.5);
addToBaket(curBasket, catalogArray[1], 5);
addToBaket(curBasket, catalogArray[2], 2);
addToBaket(curBasket, catalogArray[0], 3);
let sum = countBasketPrice(curBasket);

HTMLString = '<h3>КОРЗИНА</h3>';
if (curBasket.products.size == 0) {
    HTMLString = 'Корзина пустая!';
} else {
for (let product of curBasket.products) {
    console.log(product);
    let pName = product[0].name;
    let pQuantity = product[1];
    let pPrice = product[0].price;
    let pSum = product[1] * product[0].price;
    HTMLString += `<div class='basketLine'>
                    <div>${product[0].name} - ${product[1]} ${product[0].edizm} по ${product[0].price}. ИТОГО: ${product[1] * product[0].price}</div>
                   </div>`;
}
HTMLString += `<div class='basketSum'>В корзине ${curBasket.products.size} товаров на сумму: ${sum}</div>`
}
basketBlock = document.querySelector('.basket');
basketBlock.innerHTML = HTMLString;

catalogBlock = document.querySelector('#catalog');

HTMLString = `<h3>КАТАЛОГ</h3>`;
catalogArray.forEach((product) => {
    HTMLString += `<div class='catalogLine'>${product.name} по ${product.price} за 1${product.edizm}</div>`;
});

catalogBlock.innerHTML = HTMLString;
