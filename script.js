// Initial scores
let humanScore = 0;
let computerScore = 0;


// target elements
let buttonDiv = document.querySelector('.buttons');
let button = document.querySelectorAll('button');
let stats = document.querySelector('.status');

let choice = document.createElement('h2');
let infoStatus = document.createElement('p');
let infoScore = document.createElement('p');


// Get human choice and call playRound function
button.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let humanChoice = getHumanChoice(e.target);
    playRound(humanChoice, getComputerChoice());
  })
})

function getHumanChoice (target) {
  return target.className;
}


// Get computerChoice
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
  if (humanScore < 5 && computerScore < 5) {
    if (humanChoice == "rock") {
      humanPickRock(humanChoice, computerChoice)
    } else if (humanChoice == "paper") {
      humanPickPaper(humanChoice, computerChoice);
    } else if (humanChoice == "scissors") {
      humanPickScissors(humanChoice, computerChoice)
    }
    choice.textContent = `Human: ${humanChoice} \nComputer: ${computerChoice}`;
    infoScore.textContent = `Human Score: ${humanScore} \nComputer Score: ${computerScore}`;

    humanChoice = '';
    computerChoice = '';
  }
  stats.appendChild(choice);
  stats.appendChild(infoStatus);
  stats.appendChild(infoScore);
}


function humanPickRock (humanChoice, computerChoice) {
  if (computerChoice == "rock") {
    infoStatus.textContent = `Tie! You are both ${computerChoice}`;
  } else if (computerChoice == "paper") {
    if (computerScore == 4) {
      decide();
    } else {
      infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }
  } else if (computerChoice == "scissors") {
    if (humanScore == 4) {
      decide();
    } else {
      infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  }
}

function humanPickPaper (humanChoice, computerChoice) {
  if (computerChoice == "rock") {
    if (humanScore == 4) {
      decide();
    } else {
      infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  } else if (computerChoice == "paper") {
    infoStatus.textContent = `Tie! You are both ${computerChoice}`;
  } else if (computerChoice == "scissors") {
    if (computerScore == 4) {
      decide();
    } else {
      infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }
  } 
}

function humanPickScissors (humanChoice, computerChoice) {
  if (computerChoice == "rock") {
    if (computerScore == 4) {
      decide();
    } else {
      infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }
  } else if (computerChoice == "paper") {
    if (humanScore == 4) {
      decide();
    } else {
      infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  } else if (computerChoice == "scissors") {
    infoStatus.textContent = `Tie! You are both ${computerChoice}`;
  } 
}


function decide () {
    buttonDiv.style.cssText = 'display: none;';
    if (humanScore == 4) {
      stats.textContent = `Human Win! - Computer Lost!`;
      Swal.fire("You Win!!!");
    } else if (computerScore == 4) {
      stats.textContent = `Human Lost! - Computer Win!`;
      Swal.fire("You Lose!!!");
    }

    stats.removeChild(choice);
    stats.removeChild(infoStatus);
    stats.removeChild(infoScore);
}

