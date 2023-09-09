et currentPlayer = 'X';
const cells = document.querySelectorAll('.btn');
const resultDisplay = document.getElementById('result');
let gameActive = true;

// Winning combinations
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to check for a win
function checkWin() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
}

// Function to handle cell click
function handleCellClick(event) {
    const cell = event.target;

    // Check if the cell is empty and the game is still ongoing
    if (cell.textContent === '' && gameActive) {
        cell.textContent = currentPlayer;

        // Check for a win
        if (checkWin()) {
            resultDisplay.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if ([...cells].every(cell => cell.textContent)) {
            resultDisplay.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            resultDisplay.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

// Function to reset the game
function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    resultDisplay.textContent = "Player X's turn";
    gameActive = true;
}

// Add click event listeners to cells
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Add click event listener to reset button
document.getElementById('reset-button').addEventListener('click', resetGame);