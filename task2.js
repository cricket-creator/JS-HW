/* const menSocks = {
    sex: `men`,
    type: `clothes`,
    name: `socks`,
    price: 1000,
    amount: 3,
    discount: false,
};

const womenGlasses = {
    sex: `women`,
    type: `accessories`,
    name: `glasses`,
    price: 1500,
    amount: 1,
    discount: false,
};

const womenDress = {
    sex: `women`,
    type: `clothes`,
    name: `dress`,
    price: 3200,
    amount: 1,
    discount: 20,
};

const menShirt = {
    sex: `men`,
    type: `clothes`,
    name: `shirt`,
    price: 1900,
    amount: 2,
    discount: 30,
};

let cart = [];

cart.push(menSocks);
cart.push(womenGlasses);
cart.push(womenDress);
cart.push(menShirt);

function countBasketPrice(products) {
    let sum = 0;
    products.forEach(products => {
        sum += products.amount * (products.price - (products.price * products.discount / 100));
    });
    return console.log(sum);
}

countBasketPrice(cart); */