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
    // Check if the cell is empty and the game is still active
    if (cells[index] === '' && !result.textContent.includes('wins')) {
        // Update the cell with the current player's symbol
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;

        // Check for winning conditions
        for (const condition of conditions) {
            const [a, b, c] = condition;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                result.textContent = `Player ${currentPlayer} wins!`;
                disableButtons();
                return;
            }
        }

        // Check for a draw
        if (!cells.includes('')) {
            result.textContent = "It's a draw!";
            disableButtons();
            return;
        }

        // Switch to the next player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        result.textContent = `Player ${currentPlayer}'s turn`;
    }
};

// Function to disable buttons after a win or draw
const disableButtons = () => {
    btns.forEach((btn) => {
        btn.disabled = true;
    });
};

// Function to reset the game
const resetGame = () => {
    // Reset game state
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    // Clear the result text
    result.textContent = `Player ${currentPlayer}'s turn`;

    // Enable buttons
    btns.forEach((btn) => {
        btn.textContent = '';
        btn.disabled = false;
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);