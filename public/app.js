let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const boxes = document.querySelectorAll('.btn');
const resultText = document.querySelector('.result');

function handleMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        boxes[index].value = currentPlayer;
        boxes[index].disabled = true;
        
        if (checkWin() === currentPlayer) {
            resultText.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (!gameBoard.includes('')) {
            resultText.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            resultText.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }

    return null;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    boxes.forEach(box => {
        box.value = '';
        box.disabled = false;
    });
    resultText.textContent = `Player ${currentPlayer}'s Turn`;
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleMove(index);
    });
});

resultText.textContent = `Player ${currentPlayer}'s Turn`;