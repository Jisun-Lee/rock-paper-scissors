let playerSelection = '';
let computerSelection = '';
let playerTally = 0; 
let computerTally = 0;

const buttonContainer = document.querySelector('.buttonContainer');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');

rock.onclick = () => playGame('rock');
paper.onclick = () => playGame('paper');
scissors.onclick = () => playGame('scissors');



/*function getInput() {
    let input = prompt("Type your try here:", "rock, paper, scissors");
    return playerSelection = input.toLowerCase();
}*/

function playGame(playerSelection) {
    for (let counter = 5; counter >= 0; counter--) {
        playRound(playerSelection);
        if (playerSelection == computerSelection || roundStatus == 'typo') {
            counter++;
        } else if (playerTally == 3) {
            console.log(
                'You win the entire game! Maybe there is hope for humanity, after all.');
            break;
        } else if (computerTally == 2 && playerTally == 2) {
            console.log(
                'The suspense...! Who will win best of 5 rounds?!');
        } else if (computerTally == 3) {
            console.log(
                'It is crushing to have to tell you this, but you have lost to random chance.');
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
        `You win! ${playerSelection.charAt(0).toUpperCase() + 
            playerSelection.slice(1)} beats ${computerSelection}. 
            Time for a victory lap.`;
    let loseMsg = 
        `Awwww, you lose. ${computerSelection.charAt(0).toUpperCase() + 
            computerSelection.slice(1)} beats ${playerSelection}.`;
    let tieMsg = 
        `Tie! Try again. Deep breath, you can do this.`;
        if (playerSelection == computerSelection) {
            roundStatus = tieMsg;
        } else if 
            ((playerSelection == 'rock') && (computerSelection == 'scissors') ||
            (playerSelection == 'paper') && (computerSelection == 'rock') ||
            (playerSelection == 'scissors') && (computerSelection == 'paper')) {
                roundStatus = winMsg;
                playerTally += 1;
        } else if 
            ((playerSelection == 'rock') && (computerSelection == 'paper') ||
            (playerSelection == 'paper') && (computerSelection == 'scissors') ||
            (playerSelection == 'scissors') && (computerSelection == 'rock')) {
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