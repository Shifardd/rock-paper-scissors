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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
 


