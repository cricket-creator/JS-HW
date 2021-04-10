// const menSocks = {
//     sex: `men`,
//     type: `clothes`,
//     name: `socks`,
//     price: 1000,
//     amount: 3,
//     discount: 1,
//     totalPrice: function () {
//         return this.amount * this.price * this.discount;
//     },
// };

// const womenGlasses = {
//     sex: `women`,
//     type: `accessories`,
//     name: `glasses`,
//     price: 1500,
//     amount: 1,
//     discount: 1,
//     totalPrice: function () {
//         return this.amount * this.price * this.discount;
//     },
// };

// const femaleDress = {
//     sex: `women`,
//     type: `clothes`,
//     name: `dress`,
//     price: 3200,
//     amount: 1,
//     discount: 0.8,
//     totalPrice: function () {
//         return this.amount * this.price * this.discount;
//     },
// };

// const menShirt = {
//     sex: `men`,
//     type: `clothes`,
//     name: `shirt`,
//     price: 1900,
//     amount: 2,
//     discount: 0.7,
//     totalPrice: function () {
//         return this.amount * this.price * this.discount;
//     },
// };

// let cart = [];

// cart.push(menSocks);
// cart.push(womenGlasses);
// cart.push(femaleDress);
// cart.push(menShirt);

// function getCartTotalPrice(array) {
//     let sum = 0;
//     array.forEach(Object => {
//         sum += Object.totalPrice();
//     });
//     return console.log(sum);
// }

// getCartTotalPrice(cart);