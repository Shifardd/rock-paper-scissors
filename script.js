let humanScore = 0;
let computerScore = 0;

let button = document.querySelectorAll('button');
let stats = document.querySelector('.status');

let choice = document.createElement('h2');
let infoStatus = document.createElement('p');
let infoScore = document.createElement('p');

button.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let humanChoice = e.target.className;
    playRound(humanChoice, getComputerChoice());
  })
})

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

function playRound (humanChoice, computerChoice) {
  if (humanScore == 5 || computerScore == 5) {
    for (let i = 0; i < button.length; i++) {
      button[i].disabled = true;
    }
    if (humanScore == 5) {
      stats.textContent = `Human Win! - Computer Lost!`;
    } else if (computerScore == 5) {
      stats.textContent = `Human Lost! - Computer Win!`;
    }
    stats.removeChild(choice);
    stats.removeChild(infoStatus);
    stats.removeChild(infoScore);
  }

  choice.textContent = `Human: ${humanChoice} \nComputer: ${computerChoice}`;

  if (humanScore <= 5 && computerScore <= 5) {
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        infoStatus.textContent = `Tie! You are both ${computerChoice}`;
      } else if (computerChoice == "paper") {
        infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
      } else if (computerChoice == "scissors") {
        infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
      }
    } else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
      } else if (computerChoice == "paper") {
        infoStatus.textContent = `Tie! You are both ${computerChoice}`;
      } else if (computerChoice == "scissors") {
        infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
      } 
    } else if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
      } else if (computerChoice == "paper") {
        infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
      } else if (computerChoice == "scissors") {
        infoStatus.textContent = `Tie! You are both ${computerChoice}`;
      } 
    }
    infoScore.textContent = `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;

    stats.appendChild(choice);
    stats.appendChild(infoStatus);
    stats.appendChild(infoScore);
  }
}





