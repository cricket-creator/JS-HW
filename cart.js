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

addEventListener('DOMContentLoaded', function () {
    showProducts(products);
});

const $app = document.querySelector('#products');
const cartForm = document.querySelector('#cartForm');
const $cart = document.querySelector('#cart');
const $totalPrice = document.querySelector('.cart__total-price');

const setProductBtnAdd = (productID) => {
    return `<button class="product__btn-add" data-product="${productID}">Добавить</button>`;
};

const setProduct = (product) => {
    return `
        <div class="product products__product">
            <div class="product__name">${product.name}</div>
            <div class="product__price">${product.price}</div>
            ${setProductBtnAdd(product.id)}
        </div>
    `;
};

const showProducts = (products) => {
    products.map(product => {
        $app.insertAdjacentHTML('beforeend', setProduct(product));
    })

    const productBtns = document.querySelectorAll('.product__btn-add');
    productBtns.forEach(productBtn => {
        productBtn.addEventListener('click', addToCart);
    });
}

const addToCart = (productBtn) => {
    const productID = parseInt(productBtn.target.dataset.product);

    findInProducts(productID);

    $totalPrice.innerText = `Общая сумма: ${totalPrice(cart)} руб.`;
}

const showInCart = (product) => {
    return `
        <div class="cart__product">
            <div class="product__name">${product.name}</div>
            <div class="product__price">${product.price}</div>
            <button class="product__btn-remove">Удалить</button>
        </div>
    `;
};

const findInProducts = (productID) => {
    const cartItem = products.find(product => product.id === productID)
    $cart.insertAdjacentHTML('beforeend', showInCart(cartItem));
    cart.push(cartItem);
};

const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
        sum += product.amount * (product.price - (product.price * product.discount / 100));
    });
    return sum;
};