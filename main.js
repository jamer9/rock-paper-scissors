
//global variables
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;



//function that randomly generates rock, paper, or scissors
function getComputerChoice () {
    let number = Math.floor(Math.random() * 10 + 1) * 3;
    let choice;
    if (number <= 10) {
        choice = 'rock';
    }
    else if (number <= 20) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    return choice;
}

function playRound (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 'Tie, choose again';
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        playerScore +=1;
        return 'You win! Rock beats paper.';
    }  
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        computerScore +=1;
        return 'You lose! Rock beats paper.';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore +=1;
        return 'You win! Scissors beats paper.';
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore +=1;
        return 'You lose! Scissors beats paper.';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore +=1;
        return 'You lose! Rock beats scissors.';
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore +=1;
        return 'You win! Rock beats scissors.';
    }
}
/*
const playerSelection = "rock";
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
*/

//if tie replay game


//game
function game () {
    while (playerScore < 5 && computerScore < 5) {
        playerChoice = prompt('Enter your choice:').toLowerCase();
        console.log(playerChoice);
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        console.log(playRound(playerChoice, computerChoice));
        console.log('Player score:', playerScore);
        console.log('Computer score:', computerScore);
    }
    if (playerScore == 5) {
        return 'You won the game!';
    }
    else {
        return 'Sorry, the computer won the game';
    }
}

console.log(game());
//get user input


//call functions and log the round