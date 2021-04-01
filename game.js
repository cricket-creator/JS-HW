// function createRandomNumber(n, min, max) {
//     n = 1;
//     min = 1000;
//     max = 9999;
//     let userGuessNumber, botGuessNumber;
//     botGuessNumber = Math.ceil(Math.random() * (max - min)) + min;
//     console.log(botGuessNumber);

//     while (userGuessNumber != botGuessNumber) {
//         userGuessNumber = +prompt(`Введите четырёзначное число:`);
//         if (isNaN(userGuessNumber)) { // проверка на число
//             alert(`Введите число!`);
//         }
//         else if (min > userGuessNumber > max) { // проверка на количество цифр
//             alert(`Введите четырёхзначное число!`);
//         }
//         else {
//             if (userGuessNumber == botGuessNumber) {
//                 alert(`Поздравляем. Загаданное число равно: ${botGuessNumber}. Количество попыток: ${n}.`);
//                 n = 1;
//                 createRandomNumber();
//             }
//             else if (userGuessNumber > botGuessNumber) {
//                 alert(`${userGuessNumber} > Загаданное число!`);
//                 n++;
//             }
//             else {
//                 alert(`${userGuessNumber} < Загаданное число!`);
//                 n++;
//             }
//         }
//     }
// }

// createRandomNumber();