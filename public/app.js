
        // JavaScript code for Tic Tac Toe game logic
        let currentPlayer = 'X';
        let isGameActive = true;

        // Function to handle player moves
        function handleMove(element) {
            if (element.value === '' && isGameActive) {
                element.value = currentPlayer;
                element.disabled = true;
                togglePlayer();
                checkWin();
            }
        }

        // Function to toggle between X and O
        function togglePlayer() {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.querySelector('.result').textContent = `Player ${currentPlayer}'s turn`;
        }

        // Function to check for a winning condition
        function checkWin() {
            // Implement your winning condition logic here
        }

        // Function to reset the game
        function resetGame() {
            const buttons = document.querySelectorAll('.bt');
            buttons.forEach(button => {
                button.value = '';
                button.disabled = false;
            });
            currentPlayer = 'X';
            isGameActive = true;
            document.querySelector('.result').textContent = `Player ${currentPlayer}'s turn`;
        }