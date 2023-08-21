let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let playGame = true ;
 let prevGuess=[];
 let numGuess=1;
if(playGame){
    submit.addEventListener('click', function (e) {

        e.preventDefault();

        const guess = parseInt(userInput.value);
        console.log(guess);
validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please Enter a valid Number');
    }
    else if(guess<1){
alert('pleaser enter a Number more than 1');
    }

    else if(guess>100){
        alert('pleaser enter a Number less than 100');
            }
            else{
                prevGuess.push(guess);
                if(numGuess ===11){
                    displayGuess(guess);
                    displayMessage('Game is Over ,RandomNumber was ${randomNumber}');
                    endGame();
                }
                else{
                    displayGuess(guess);
                    checkGuess(guess);
                }
            }

}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('you guessed it right');
        endGame();
    }
    else if (guess>randomNumber){
        displayMessage('Number is too high ');
    }
    else {
        displayMessage('Number is too low ');
    }
}

//  function displayGuess(guess){

//     userInput.value='';
//     console.log(guessslot);
//     guessslot.innerHTML += `${guess}, `;
  
// numGuess++;
// remaining.innerHTML=`${11-numGuess}`;
// }

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
  }
  
 function displayMessage(message){
    lowOrHi.innerHTML=`${message}`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
   p.classList.add('button');
    p.innerHTML='<h2 id="newGame">Start NewGame </h2>';

    startOver.appendChild(p);
    playGame=false;
    newGame();



}

function newGame(){
    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener('click',function (e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        guessslot.innerHTML='';
        userInput.removeAttribute('disabled');
        numGuess=1;
        remaining.innerHTML=`${11-numGuess}`;
        startOver.removeChild(p);
        playGame=true;


    })
}