//listen for sumbit
document.querySelector('#loan-form').addEventListener('submit', calculate);

function calculate(e) {
    //UI vars
    const amount = document.querySelector('#amount');
    const intrest = document.querySelector('#intrest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalIntrest = document.querySelector('#total-intrest');

    const principal = parseFloat(amount.value);
    const calcIntrest = parseFloat(intrest.value) / 100 / 12;
    const clacPayments = parseFloat(years.value) * 12;

    //compute monthly payment (formula)
    const x = Math.pow(1 + calcIntrest, clacPayments);
    const monthly = (principal*x*calcIntrest)/(x-1);

    if (isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(4);
        totalPayment.value = (monthly*clacPayments).toFixed(4);
        totalIntrest.value = ((monthly*clacPayments)-principal).toFixed(4);
    } else {
        showError('Please enter the required data!');
    }
    
    e.preventDefault();
}

function showError(err) {
    // create a div
    const div = document.createElement('div');
    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // assign a classname
    div.className = 'alert alert-danger';
    //append the message
    div.appendChild(document.createTextNode(err));
    //display error above heading
    card.insertBefore(div, heading);
    // clear err after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}