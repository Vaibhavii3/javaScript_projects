function reverseString() {
    const inputString = document.getElementById('inputString').value;
    const result = document.getElementById('result');
    const reversedString = inputString.split('').reverse().join('');
    result.innerHTML = `Reversed String: ${reversedString}`;
    result.className = 'result alert alert-info';
}

function changeCase() {
    const inputString = document.getElementById('inputString').value;
    const result = document.getElementById('result');
    let changedCaseString = '';
    
    for (let char of inputString) {
        if (char === char.toUpperCase()) {
            changedCaseString += char.toLowerCase();
        } else {
            changedCaseString += char.toUpperCase();
        }
    }
    
    result.innerHTML = `Changed Case String: ${changedCaseString}`;
    result.className = 'result alert alert-info';
}

function checkPalindrome() {
    const inputString = document.getElementById('inputString').value;
    const result = document.getElementById('result');
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    
    if (cleanedString === reversedString) {
        result.innerHTML = 'The string is a palindrome.';
        result.className = 'result alert alert-success';
    } else {
        result.innerHTML = 'The string is not a palindrome.';
        result.className = 'result alert alert-danger';
    }
}
