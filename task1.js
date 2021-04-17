let board = [];

function boardInit() {
    let string = `ABCDEFGH`;
    let newString = string.split(``);

    for (let i = 1; i < newString.length + 1; i++) {
        board.push(newString.map(element => element + i));
    }

    console.log(board);

    let boardWrap = document.getElementById(`chess`);
    let letterWrap = document.getElementsByClassName(`letters`);
    let numbersWrap = document.getElementsByClassName(`numbers`);

    board.forEach((newString, row) => {

        newString.forEach((cell, col) => {
            cell = document.createElement(`div`);

            if (row % 2 + col % 2 == 1) {
                cell.classList.add(`cell--black`);
            }
            cell.classList.add(`cell`);

            /* if (row == 0) {
                cell.classList.remove(`cell--black`);
                cell.setAttribute(`style`, `border-bottom: 1px solid black;`);
            }
            if (row == 9) {
                cell.classList.remove(`cell--black`);
            }

            if (col == 0) {
                cell.classList.remove(`cell--black`);
            }
            if (col == 9) {
                cell.classList.remove(`cell--black`);
            } */

            boardWrap.appendChild(cell);
        });
    });

    boardWrap.setAttribute(`style`, `border: 1px solid black`);


}

boardInit();