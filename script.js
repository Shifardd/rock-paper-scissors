let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
  let computerChoice = Math.random();
  
  if (computerChoice > 0 && computerChoice <= 0.33) {
    return "rock";
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    return "paper";
  } else if (computerChoice > 0.66 && computerChoice <= 1) {
    return "scissors";
  }
  
}

function getHumanChoice () {
  let humanChoice = prompt("Rock, Paper, Scissors?", '');
  return humanChoice.toLowerCase()
}

function playRound (humanChoice, computerChoice) {
  console.log(`Human: ${humanChoice} \nComputer: ${computerChoice}`);
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log(`Tie! You are both ${computerChoice}`);
    } else if (computerChoice == "paper") {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (computerChoice == "scissors") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (computerChoice == "paper") {
      console.log(`Tie! You are both ${computerChoice}`);
    } else if (computerChoice == "scissors") {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } 
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (computerChoice == "paper") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (computerChoice == "scissors") {
      console.log(`Tie! You are both ${computerChoice}`);
    } 
  }
  console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);
}

function playGame () {
  let gameRounds = 5;

  while (gameRounds != 0) {
    playRound(getHumanChoice(), getComputerChoice());
    gameRounds--;
  }
  if (humanScore > computerScore) {
    console.log(`You Win the Game! The score is ${humanScore} - ${computerScore}, in favor of you.`);
  } else if (humanScore < computerScore) {
    console.log(`You Lose the Game! The score is ${computerScore} - ${humanScore}, in favor of computer.`);
  } else if (humanScore == computerScore) {
    console.log(`The game is tied! The score is ${computerScore} - ${humanScore}, in favor of none.`);
  }
}

 playGame()


