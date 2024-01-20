function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var xb = document.getElementById("myHidden");
// console.log(xb.className.includes("d-none"));
const hid = document.getElementById("hid");

function myFunctionHidden() {
  // if (window.getComputedStyle(xb).display === "none") {
  //   x.style.display = "block";
  // }
  if (xb.className.includes("d-none")) {
    xb.classList.remove("d-none");
  }
}

const menu = document.getElementById("menu");

function HomeMenu() {
  if (menu.class.remove("AllForMenu", "d-none")) {
    menu.classList.remove("AllForMenu");
  }
}
function gameMode() {
  // if()
}

// document.getElementById("okButton").addEventListener(
//   "click",
//   () => {
//     document.getElementById("menu").hidden = true;
//     document.getElementById("awesome").hidden = false;
//   },
//   false,
// );
//   function hid(){
//     if(hid.classList.display){

//     }
//   }

// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let player1Choice;
let player2Choice;
let userInput;
let roundNumber = 1 ;
let player1Wins = 0;
let player2Wins = 0;
let roundsPlayed = 0;
const targetWins = {
  1: 1,
  3: 3,
  5: 4,
  7: 4,
};


let roundNum = document.getElementById("roundNum");
if (roundNum) {
  roundNum.textContent = `Game Counter: ${roundNumber}`;
}
function determineWinner(player1Choice, player2Choice) {
  if (
    (player1Choice === 'rock' && (player2Choice === 'scissors' || player2Choice === 'lizard')) ||
    (player1Choice === 'paper' && (player2Choice === 'rock' || player2Choice === 'spock')) ||
    (player1Choice === 'scissors' && (player2Choice === 'paper' || player2Choice === 'lizard')) ||
    (player1Choice === 'lizard' && (player2Choice === 'spock' || player2Choice === 'paper')) ||
    (player1Choice === 'spock' && (player2Choice === 'rock' || player2Choice === 'scissors'))
  ) {
    return 'Player 1 wins!';
  } else if (player1Choice === player2Choice) {
    return 'It\'s a tie!';
  } else {
    return 'Player 2 wins!';
  }
}

function playGame() {
  const player1Choice = document.getElementById('player1').value;
  const player2Choice = document.getElementById('player2').value;

  const result = determineWinner(player1Choice, player2Choice);
  console.log(`Player 1 chose: ${player1Choice}`);
  console.log(`Player 2 chose: ${player2Choice}`);
  console.log(result);
  if (result.includes('Player 1')) {
    player1Wins++;
  } else if (result.includes('Player 2')) {
    player2Wins++;
  }

  roundsPlayed++;

  if (player1Wins === targetWins[roundsPlayed] || player2Wins === targetWins[roundsPlayed]) {
    console.log(`Game over! ${result}`);
    resetGame();
  } else {
    console.log(`Current score: Player 1 - ${player1Wins}, Player 2 - ${player2Wins}`);
  }

}

function resetGame() {
  player1Wins = 0;
  player2Wins = 0;
  roundsPlayed = 0;
}



async function getComputerChoice() {
  const apiUrl = 'https://rpslsapi.azurewebsites.net/RPSLS';
  try {
    const response = await fetch(apiUrl);
    const data = await response.text();
    const computerChoice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return computerChoice[data];
  } catch (error) {
    console.error('Error fetching computer choice:', error);
  }
}


function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'lizard' || userInput === 'spock') {
    return userInput;
  } else {
    console.log('Invalid choice. Please choose rock, paper, scissors, lizard, or spock.');
  }
}



async function playGame(userChoice) {
  const computerChoice =  await getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));

}

// const userChoice = getUserChoice('rock');
// playGame(userChoice);




function checkWinner(player, computer) {
  const computerChoice = getComputerChoice();

  if (player === computer) {
    return "It's a tie!";
  }else if (
    (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
    (player === "paper" && (computer === "rock" || computer === "spock")) ||
    (player === "scissors" &&
      (computer === "paper" || computer === "lizard")) ||
    (player === "lizard" && (computer === "spock" || computer === "paper")) ||
    (player === "spock" && (computer === "rock" || computer === "scissors"))
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

