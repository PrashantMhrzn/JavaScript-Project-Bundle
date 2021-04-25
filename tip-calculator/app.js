function calculateTip() {
    const billAmt = document.querySelector('#amount').value;
    const service = document.querySelector('#percent').value/100;
    const people = document.querySelector('#people').value;

    console.log(billAmt);
    console.log(service);
    console.log(people);

    //calculate tip
    let total = (billAmt * service) / people;
    total = total.toFixed(2);

    //show tip
    document.querySelector('#tip-amount').innerHTML = `<label class="font-weight-bold">Tip Amount Each</lable><p>$ ${total}</p>`;

}

document.querySelector('#calculate').addEventListener('click', calculateTip);