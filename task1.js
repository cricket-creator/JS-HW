// let userNumber = prompt(`Введите число от 0 до 999: `, 245);
// let argDivision = [];
// let argChecker = {};

// function getDivision(arg) {
//     let division = arg.toString().split(``);
//     argDivision = division.map(Number);

//     for (let i = 0; i < argDivision.length; i++) {
//         if (isNaN(argDivision[i])) {
//             alert(`Введите число от 0 до 999!`);
//             return console.log(argChecker);
//         };
//     };

//     switch (argDivision.length) {
//         case 1:
//             argChecker.units = argDivision[0];
//             return console.log(argChecker);
//         case 2:
//             argChecker.tens = argDivision[0];
//             argChecker.units = argDivision[1];
//             return console.log(argChecker);
//         case 3:
//             argChecker.hundreds = argDivision[0];
//             argChecker.tens = argDivision[1];
//             argChecker.units = argDivision[2];
//             return console.log(argChecker);
//         default:
//             alert(`Введите число от 0 до 999!`);
//             return console.log(argChecker);
//     };
// };

// getDivision(userNumber);