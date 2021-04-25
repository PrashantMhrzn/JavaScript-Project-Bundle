//set game values
let min = 1,
    max = 10,
    winningNum = randomNumber(min, max),
    guessesLeft = 3;

//UI elements
const minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    btn = document.querySelector('.btn'),
    input = document.querySelector('#input'),
    message = document.querySelector('.message'),
    game = document.querySelector('.card');
    
//assigning the values
minNum.textContent = min;
maxNum.textContent = max;

//listen for event
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'btn btn-primary mt-3 play-again') {
        window.location.reload();
    }
})

btn.addEventListener('click', function () {
    let guess = parseInt(input.value);
    //check if valid
    if (guess < min || guess > max || isNaN(guess)) {
        showMessage(`Enter a number between ${min} and ${max}`, 'red');
    }
    else if (guess === winningNum) {
        results(true, `${winningNum} is correct! YOU WIN`);
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            results(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            showMessage(`Guess is not correct, ${guessesLeft} Gusses left`, 'red');
            input.style.borderColor = 'red';
            input.value = '';
        }
    }
});

function showMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

function results(bin, msg) {
    input.disabled = true;
    if (bin === true) {
        input.style.borderColor = 'green';
        showMessage(msg, 'green');
    } else {
        input.style.borderColor = 'red';
        showMessage(msg, 'red');
    }
    //play again
    btn.value = 'Play Again';
    btn.className = 'btn btn-primary mt-3 play-again';

}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}