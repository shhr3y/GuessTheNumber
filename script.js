let correctNumber = getRandomNumber();
let guesses = [];


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
  getResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
  document.getElementById("number-guess").value = null;
}

function getResult(numberGuess){
  if(numberGuess>correctNumber){
    showNumberAbove();
  }
  else if(numberGuess<correctNumber){
    showNumberBelow();  }
  else{
    showYouWon();
  }
}

function initGame(){
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = null;
  guesses = [];
  document.getElementById("history").innerHTML = null;
  document.getElementById("number-guess").value = null;
}

function getRandomNumber(){
  return parseInt(Math.random()*100)
}

function saveGuessHistory(guess) {
  guesses.unshift(guess);
}

function displayHistory() {
  let list = "<ul class='list-group'>";
    for(let i=0;i<guesses.length;i++){
      list+=`<li class='list-group-item'>Recently Guessed: ${guesses[i]}</li>`;
    }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = `<div class='alert alert-warning' role='alert'>${text}</div>`
      break;
    case "won":
      dialog = `<div class='alert alert-success' role='alert'>${text}</div>`
      break;
  }
  return dialog;
}

function showYouWon(){
  let dialog = getDialog("won","Congratulations! It is the Correct Number!");
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  let dialog = getDialog("warning","Try Again! It is higher than the Correct Number!");
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  let dialog = getDialog("warning","Try Again! It is lower than the Correct Number!");
  document.getElementById("result").innerHTML = dialog;
}