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
 
console.log(getComputerChoice());
console.log(getHumanChoice());

