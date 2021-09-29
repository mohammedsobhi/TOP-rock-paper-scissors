// player buttons
const playerButtons = document.querySelectorAll(".player-button");
const playerButtonsContainer = document.querySelector(".player-choices");

// choice display
const playerChoice = document.querySelector("#player_choice");
const computerChoice = document.querySelector("#computer_choice");

// Score
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

// current situation
const playerSituation = document.querySelector("#player_situation");
const computerSituation = document.querySelector("#computer_situation");

// final result
const finalResult = document.querySelector(".final-result-text");

// play again button
const playAgain = document.querySelector("#play_again");

// ===============================================================

// initialize player and computer score to 0
let playerScore = 0;
let computerScore = 0;

// ===============================================================

// return a random play for the computer
const computerPlay = () => {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
};

// play one round then (display the choices and round winner) and (return the result of this round)
const playRound = (playerSelection, computerSelection) => {
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
  if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerSituation.textContent = "Player won";
    computerSituation.textContent = "";
    return "player won";
  } else if (
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    playerSituation.textContent = "";
    computerSituation.textContent = "Computer won";
    return "computer won";
  } else if (
    (playerSelection === "scissor" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "rock")
  ) {
    playerSituation.textContent = "tie";
    computerSituation.textContent = "tie";
    return "tie";
  }
};

const playGame = () => {
  playerButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // get the player selection from the dom
      const playerSelection = e.target.dataset.choice;

      // play a round and store the result in roundResult
      let roundResult = playRound(playerSelection, computerPlay());

      // check winner then increment score for the winner and display current score.
      if (roundResult === "player won") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
      } else if (roundResult === "computer won") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      }

      // check if score is 5 to end the game
      if (playerScore >= 5) {
        finalResult.textContent = "Player won the Game";
        endGame();
      }
      if (computerScore >= 5) {
        finalResult.textContent = "Computer won the Game";
        endGame();
      }
    });
  });
};

playGame();

function endGame() {
  // disable player buttons
  playerButtonsContainer.classList.toggle("muted");
  // enable play again button
  playAgain.classList.toggle("inactive");

  // start new game when play again button clicked
  playAgain.addEventListener("click", startNewGame);
}

function startNewGame() {
  // reset scores
  playerScore = 0;
  computerScore = 0;

  // reset the dom to the initial values
  computerSituation.textContent = "";
  playerSituation.textContent = "";
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  playerChoice.textContent = "";
  computerChoice.textContent = "";
  finalResult.textContent = "";

  // enable player buttons
  playerButtonsContainer.classList.toggle("muted");
  // disable play again button
  playAgain.classList.toggle("inactive");
}
