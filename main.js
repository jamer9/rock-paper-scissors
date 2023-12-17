
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
        return 'You win! Rock beats paper.';
        playerScore += 1;
    }  
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 'You lose! Rock beats paper.';
        computerScore += 1;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return 'You win! Scissors beats paper.';
        playerScore += 1;
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return 'You lose! Scissors beats paper.';
        computerScore += 1;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return 'You lose! Rock beats scissors.';
        computerScore += 1;
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return 'You win! Rock beats scissors.';
        playerScore += 1;
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
        playerChoice = prompt('Enter you choice:').toLowerCase();
        computerChoice = getComputerChoice();
        //console.log(playerChoice);
        console.log(computerChoice);
        playRound(playerChoice, computerChoice);
    }
    if (playerScore == 5) {
        return 'You won the game!';
    }
    else {
        return 'Sorry, the computer won the game';
    }
}

game();
//get user input


//call functions and log the round