const products = [
    {
        id: 1, sex: `men`, type: `clothes`, name: `Socks`, price: 1000, amount: 1, discount: false,
    },
    {
        id: 2, sex: `women`, type: `accessories`, name: `Glasses`, price: 1500, amount: 1, discount: false,
    },
    {
        id: 3, sex: `women`, type: `clothes`, name: `Dress`, price: 3200, amount: 1, discount: 20,
    },
    {
        id: 4, sex: `men`, type: `clothes`, name: `Shirt`, price: 1900, amount: 1, discount: 30,
    }
];

const cart = [];

addEventListener("DOMContentLoaded", function () {
    showProducts(products);
})

const app = document.querySelector(`#products`);

const addProductBtnBuy = (productId) => {
    return `<button class="product__btn-buy" data-product="${productId}">Купить</button>`
}

const showProduct = (product) => {
    return `
        <div class="product products__product">
            <div class="product__name">${product.name}</div>
            <div class="product__price">${product.price}</div>
            ${addProductBtnBuy(product.id)}
        </div>
    `;
}

const showProducts = (products) => {
    products.map(product => {
        app.insertAdjacentHTML(`beforeend`, showProduct(product));
    })

    const productBtns = app.querySelectorAll(`.product__btn-buy`);
    productBtns.forEach(productBtn => {
        productBtn.addEventListener(`click`, addToCart);
    });
}

const bskt = document.querySelector(`#cart`);

const addProductBtnRemove = (productId) => {
    return `<button class="product__btn-remove">Убрать</button>`;
}

const

const addToCart = (productBtn) => {
    const getProductId = parseInt(productBtn.target.dataset.product);
    cart.push(getProductId);
    console.log(cart);
}

