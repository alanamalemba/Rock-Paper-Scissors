//DOM MANIPULATION AND EVENTS
const start = document.createElement("button");
start.textContent = "START";

const choicebox = document.querySelector("#choices");
choicebox.appendChild(start);
start.addEventListener("click", () => {
  choicebox.removeChild(start);

  choicebox.appendChild(rock);
  choicebox.appendChild(paper);
  choicebox.appendChild(scissors);
});

//choices

const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.classList.add("rock");

const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.classList.add("paper");

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
scissors.classList.add("scissors");

const chosen = document.createElement("div");

//round results

const resultsbox = document.querySelector("#results");
const roundResults = document.createElement("span");
resultsbox.appendChild(chosen);
resultsbox.appendChild(roundResults);

//score
const score = document.createElement("span");
resultsbox.appendChild(score);

//winner
const winner = document.createElement("div");

//LOGIC BEHIND IT

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

//Event listeners

rock.addEventListener("click", () => {
  playerChoice = "rock";
  computerChoice = getComputerChoice();
  showChoices();
  showResults();
  showScore();
});

paper.addEventListener("click", () => {
  playerChoice = "paper";
  computerChoice = getComputerChoice();
  showChoices();
  showResults();
  showScore();
});

scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  computerChoice = getComputerChoice();
  showChoices();
  showResults();
  showScore();
});

function showScore() {
  score.textContent =
    " ==>Player: " + playerScore + ", Computer: " + computerScore;
  if (playerScore == 5 || computerScore == 5) {
    if (computerScore > playerScore) {
      winner.textContent = "YOU LOSE";
    } else {
      winner.textContent = "YOU WIN";
    }
    choicebox.appendChild(winner);
    winner.style.cssText = "background-color: blue;color: yellow";
  }
}

function showChoices() {
  chosen.textContent =
    "Player: " + playerChoice + " vs Computer: " + computerChoice;
}

function showResults() {
  if (computerChoice == playerChoice) {
    roundResults.textContent = "A Tie ! You both chose " + computerChoice;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    roundResults.textContent = "Lose...Paper beats rock";
    computerScore++;
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    roundResults.textContent = "Win...rock beats scissors";
    playerScore++;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    roundResults.textContent = "Win...paper beats rock";
    playerScore++;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    roundResults.textContent = "Lose...scissor beats rock";
    computerScore++;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    roundResults.textContent = "Lose...rock beats scissors";
    computerScore++;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    roundResults.textContent = "Win...scisscors beats rock";
    playerScore++;
  }
}
