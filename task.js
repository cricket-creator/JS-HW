const products = [
    {
        id: 1, name: `Socks`, price: 1000, amount: 1, discount: false
    },
    {
        id: 2, name: `Glasses`, price: 1500, amount: 1, discount: false
    },
    {
        id: 3, name: `Dress`, price: 3200, amount: 1, discount: 20
    },
    {
        id: 4, name: `Shirt`, price: 1900, amount: 1, discount: 30
    }
];

const cart = [];

addEventListener("DOMContentLoaded", function () {
    initProducts(products);
})

const app = document.querySelector(`#products`);

const addProductBtnBuy = (productId) => {
    return `<button class="product__btn-buy" data-product="${productId}">Купить</button>`
}

const createProduct = (product) => {
    return `
        <div class="product products__product">
            <div class="product__name">${product.name}</div>
            <div class="product__price">${product.price}</div>
            ${addProductBtnBuy(product.id)}
        </div>
    `;
}

const initProducts = (products) => {
    products.map(product => {
        app.insertAdjacentHTML(`beforeend`, createProduct(product));
    })

    const productAddBtns = app.querySelectorAll(`.product__btn-buy`);
    productAddBtns.forEach(productBtn => {
        productBtn.addEventListener(`click`, addToCart);
    });
}

const cartForm = document.querySelector(`#cartForm`);
const bskt = document.querySelector(`#cart`);

const addProductBtnRemove = (productId) => {
    return `<button class="product__btn-remove" data-cart="${productId}">Удалить</button>`;
}

const showProducts = (product) => {
    return `
        <div class="cart__product">
            <div class="cart__name">${product.name}</div>
            <div class="cart__price">${product.price}</div>
            ${addProductBtnRemove(product.id)}
        </div>
    `;
}

const addToCart = (productBtn) => {
    const productId = parseInt(productBtn.target.dataset.product);

    addFromProducts(productId);

    const totalPrice = cartForm.querySelector(`.cart__total-price`);

    totalPrice.innerText = `Общая сумма: ${cartTotalPrice(cart)} руб.`;
}

const addFromProducts = (productId) => {
    const cartItem = products.find(product => product.id === productId);
    bskt.insertAdjacentHTML(`beforeend`, showProducts(cartItem));
    cart.push(cartItem);
}

function cartTotalPrice(products) {
    let sum = 0;
    products.forEach(products => {
        sum += products.amount * (products.price/*  - (products.price * products.discount / 100) */);
    });

    return sum;
}