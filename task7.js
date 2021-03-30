// let variableNull = null;
// console.log(typeof (variableNull));

// let variableNumber = 0;
// console.log(typeof (variableNumber));

// /* Они не будут равны, т.к. null является объектом, а 0 является числом. 

// Это ошибка, признанная разработчиками JS, т.к. если сделать преобразование типа Number(null), то null = 0  */


// if (variableNull != variableNumber) {
//     console.log(`${variableNull} не равно ${variableNumber}!`); // т.к. null - пустое значение, а 0 - число.`
// }
// if (+variableNull == variableNumber) {
//     console.log(`${variableNull} равно ${variableNumber}`); // т.к. null преобразуется в число 0`
// }