const amountInput = document.getElementById('amount');

const interestInput = document.getElementById('interest');

const termInput = document.getElementById('term');

const form = document.getElementById('loan-calculator-form');
form.addEventListener('submit', handleSubmit);


function calculateMonthlyPayment(principal = 0, interestRate = 0, years = 0) {
    const monthlyRate = interestRate / 100 / 12; 
    const totalPayments = years * 12;
    const factor = 1 + monthlyRate;
    const compoundedFactor = Math.pow(factor, totalPayments);
    const numerator = principal * monthlyRate * compoundedFactor; 
    const denominator = compoundedFactor - 1; 
    const monthlyPayment = numerator / denominator;

    return  monthlyPayment.toFixed(2);
}

function handleSubmit(event) {
    event.preventDefault();
    const amount = parseInt(amountInput.value);
    const interest = parseInt(interestInput.value);
    const term = parseInt(termInput.value);

    const monthlyPayment = calculateMonthlyPayment(amount, interest, term);
  
    const outputText = document.getElementById('monthly-payment');
    outputText.innerHTML = `Monthly Payment: $${monthlyPayment}`;
}

