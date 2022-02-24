const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const playerReset = document.querySelector('#reset');
const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');
const rounds = document.querySelector('#rounds');
const selectRounds = document.querySelector('#rounds');

playerOne.addEventListener('click', function(){
    if(playerOneScore.innerHTML < rounds.value){
    playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
    checkWin()
}
});

playerTwo.addEventListener('click', function(){
    if(playerTwoScore.innerHTML < rounds.value){
    playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
    checkWin()
}
});

playerReset.addEventListener('click', reset);

selectRounds.addEventListener('change', reset);

function checkWin() {
    if(playerOneScore.innerHTML == rounds.value){
        playerOneScore.style.color = 'green';
        playerTwoScore.style.color = 'red';
        playerOne.setAttribute('disabled', 'disabled');
        playerTwo.setAttribute('disabled', 'disabled');
    }

    if(playerTwoScore.innerHTML == rounds.value){
        playerTwoScore.style.color = 'green';
        playerOneScore.style.color = 'red';
        playerOne.setAttribute('disabled', 'disabled');
        playerTwo.setAttribute('disabled', 'disabled');
    }
}

function reset() {
    playerOneScore.innerHTML = 0;
   playerTwoScore.innerHTML = 0;
   playerOneScore.style.color = 'black';
   playerTwoScore.style.color = 'black';
   playerOne.removeAttribute('disabled');
   playerTwo.removeAttribute('disabled');
}