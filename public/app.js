// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Check if the cell is empty and the game is still ongoing
    if (cells[index] === '' && result.textContent.startsWith('Player')) {
        // Update the cell with the current player's symbol
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;

        // Check for winning conditions
        for (const condition of conditions) {
            const [a, b, c] = condition;
            if (cells[a] === currentPlayer && cells[b] === currentPlayer && cells[c] === currentPlayer) {
                // Display a winning message and disable all buttons
                result.textContent = `Player ${currentPlayer} wins!`;
                btns.forEach(btn => btn.disabled = true);
                return;
            }
        }

        // Check for a draw (all cells are filled)
        if (cells.every(cell => cell !== '')) {
            result.textContent = "It's a draw!";
        } else {
            // Switch to the other player's turn
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            result.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
};

// Function to reset the game
const resetGame = () => {
    // Reset the game state
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    // Clear the ~cell buttons and re-enable them
    btns.forEach(btn => {
        btn.textContent = '';
        btn.disabled = false;
    });

    // Update the result message
    result.textContent = "Player X's turn";
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);