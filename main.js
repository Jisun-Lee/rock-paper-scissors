let playerSelection = '';
let computerSelection = '';
let playerTally = 0; 
let computerTally = 0;

const buttonContainer = document.querySelector('.buttonContainer');
const result = document.createElement('div');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//puts result into buttonContainer
buttonContainer.appendChild(result);

//adds event listeners to each button
rock.addEventListener("click", () => {
    playRound('rock');
    result.textContent = 
        `${roundStatus}
        player wins: ${playerTally}, computer wins: ${computerTally}`
    });
paper.addEventListener("click", () => {
    playRound('paper');
    result.textContent = 
        `${roundStatus}
        player wins: ${playerTally}, computer wins: ${computerTally}`
    });
scissors.addEventListener("click", () => {
    playRound('scissors');
    result.textContent = 
        `${roundStatus}
        player wins: ${playerTally}, computer wins: ${computerTally}`
    });

function playRound(playerSelection) {
    computerSelection = getComputerSelection();
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
        if 
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
            roundStatus = tieMsg;
        }
    console.log(playerTally, computerTally);
    result.textContent = roundStatus;
    return roundStatus;
}  

//better as a switch statement?
function getComputerSelection() {
    let rollDice = Math.random();
    if (rollDice <= 0.3333333333333333) {
        return computerSelection = 'rock';
    } else if (rollDice > 0.3333333333333333 && rollDice <= 0.6666666666666666) {
        return computerSelection = 'paper';
    } else {
        return computerSelection = 'scissors';
    }
} 

/*function playGame(playerSelection) {
    for (let counter = 5; counter >= 0; counter--) {
        playRound(playerSelection);
        if (playerSelection == computerSelection) {
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
        }
        console.log(`Human victories: ${playerTally}`);
        console.log(`Computer victories: ${computerTally}`);
        console.log(`Total tries left: ` + (counter - 1));
    }
}
*/