function boardInit() {
    board = [];
    let string = `ABCDEFGH`;
    let newString = string.split(``);

    /* Создание матрицы 8 х 8 */
    for (let i = 1; i < newString.length + 1; i++) {
        board.push(newString.map(element => element + i));
    };

    let boardWrap = document.getElementById(`chess`);
    boardWrap.setAttribute(`style`, `padding: 5px;`);

    /* Делаю мартрицу 10 х 8 */
    board.unshift(newString);
    board.push(newString);

    console.log(board);

    /* Делаю матрицу 10 х 10 */
    board.map((newString, index) => {
        newString.unshift(index);
        newString.push(index);
    });

    /* Делаю пустыми угловые ячейки, т.к. после предыдущей инструкции матрица стала 12 х 10 */
    board[0].shift(newString[0], newString[9]);
    board[0].pop(newString[0], newString[9]);

    console.log(board);

    board.map((newString, row) => {

        newString.map((cell, col) => {
            cell = document.createElement(`div`);

            /* Фомирование поля и выделение колонок с цифрами */
            if (row % 2 + col % 2 == 1) {
                cell.classList.add(`cell--black`);

                if (row == 0) {
                    cell.classList.remove(`cell--black`);
                };
                if (row == 9) {
                    cell.classList.remove(`cell--black`);
                };
                if (col == 0) {
                    cell.classList.remove(`cell--black`);
                };
                if (col == 9) {
                    cell.classList.remove(`cell--black`);
                };
            };
            cell.classList.add(`cell`);

            /* Выставление фигур на поле */
            switch (row) {
                case 1:
                    newString.splice(1, 8, `&#9814`, `&#9816;`, `&#9815;`, `&#9813;`, `&#9812;`, `&#9815;`, `&#9816;`, `&#9814;`);
                    cell.innerHTML = newString[col];
                    cell.setAttribute(`style`, `transform: rotate(180deg);`);
                    break;
                case 2:
                    newString.splice(1, 8, "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;");
                    cell.innerHTML = newString[col];
                    cell.setAttribute(`style`, `transform: rotate(180deg);`);
                    break;
                case 7:
                    newString.splice(1, 8, "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;");
                    cell.innerHTML = newString[col];
                    break;
                case 8:
                    newString.splice(1, 8, `&#9820;`, `&#9822;`, `&#9821;`, `&#9819;`, `&#9818;`, `&#9821;`, `&#9822;`, `&#9820;`);
                    cell.innerHTML = newString[col];
                    break;
                default:
                    break;
            };

            /* Формирование колонок с цифрами и буквами */
            if (row == 0) {
                cell.innerText = newString[col];
                newString[0] = null;
                newString[9] = null;
                cell.setAttribute(`style`, `transform: rotate(180deg);`);
            };
            if (row == 9) {
                cell.innerText = newString[col];
            };
            if (col == 0) {
                cell.innerText = newString[col];
            };
            if (col == 9) {
                cell.innerText = newString[col];
                cell.setAttribute(`style`, `transform: rotate(180deg);`);
            };

            boardWrap.appendChild(cell);
        });
    });
};

boardInit();