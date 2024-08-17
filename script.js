console.log("Hello World!");

const getComputerChoice = () => {
  const myArray = ["rock", "paper", "scissors"];
  let randomValue = myArray[Math.floor(Math.random() * myArray.length)];
  return randomValue;
};

const getHumanChoice = () => {
  let choice = prompt("Choose rock, paper, or scissors");
  return choice;
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      return `It's a tie! Player: ${humanScore}, Computer: ${computerScore}`;
    }
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      return `You win this round! Player: ${humanScore}, Computer: ${computerScore}`;
    } else {
      computerScore++;
      return `Computer wins this round! Player: ${humanScore}, Computer: ${computerScore}`;
    }
  };

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  console.log(
    `Final Score - Player: ${humanScore}, Computer: ${computerScore}`
  );

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, the computer won the game.");
  } else {
    console.log("It's a tie game!");
  }
};

playGame();
