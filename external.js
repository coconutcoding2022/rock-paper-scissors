let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ("You have tied");
} else if (playerSelection === 'rock' && computerSelection === 'paper') { 
  computerScore++;
    return ("You lose, paper beats rock")
} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
  playerScore++;
    return ("You win, rock beats scissors")
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
  computerScore++;
    return ("You lose, scissors beats paper")
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
  playerScore++;
    return ("You win, paper beats rock")
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
  computerScore++;
    return ("You lose, rock beats scissors")
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
  playerScore++;
    return ("You win, scissors beats paper")

}
}



function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    return "You beat the computer"
  } else if (playerScore < computerScore) {
    return "You lose the computer wins"
  } else {
    return "You tied with the computer"
  }
}

console.log(game())