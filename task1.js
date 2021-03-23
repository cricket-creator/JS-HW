// 1-я задача

let tempretureValueCelsius = parseFloat(prompt(`Введите температуру в Цельсиях: `, `36.6`));
if (isNaN(tempretureValueCelsius)) {
    alert(`Введите число!`);
} else {
    let tempretureValueFahrenheit = (9 / 5) * tempretureValueCelsius + 32;
    alert(`Температура в градусах Фаренгейта: ${tempretureValueFahrenheit.toFixed(2)}`);
}
