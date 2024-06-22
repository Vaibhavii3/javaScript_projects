function calculateMaturityAmount(){

    const principle = parseFloat(document.getElementById('Principle').value);
    const interestRate = parseFloat(document.getElementById('InterestRate').value);
    const tenure = parseFloat(document.getElementById('Tenure').value);

    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);