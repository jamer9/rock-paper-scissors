
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
    }  
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 'You lose! Rock beats paper.';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return 'You win! Scissors beats paper.';
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return 'You lose! Scissors beats paper.';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return 'You lose! Rock beats scissors.';
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return 'You win! Rock beats scissors.';
    }
}

const playerSelection = "rock";
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


//if tie replay game

//get user input

//call functions and log the round