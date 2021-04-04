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

// Спасибо за подсказку про инструкцию continue. Мне понадобились целые сутки, чтобы понять, что всего навсего нужно было переставить

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