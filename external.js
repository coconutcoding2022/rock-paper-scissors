let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    randomChoice = choices[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText = 'You have tied';
        results.appendChild(p);
        return 'You have tied';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++; 
        const p = document.createElement('p');
        p.innerText = 'You lose, rock loses to paper!';
        results.appendChild(p);
        return 'You lose, rock loses to paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win, rock beats scissors!';
        results.appendChild(p);
        return 'You win, rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win, paper beats rock!';
        results.appendChild(p);
        return 'You win, paper beats rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        const p = document.createElement('p');
        p.innerText = 'You lose, paper loses to scissors!';
        results.appendChild(p);
        return 'You lose, paper loses to scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        const p = document.createElement('p');
        p.innerText = 'You lose, scissors loses to rock!';
        results.appendChild(p);
        return 'You lose, scissors loses to rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win, scissors beats paper!';
        results.appendChild(p);
        return 'You win, scissors beats paper!';
    }
}

const body = document.querySelector('body')
const divButtons = document.createElement('div');
body.appendChild(divButtons);
divButtons.classList.add('container');
const container = document.querySelector('.container');

const divResults = document.createElement('div');
body.appendChild(divResults);
divResults.classList.add('results')
const results = document.querySelector('.results');


function runningScore() {
    const runningScore = document.createElement('div');
    runningScore.innerText = `Player score: ${playerScore} Computer Score: ${compScore}`;
    results.appendChild(runningScore);
}

function declareWinner() {
    if (playerScore === 5 && compScore < playerScore) {
        const winner = document.createElement('div');
        winner.innerText = 'You have reached 5 points first!';
        results.appendChild(winner);
        playerScore = 0;
        compScore = 0;
    } else if (compScore === 5 && playerScore < compScore) {
        const winner = document.createElement('div');
        winner.innerText = 'The computer has reached 5 points first!';
        results.appendChild(winner);
        playerScore = 0;
        compScore = 0;
    }
}

const rockButton = document.createElement('button');
rockButton.innerText = 'Rock';
container.appendChild(rockButton);
rockButton.addEventListener('click', function() {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(runningScore());
    console.log(declareWinner());

});


const paperButton = document.createElement('button');
paperButton.innerText = 'Paper';
container.appendChild(paperButton);
paperButton.addEventListener('click', function() {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(runningScore());
    console.log(declareWinner());
});


const scissorsButton = document.createElement('button');
scissorsButton.innerText = 'Scissors';
container.appendChild(scissorsButton);
scissorsButton.addEventListener('click', function() {
   let playerSelection = 'scissors';
   let computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
   console.log(runningScore());
   console.log(declareWinner());
});

/*function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose your weapon! Rock, paper, or scissors?').toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore} Computer Score: ${compScore}`);
    }
    if (playerScore > compScore) {
        return `You have beat the computer ${playerScore} to ${compScore}`;
    } else if(playerScore < compScore) {
        return `You have lost to the computer ${playerScore} to ${compScore}`;
    } else {
        return `You tied with the computer ${playerScore} to ${compScore}`;
    }
}

console.log(game());
*/