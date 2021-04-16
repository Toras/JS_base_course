'use strict'

function Product(name, price, edizm) {
    this.name = name;
    this.price = price;
    this.edizm = edizm;
}

const catalog = {
    catalogArray: new Array(),
    settings: {
        blockSelector: '.catalog',
    },

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);
        document.querySelector(this.settings.blockSelector).addEventListener('click', event => {
            this.buttonClickHandler(event);
        });
    },

    buttonClickHandler(event) {
        if (!event.target.classList.contains('addToBasket')) {
            return;
        } else {
            console.log([event, event.target, event.target.attributes, +event.target.attributes.getNamedItem('product-index').value]);
            curBasket.addToBaket(this.catalogArray[+event.target.attributes.getNamedItem('product-index').value], 1);
            curBasket.render();
        }
    },
}

const curBasket = {
    products: new Map(),

    addToBaket(product, quantity) {
        if (this.products.has(product)) {
            let qInBasket = this.products.get(product);
            this.products.set(product, quantity + qInBasket);
        } else {
            this.products.set(product, quantity);
        }
    },

    removeFromBaket(product) {
        this.products.delete(product);
    },

    countBasketPrice() {
        let sumInBasket = 0;
        for (let basketItem of this.products) {
            sumInBasket += basketItem[0].price * basketItem[1];
        }
        return sumInBasket;
    },

    render() {
        let HTMLString = '<h3>КОРЗИНА</h3>';
        if (this.products.size == 0) {
            HTMLString = 'Корзина пустая!';
        } else {
        for (let product of this.products) {
            let pName = product[0].name;
            let pQuantity = product[1];
            let pPrice = product[0].price;
            let pSum = product[1] * product[0].price;
            HTMLString += `<div class='basketLine'>
                            <div>${product[0].name} - ${product[1]} ${product[0].edizm} по ${product[0].price}. ИТОГО: ${product[1] * product[0].price}</div>
                           </div>`;
        }
        let sum = this.countBasketPrice();
        HTMLString += `<div class='basketSum'>В корзине ${this.products.size} товаров на сумму: ${sum}</div>`
        }
        let basketBlock = document.querySelector('.basket');
        basketBlock.innerHTML = HTMLString;
        
    }
}

//let catalogArray = new Array();
catalog.catalogArray.push(new Product('p1', 45, 'kg'));
catalog.catalogArray.push(new Product('p2', 100, 'unit'));
catalog.catalogArray.push(new Product('p3', 100, 'kg'));

let HTMLString = `<h3>КАТАЛОГ</h3>`;
catalog.catalogArray.forEach((product) => {
    let idOfProduct = catalog.catalogArray.indexOf(product);
    HTMLString += `<div class='catalogLine'><button class='addToBasket' product-index='${idOfProduct}'>В корзину</button> ${product.name} по ${product.price} за 1${product.edizm}</div>`;
});

let catalogBlock = document.querySelector('#catalog');
catalogBlock.innerHTML = HTMLString;

catalog.init();