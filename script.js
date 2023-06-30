// First, write a function that randomly returns either Rock, Paper, or Scissors


function getComputerChoice() {
    arr = ['rock', 'paper', 'scissors'];
    x = arr[Math.floor(Math.random() * arr.length)];
    return x;
};


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
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return `tie`;
        } else if (computerSelection == 'scissors') {
            return `lose`;
        } else if (computerSelection == 'rock') {
            return `win`;
        } else {console.log('Paper Glitch');
        };
    }
    if (playerSelection == 'scissors') {
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

/*

for (i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
   // INSERT THE GAME LOOP HERE
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    if (result == 'tie') {
        console.log(`It was a tie! You both chose ${playerSelection}!`)
    }
    if (result == 'win') {
        console.log(`You win; ${playerSelection} beats ${computerSelection}!`)
    }
    if (result == 'lose') {
        console.log(`You lose; ${computerSelection} beats ${playerSelection}!`)
    }
}
*/

/*
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(computerSelection);
let result = playRound(playerSelection,computerSelection);
if (result == 'tie') {
    console.log(`It was a tie! You both chose ${playerSelection}!`);
} else if (result == 'win') {
    console.log(`You win; ${playerSelection} beats ${computerSelection}!`);
} else if (result == 'lose') {
        console.log(`You lose; ${computerSelection} beats ${playerSelection}!`);
} else {
    console.log(`Something went wrong :(`);
};

*/