// First, write a function that randomly returns either Rock, Paper, or Scissors


function getComputerChoice() {
    arr = ['rock', 'paper', 'scissors'];
    x = arr[Math.floor(Math.random() * arr.length)];
    return x;
};

/*
//This WORKS. Now put it in a function and just get it to repeat itself in the places where there's currently a "redo" message.
let x = prompt(`Do you choose rock, paper, or scissors?`);
if (typeof(x) != "string") {
    alert(`Nice try, bozo. Enter one of the things I asked.`);
    console.log('redo');
} else {
    x = x.toLowerCase();
};
console.log(x)
if (!((x == "rock") || (x == 'paper') || (x == 'scissors'))) {
    alert('Bro, you gotta enter one of those three options');
    console.log('redo');
} else {
    console.log(x);
};
*/
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
// Interesting find: event listeners need to RETURN a function, if you have the actual function in the elemtnts of the eventlistener func, then it'll just execute them.
rockButton.addEventListener("click", function(){
    startRound('rock');
});
paperButton.addEventListener("click", function(){
    startRound('paper');
});
scissorsButton.addEventListener("click", function(){
    startRound('scissors');
});

function startRound(choice) {
    alert(choice);
}

/*
function getPlayerChoice() {
    let x = prompt(`Round! Do you choose rock, paper, or scissors?`);
    if (typeof(x) != "string") {
        alert(`Nice try, bozo. Enter one of the things I asked.`);
        x = getPlayerChoice();
        return x;
    } else {
        x = x.toLowerCase();
    };
    if (!((x == "rock") || (x == 'paper') || (x == 'scissors'))) {
        alert('Bro, you gotta enter one of those three options');
        x = getPlayerChoice();
        return x;
    } else {
        alert(x);
        return x;
    };
};
*/

//This will be a function that plays a single round of Rock Paper Scissors. The function will take two parameters, the playerSelection and the computerSelection, and then return a string declaring the winner of the game like "You lose! Paper beats Rock!" or whatever. Make your playerSelection parameter case insensitive
// This function is done. It'll return 'tie', 'lose', or 'win' based on the playerSelection and the computerSelection
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return `tie`;
        } else if (computerSelection == 'paper') {
            return `lose`;
        } else if (computerSelection == 'scissors') {
            return `win`;
        } else {console.log('Rock Glitch');
        };
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return `tie`;
        } else if (computerSelection == 'scissors') {
            return `lose`;
        } else if (computerSelection == 'rock') {
            return `win`;
        } else {console.log('Paper Glitch');
        };
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return `tie`;
        } else if (computerSelection == 'rock') {
            return `lose`;
        } else if (computerSelection == 'paper') {
            return `win`;
        } else {console.log('Scissors glitch');
        };
    };
};

//This will be the Game function that plays a 5 round game, keeping score. Then reporting a winner or loser at the end.
let yourPoints = 0;
let theirPoints = 0;

let round = 0;
// for (round = 1; round < 6; round++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    if (result == 'tie') {
        console.log(`It was a tie! You both chose ${playerSelection}!`);
    } else if (result == 'win') {
        console.log(`You win; ${playerSelection} beats ${computerSelection}!`);
        yourPoints ++;
    } else if (result == 'lose') {
            console.log(`You lose; ${computerSelection} beats ${playerSelection}!`);
            theirPoints ++;
    } else {
        console.log(`Something went wrong :(`);
    };
// };

if (yourPoints > theirPoints) {
    console.log(`You won, ${yourPoints} to ${theirPoints}!`)
} else if (theirPoints > yourPoints) {
    console.log(`The computer won, ${theirPoints} to ${yourPoints}! Better luck next time!`)
} else {
    console.log(`It was a tie, ${yourPoints} to ${theirPoints}!`)
};