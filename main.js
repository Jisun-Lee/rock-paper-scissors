

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
let playerSelection = '';
let computerSelection = '';
let playerTally = 0; //tally of player wins
let computerTally = 0;

function getInput() {
    let input = prompt("Type your try here:", "rock, paper, scissors");
    //playerSelection = document.getElementById("playerInput").value.toLowerCase();
    return playerSelection = input.toLowerCase();
}

function playGame() {
    for (let counter = 5; counter >= 0; counter--) {
        getInput();
        playRound(playerSelection);
        if (playerSelection == computerSelection || roundStatus == 'typo') {
            counter++;
        } else if (playerTally == 3) {
            console.log('You win the entire game! Maybe there is hope for humanity, after all.');
            break;
        } else if (computerTally == 2 && playerTally == 2) {
            console.log('The suspense...! Who will win best of 5 rounds?!');
        } else if (computerTally == 3) {
            console.log('It is crushing to have to tell you this, but you have lost to random chance.');
            break;
        } else {
            console.log('Keep going!');
        //document.getElementById("gameStatus").innerHTML = 
        //    `Human victories: ${playerTally}
        //    Computer victories: ${computerTally}
        //    Total tries left: ` + (counter - 1);
        }
        console.log(`Human victories: ${playerTally}`);
        console.log(`Computer victories: ${computerTally}`);
        console.log(`Total tries left: ` + (counter - 1));
        //function that returns new playerSelection value
    }
}
        
function getNewTry () {
    const input = document.getElementById("input");
    play.addEventListener("click", () => {
        return playerSelection = input;
    });
    console.log(playerSelection);
}




function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    let winMsg = 
        `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}. Time for a victory lap.`;
    let loseMsg = 
        `Awwww, you lose. ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
    let tieMsg = 
        `Tie! Try again. Deep breath, you can do this.`;
        if (playerSelection == computerSelection) {
            roundStatus = tieMsg;
        } else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
            roundStatus = winMsg;
            playerTally += 1;
        } else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
            roundStatus = loseMsg;
            computerTally += 1;
        } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
            roundStatus = loseMsg;
            computerTally += 1;
        } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
            roundStatus = winMsg;
            playerTally += 1;
        } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
            roundStatus = winMsg;
            playerTally += 1;
        } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
            roundStatus = loseMsg;
            computerTally += 1;
        } else {
            roundStatus = 'typo';
            console.log('Check your spelling, eh?');
        }
    console.log(roundStatus);
    return roundStatus;
}  

function getComputerChoice() {
    let rollDice = Math.random();
    if (rollDice <= 0.3333333333333333) {
        return computerSelection = 'rock';
    } else if (rollDice > 0.3333333333333333 && rollDice <= 0.6666666666666666) {
        return computerSelection = 'paper';
    } else {
        return computerSelection = 'scissors';
    }
} 


//console.log(playerSelection);

//console.log(roundStatus, roundOutcome);
//console.log('Total tries left to win: ' + (5 - roundOutcome));
