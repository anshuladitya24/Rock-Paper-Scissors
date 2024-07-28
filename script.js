let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.random() * 100;
  if (choice <= 33.33) return choices[0];
  else if (choice <= 66.66) return choices[1];
  else return choices[2];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === "rock" && computerChoice === "paper") {
    result = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = "You win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result = "You lose! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = "You win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = "You win! Scissors beats Paper";
    humanScore++;
  } else if (humanChoice === computerChoice) {
    result = `It's a tie! You both chose ${humanChoice}`;
  }

  resultsDiv.textContent = result;
  scoreDiv.textContent = `Your Score: ${humanScore} - Computer's Score: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? "You won the game!" : "You lost the game!";
    resultsDiv.textContent = winner;
    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `Your Score: ${humanScore} - Computer's Score: ${computerScore}`;
  }
}
