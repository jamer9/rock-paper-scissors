
//function that randomly generates rock, paper, or scissors
function getComputerChoice () {
    let number = Math.floor(Math.random() * 10 + 1) * 3;
    console.log(number);
    let choice;
    if (number <= 10) {
        choice = 'Rock';
    }
    else if (number <= 20) {
        choice = 'Paper';
    }
    else {
        choice = 'Scissors';
    }
    return choice;
}
console.log(getComputerChoice());

//function that compares and decides winner
//if tie replay game

//get user input

//call functions and log the round