function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    const result = document.getElementById('result');
    
    if (isNaN(billAmount) || billAmount <= 0) {
        result.innerHTML = 'Please enter a valid bill amount.';
        result.className = 'result alert alert-danger';
        return;
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = numberOfPeople > 0 ? totalAmount / numberOfPeople : totalAmount;
    
    result.innerHTML = `
        <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
        <p>Total Amount: $${totalAmount.toFixed(2)}</p>
        ${numberOfPeople > 0 ? `<p>Amount Per Person: $${amountPerPerson.toFixed(2)}</p>` : ''}
    `;
    result.className = 'result alert alert-info';
}
