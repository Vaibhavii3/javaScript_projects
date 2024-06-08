let randomNumber;
let attempts;

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('guess').value = '';
}

function checkGuess() {
    const guess = Number(document.getElementById('guess').value);
    const result = document.getElementById('result');
    attempts++;
    
    if (guess < 1 || guess > 100) {
        result.innerHTML = 'Please enter a number between 1 and 100.';
        result.className = 'result alert alert-warning';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Too low! Try again.';
        result.className = 'result alert alert-info';
    } else if (guess > randomNumber) {
        result.innerHTML = 'Too high! Try again.';
        result.className = 'result alert alert-info';
    } else {
        result.innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
        result.className = 'result alert alert-success';
    }
}

// Initialize the game when the page loads
window.onload = resetGame;
