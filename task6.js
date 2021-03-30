function mathOpeartion(arg1, arg2, operation) {
    operation = prompt(`Введите тип математической операции: `, `сложение`);

    arg1 = Number(prompt(`Введите первый аргумент: `, arg1));
    arg2 = Number(prompt(`Введите второй аргумент: `, arg2));

    if (isNaN(arg1, arg2)) {
        alert(`Введите число!`);
        mathOpeartion();
    }

    switch (operation) {
        case `сложение`:
            return alert(arg1 + arg2);
        case `вычитание`:
            return alert(arg1 - arg2);
        case `умножение`:
            return alert(arg1 * arg2);
        case `деление`:
            return alert(arg1 / arg2);
    }
}

mathOpeartion();