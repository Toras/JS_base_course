'use strict'
//1
function numObj() { }

function NumToObj(num) {
    const obj = new numObj();
    if (num <= 999) {
        obj.единицы = num % 10;
        num = (num / 10) >> 0;
        obj.десятки = num % 10;
        num = (num / 10) >> 0;
        obj.сотни = num % 10;

        return obj;
    } else {
        console.log('число больше 999');
        return obj;
    }
}

let curObj = new numObj();

curObj = NumToObj(500);
console.log(curObj);
//1

//2
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
let product1 = new Product('p1', 45, 'kg');
let product2 = new Product('p2', 100, 'piece');
let product3 = new Product('p3', 100, 'kg');

addToBaket(curBasket, product1, 1.5);
addToBaket(curBasket, product2, 5);
addToBaket(curBasket, product3, 2);
addToBaket(curBasket, product1, 3);
console.log(curBasket);

let sum = countBasketPrice(curBasket);
console.log(sum);
//2