// First, write a function that randomly returns either Rock, Paper, or Scissors

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissors'];
    x = arr[Math.floor(Math.random() * arr.length)];
    return x;
}
console.log(getComputerChoice());


//This will be a function that plays a single round of Rock Paper Scissors. The function will take two parameters, the playerSelection and the computerSelection, and then return a string declaring the winner of the game like "You lose! Paper beats Rock!" or whatever. Make your playerSelection parameter case insensitive
function playRound(playerSelection, computerSelection) {
    
}

//This will be the Game function that plays a 5 round game, keeping score. Then reporting a winner or loser at the end.
