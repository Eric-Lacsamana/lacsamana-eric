const amountInput = document.getElementById('amount');

const interestInput = document.getElementById('interest');

const termInput = document.getElementById('term');

const form = document.getElementById('loan-calculator-form');
form.addEventListener('submit', handleSubmit);


function calculateMonthlyPayment(principal = 0, interestRate = 0, years = 0) {
    console.log('test', principal, interestRate, years)
    const monthlyRate = interestRate / 100 / 12;  // e.g., 10% -> 0.008333

    // Total number of payments (months)
    const totalPayments = years * 12;  // 5 years * 12 months = 60 months

    // Step-by-step calculation for the numerator
    const factor = 1 + monthlyRate;                           // (1 + monthlyRate)
    const compoundedFactor = Math.pow(factor, totalPayments);  // (1 + monthlyRate) ^ totalPayments
    const numerator = principal * monthlyRate * compoundedFactor;  // principal * monthlyRate * (1 + monthlyRate) ^ totalPayments

    // Final calculation for the monthly payment
    const denominator = compoundedFactor - 1;  // (1 + monthlyRate) ^ totalPayments - 1
    const monthlyPayment = numerator / denominator;  // Final monthly payment

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

