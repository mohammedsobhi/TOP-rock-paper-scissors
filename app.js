// pick a random play for the computer
const computerPlay = () => {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
};

// play one round and return the result of this round
const playRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "player won";
  } else if (
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    return "computer won";
  } else if (
    (playerSelection === "scissor" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "rock")
  ) {
    return "tie";
  }
};

// will be invoked at the end of playGame function to check the final score and return the winner
const gameWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) return "player won the game";
  else if (computerScore > playerScore) return "Computer won the game";
  else return "the game is tie";
};

// play a game of 5 rounds
const playGame = () => {
  // initialize player and computer score to 0
  let playerScore = 0;
  let computerScore = 0;

  // for (i = 0; i < 5; i++) {
  // prompt play form the user and convert the player input to lower case to make it case insensitive
  let playerSelection = prompt(
    "choose paper, rock, or scissor: "
  ).toLowerCase();

  //check if the input is valid then start the round otherwise print error
  if (
    playerSelection === "rock" ||
    playerSelection === "scissor" ||
    playerSelection === "paper"
  ) {
    // play a round and store the result in roundResult
    let roundResult = playRound(playerSelection, computerPlay());

    // check winner then print round result and increment score by 1 for the winner
    if (roundResult === "player won") {
      playerScore++;
      console.log(
        `player won this round (player: ${playerScore} - computer: ${computerScore})`
      );
    } else if (roundResult === "computer won") {
      computerScore++;
      console.log(
        `computer won this round (player: ${playerScore} - computer: ${computerScore})`
      );
    } else {
      console.log("tie");
    }
  } else {
    console.log("enter valid option");
    i--;
  }

  // check if score is 3 to stop looping and end the game since it is best of five game
  // if (playerScore >= 3 || computerScore >= 3) break;
  // }

  console.log(gameWinner(playerScore, computerScore));
};

playGame();
