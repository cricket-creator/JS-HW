// Взял этот код за основу

// prog: for (let i = 2; i <= 100; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             continue prog;
//         }
//     }
//     console.log(i);
// }


// Через цикл while + for

// let i = 1;

// prog: while (i < 100) {
//     ++i;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             continue prog;
//         }
//     }
//     console.log(i);
// }


// Через 2 цикла while

// let i = 1;

// prog: while (i < 100) {
//     ++i;
//     let j = 2;
//     while (j < i) {
//         if (i % j == 0) {
//             continue prog;
//         } else {
//             j++;
//         }
//     }
//     console.log(i);
// }


// Через квадратный корень i

// let i = 1

// prog: while (i < 100) {
//     ++i;

//     let j = 2;

//     while (j <= (i ** (1 / 2))) {
//         if (i % j == 0) {
//             continue prog;
//         } else {
//             j++;
//         }
//     }

//     console.log(i);
// }


// Решето Эратосфена

// let sieveОfEratosthenes = [];

// function createSieve(Array) {
//     for (let i = 2; i <= 100; i++) {
//         Array.push(i);
//     }
//     return console.log(Array);
// }

// createSieve(sieveОfEratosthenes);

// в процессе доработки