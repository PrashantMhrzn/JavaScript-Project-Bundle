document.querySelector('#si-form').addEventListener('submit', calculate);

function calculate(e) {
    const amount = document.querySelector('#amount').value;
    const intrest = document.querySelector('#intrest').value;
    const time = document.querySelector('#time').value;
    const si = document.querySelector('#si');
    console.log(amount);
    // const result = (amount*intrest*time)/100;
    const result = amount*((1 + (intrest/100))**time);
    if(Boolean(amount) && Boolean(intrest) && Boolean(time) && result > 0) {
        si.value = result.toFixed(2);
    } else {
        showError('Please enter values in the required fields!');
    }

    e.preventDefault();
}

function showError(err) {
    const div = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    div.className = 'alert alert-danger';
    div.appendChild(document.createTextNode(err));
    card.insertBefore(div, heading);
    setTimeout(clearError, 2000);
}

function clearError() {
    document.querySelector('.alert').remove();
}