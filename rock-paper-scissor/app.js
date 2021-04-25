document.querySelector('#rock').addEventListener('click',() => {showInput('rock');});
document.querySelector('#paper').addEventListener('click',() => {showInput('paper');});
document.querySelector('#scissor').addEventListener('click',() => {showInput('scissor');});

function showInput(type) {
    const usrInput = document.querySelector('#user-input');
    usrInput.innerHTML = `<img src="${type}.png"> <div class="invisible">${type}</div>`; 
    computerInput();
    showResults();
}

function computerInput() {
    const arr = ['rock', 'paper', 'scissor'];
    const choice = Math.floor(Math.random()*3);
    const compInput = document.querySelector('#comp-input');
    compInput.innerHTML =`<img src="${arr[choice]}.png"> <div class="invisible">${arr[choice]}</div>`;
}

function showResults() {
    const usrInput = document.querySelector('#user-input').lastChild.textContent;
    console.log(usrInput);
    const compInput = document.querySelector('#comp-input').lastChild.textContent;
    console.log(compInput);
    const results = document.querySelector('#results');
    if(usrInput === '' || compInput === '') {
        console.log('something went wrong');
    } else if(usrInput === 'rock' && compInput ==='scissor' || usrInput === 'paper' && compInput ==='rock' || usrInput === 'scissor' && compInput ==='paper') {
        results.innerHTML = 'YOU WON';
    } else if(usrInput === 'rock' && compInput ==='paper' || usrInput === 'paper' && compInput ==='scissor' || usrInput === 'scissor' && compInput ==='rock') {
        results.innerHTML = 'YOU LOST';
    } else {
        results.innerHTML = 'DRAW';
    }
}