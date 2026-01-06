// Initial scores
let humanScore = 0;
let computerScore = 0;
let gamePoint = 4;
let winnerPoint = 5;


// target elements
let buttonDiv = document.querySelector('.buttons');
let button = document.querySelectorAll('button');
let stats = document.querySelector('.status');

let choice = document.createElement('h2');
let infoStatus = document.createElement('p');
let infoScore = document.createElement('p');



// Listen for button click and call playRound function
button.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let humanChoice = getHumanChoice(e.currentTarget);
    playRound(humanChoice, getComputerChoice());
  })
})

// Get human choice
function getHumanChoice (target) {
  return target.dataset.choice;
}


// Get computer choice
function getComputerChoice () {
  let computerChoice = Math.random();
  const computerOptions = ["rock", "paper", "scissors"];
  if (computerChoice > 0 && computerChoice <= 0.33) {
    return computerOptions[0];
  } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
    return computerOptions[1];
  } else if (computerChoice > 0.66 && computerChoice <= 1) {
    return computerOptions[2];
  }
}

// Function to make this stop when someone gets 5 points
function playRound (humanChoice, computerChoice) {
  if (humanScore < winnerPoint && computerScore < winnerPoint) {
    if (humanChoice == "rock") {
      humanPickRock(humanChoice, computerChoice)
    } else if (humanChoice == "paper") {
      humanPickPaper(humanChoice, computerChoice);
    } else if (humanChoice == "scissors") {
      humanPickScissors(humanChoice, computerChoice)
    }
    choice.textContent = `[Human: ${humanChoice}]  [Computer: ${computerChoice}]`;
    infoScore.textContent = `[Human Score: ${humanScore}]   [Computer Score: ${computerScore}]`;

    humanChoice = '';
    computerChoice = '';
  }
  stats.appendChild(choice);
  stats.appendChild(infoStatus);
  stats.appendChild(infoScore);
}

// Run when Human pick rock
function humanPickRock (humanChoice, computerChoice) {
  if (computerChoice == "rock") {
    infoStatus.textContent = `Tie! You are both ${computerChoice}`;
  } else if (computerChoice == "paper") {
    if (computerScore == gamePoint) {
      computerScore++;
      decide();
    } else {
      infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }
  } else if (computerChoice == "scissors") {
    if (humanScore == gamePoint) {
      humanScore++;
      decide();
    } else {
      infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  }
}

// Run when Human pick paper
function humanPickPaper (humanChoice, computerChoice) {
  if (computerChoice == "rock") {
    if (humanScore == gamePoint) {
      humanScore++;
      decide();
    } else {
      infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  } else if (computerChoice == "paper") {
    infoStatus.textContent = `Tie! You are both ${computerChoice}`;
  } else if (computerChoice == "scissors") {
    if (computerScore == gamePoint) {
      computerScore++;
      decide();
    } else {
      infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }
  } 
}

// Run when Human pick scissors
function humanPickScissors (humanChoice, computerChoice) {
  if (computerChoice == "rock") {
    if (computerScore == gamePoint) {
      computerScore++;
      decide();
    } else {
      infoStatus.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }
  } else if (computerChoice == "paper") {
    if (humanScore == gamePoint) {
      humanScore++;
      decide();
    } else {
      infoStatus.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    }
  } else if (computerChoice == "scissors") {
    infoStatus.textContent = `Tie! You are both ${computerChoice}`;
  } 
}

// Function to decide the winner
function decide () {
    buttonDiv.style.cssText = 'display: none;';
    stats.style.cssText = 'height: 100%; display: flex; justify-content: center; align-items:center;';
    if (humanScore == winnerPoint) {
      stats.textContent = `Human Win! - Computer Lost!`;
      Swal.fire("You Win!!!");
    } else if (computerScore == winnerPoint) {
      stats.textContent = `Human Lost! - Computer Win!`;
      Swal.fire("You Lose!!!");
    }

    let retryBtn = document.createElement('button');
    retryBtn.classList.add("retry-button")
    retryBtn.textContent = 'Retry';
    stats.appendChild(retryBtn);

    retryBtn.addEventListener("click", retryGame);
}

// Function to retry the Game
function retryGame() {
  humanScore = 0
  computerScore = 0
  stats.textContent = '';
  stats.style.cssText = 'height: 200px; display: flex;';
  buttonDiv.style.cssText = 'display: flex;';
}

