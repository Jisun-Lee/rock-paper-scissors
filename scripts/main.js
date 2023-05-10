

/*
function getComputerChoice() {
    randomly returns 'Rock', 'Paper', or 'Scissors';
    computerSelection;
}

function playRound(playerSelection, computerSelection) {
    make everything case insensitive;
    compares playerSelection to computerSelection;
    if player loses, 
        'You lose! ${computerSelection} beats ${playerSelection}';
}

test playRound by:
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (initialize i, allow 5 times, i++) {
        playRound(playerSelection, computerSelection)
        tallies player v computer win totals, reports winner at end
    }
}
*/

let playerSelection;
let computerSelection;
let roundOutcome = 0;

function playRound(playerSelection, computerSelection) {
    let playerStatus;
    let computerStatus;
    let winMsg = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}. Time for a victory lap.`;
    let loseMsg = `Awwww, you lose. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}. Hope springs eternal, though.`
    let tieMsg = `Tie! Try again. Deep breath, you can do this.`
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log(tieMsg);
        roundOutcome = 0;
    } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection.toLowerCase() == 'scissors')) {
        console.log(winMsg);
        roundOutcome = 1;
    } else if ((playerSelection.toLowerCase() == 'rock') && (computerSelection.toLowerCase() == 'paper')) {
        console.log(loseMsg);
        roundOutcome = 0;
    } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection.toLowerCase() == 'scissors')) {
        console.log(loseMsg);
        roundOutcome = 0;
    } else if ((playerSelection.toLowerCase() == 'paper') && (computerSelection.toLowerCase() == 'rock')) {
        console.log(winMsg);
        roundOutcome = 1;
    } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection.toLowerCase() == 'paper')) {
        console.log(winMsg);
        roundOutcome = 1;
    } else if ((playerSelection.toLowerCase() == 'scissors') && (computerSelection.toLowerCase() == 'rock')) {
        console.log(loseMsg);
        roundOutcome = 0;
    } else {
        console.log('Check your spelling, eh?');
    }

}   

function game() {
    let tally = 0; //variable that i'll use to show how many rounds have been played and counted towards the 5
    for (let i = 0; i <= 5; i++) {

    }
}



playRound('rorickck', 'rock');


