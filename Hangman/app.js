document.addEventListener('DOMContentLoaded', () => {
    const words = ["javascript", "hangman", "coding", "programming", "web", "python", "php", "html", "css"];
    let selectedWord;
    let attempts;
    let guessedLetters;
    let wrongGuesses;

    const wordDisplay = document.getElementById('wordDisplay');
    const wrongGuessesDisplay = document.getElementById('wrongGuesses');
    const remainingAttemptsDisplay = document.getElementById('remainingAttempts');
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const restartButton = document.getElementById('restartButton');

    function initializeGame() {
        selectedWord = words[Math.floor(Math.random() * words.length)];
        attempts = 6;
        guessedLetters = [];
        wrongGuesses = [];
        updateDisplay();
        guessInput.value = '';
        guessInput.focus();
    }

    function updateDisplay() {
        wordDisplay.textContent = selectedWord.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
        wrongGuessesDisplay.textContent = wrongGuesses.join(' ');
        remainingAttemptsDisplay.textContent = attempts;
    }

    function checkGuess(letter) {
        if (selectedWord.includes(letter)) {
            guessedLetters.push(letter);
        } else {
            wrongGuesses.push(letter);
            attempts--;
        }
        updateDisplay();
        checkGameOver();
    }

    function checkGameOver() {
        if (attempts <= 0) {
            alert(`Game Over! The word was "${selectedWord}".`);
            initializeGame();
        } else if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
            alert('Congratulations! You guessed the word!');
            initializeGame();
        }
    }

    guessButton.addEventListener('click', () => {
        const guess = guessInput.value.toLowerCase();
        if (guess && !guessedLetters.includes(guess) && !wrongGuesses.includes(guess)) {
            checkGuess(guess);
        }
        guessInput.value = '';
        guessInput.focus();
    });

    restartButton.addEventListener('click', initializeGame);

    initializeGame();
});
