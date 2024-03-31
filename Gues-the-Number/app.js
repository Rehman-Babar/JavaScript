let randomNumber = (parseInt(Math.random() * 100 + 1 ))
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const PreviousGuessing = document.querySelector('.guesses');
const remaingGuess = document.querySelector('.lastRemanig');
const loORhi = document.querySelector('.loORhi');
const startOver = document.querySelector('.resultPares');
// console.log(startOver);
const p = document.createElement('p');
let prewiousGuessAdd = [];
let numGuess = 1;
let playGame = true
if (playGame) {
    submit.addEventListener( 'click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess);
    } )
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Give a Valid Number')
    } else if (guess < 1 ){
        alert('Please Give a Number More Than 1')
    } else if (guess > 100 ){
        alert('Please Give a Number Less Than 100')
    }
    else{
        prewiousGuessAdd.push(guess)
        // console.log(prewiousGuessAdd)
        if (numGuess === 11 ) {
            displayGuess(guess)
            displayMessage(`Game Over 🤦‍♂️ Random Number was ${randomNumber}.`)
            endGame()
        } else{
            displayGuess(guess)
            winner(guess)
        }
    }
}

function winner(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guess it Right 😎`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number Is Tooo Low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number Is Tooo High`)
    }
}


function displayGuess(guess) {
    userInput.value = ''
    PreviousGuessing.innerHTML += `${guess},  `
    numGuess++
    remaingGuess.innerHTML =`${11 - numGuess}`
}
function displayMessage(message) {
    loORhi.innerHTML = `<h2>${message}</h2>`
}
function endGame(end) {
    userInput.value = ''
    submit.setAttribute('disabled', '')
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    p.style.cursor='pointer'
    startOver.appendChild(p)
    playGame = false
    newGame()

}
function newGame(start) {
    const newGameButton  = document.querySelector('#newGame');
    newGameButton.addEventListener( 'click', function (){
        randomNumber = (parseInt(Math.random() * 100 + 1 ))
        prewiousGuessAdd = [];
        numGuess = 1
        PreviousGuessing.innerHTML = ''
        remaingGuess.innerHTML =`${11 - numGuess}`
        userInput.removeAttribute('disabled', '')
        submit.removeAttribute('disabled', '')
        
        startOver.removeChild(p);
        displayMessage(`play with your mind`)
        playGame = true;
        

        
    } )
}
