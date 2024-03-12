let currentPlayer = 'X';
let cells = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function cellClicked(index) {
    if (cells[index] === '' && !checkWinner() && !isDraw()) {
        cells[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('winner').innerText = `Congrats Player ${currentPlayer} is The Winner !!!!`;
        } else if (isDraw()) {
            document.getElementById('winner').innerText = " Oh!! It's a draw! Reset Game.";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';        
        }
    }
}

function checkWinner() {
    for (let combo of winningCombos) {
        if (cells[combo[0]] !== '' &&
            cells[combo[0]] === cells[combo[1]] &&
            cells[combo[0]] === cells[combo[2]]) {
            return true;
        } 
    }
    return false;
}

function isDraw() {
    return cells.every(cell => cell !== '');
}

function resetGame() {
    currentPlayer = 'X';
    cells = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('winner').innerText = '';
    let cellElements = document.getElementsByClassName('cell');
    for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].innerText = '';
    }
}
