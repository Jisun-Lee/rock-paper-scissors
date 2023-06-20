let playerSelection = '';
let computerSelection = '';
let playerTally = 0; 
let computerTally = 0;
let tieTally = 0;

let buttons = document.querySelectorAll('.button');
console.log(buttons);
const buttonContainer = document.querySelector('.buttonContainer');
const statusBox = document.querySelector('.statusBox');
const round = document.querySelector('.round');
const gameOver = document.querySelector('.gameOver');

const roundResults = document.createElement('div');
const tally = document.createElement('div');
const resultGame = document.createElement('div');
const resetButton = document.createElement('button');

round.appendChild(roundResults);
round.appendChild(tally);
gameOver.appendChild(resultGame);
gameOver.appendChild(resetButton);

//creates invisible reset button for later, when the game ends
gameOver.style.display = 'none';
resetButton.textContent = 'Wanna try again?';

//uses node list for each button, runs game functions
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector('img');
      playerSelection = img.alt;
      playRound(img.alt);
      if (playerTally === 5 || computerTally === 5) {
        gameStatus();
      }
    });
  });

function playRound(playerSelection) {
    computerSelection = getComputerSelection();   
    if (playerTally >= 5 || computerTally >= 5) {
        playerTally = 0;
        computerTally = 0;
        statusBox.style.display = 'none';
    } else if 
        ((playerSelection == 'rock') && (computerSelection == 'scissors') ||
        (playerSelection == 'paper') && (computerSelection == 'rock') ||
        (playerSelection == 'scissors') && (computerSelection == 'paper')) 
        {
            statusBox.style.display = 'block';
            playerTally += 1;
            roundResults.textContent = 
            `You win! ${capitalize(playerSelection)} beats 
            ${computerSelection}.`;
    } else if 
        ((playerSelection == 'rock') && (computerSelection == 'paper') ||
        (playerSelection == 'paper') && (computerSelection == 'scissors') ||
        (playerSelection == 'scissors') && (computerSelection == 'rock')) 
        {
            statusBox.style.display = 'block';
            computerTally += 1;
            roundResults.textContent = 
            `Awwww, you lose. ${capitalize(computerSelection)} beats 
            ${playerSelection}.`;
    } else if (playerSelection === computerSelection) {
        statusBox.style.display = 'block';
        tieTally += 1;
        roundResults.textContent = 
        `Tie! Try again. Deep breath, you can do this.`;
    }
    tally.textContent = 
        `You: ${playerTally} Computer: ${computerTally} Tie: ${tieTally}`;
}  

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

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function gameStatus() {
    if (playerTally === 5) {
        statusMsg = 
        'You won! Maybe there is hope for humanity, after all.';
        gameOver.style.display = 'block';
        gameEnd();
    } else if (computerTally === 5) {
        statusMsg = 
        'It is crushing to have to tell you this, but you have lost to random chance.';
        gameOver.style.display = 'block';
        gameEnd();
    } else {
        statusMsg = 
        'Keep going! You got this.';
    }
    resultGame.textContent = statusMsg;
}

function gameEnd() {
    resetButton.addEventListener('click', function() {
        playerTally = 0;
        computerTally = 0;

        statusBox.style.display = 'none';
    }, { once: true });

}