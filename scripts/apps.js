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
// let gameMode = localStorage.getItem("gameMode");
let roundNumber = 1;
let player1Wins = 0;
let player2Wins = 0;
let roundsPlayed = 0;
const targetWins = {
  1: 1,
  3: 3,
  5: 4,
  7: 4,
};
function resetGame() {
  player1Wins = 0;
  player2Wins = 0;
  roundsPlayed = 0;
}


function setGameMode(mode) {
  currentMode = mode;
  resetGame();
  console.log(`Game mode set to ${mode} wins.`);
}


resultText.textContent = `Round Number: ${roundNumber}`;

let roundNum = document.getElementById("roundNum");

let oneRound1P = document.getElementById("oneRound1P");
if (oneRound1P) {
  oneRound1P.addEventListener("click", function () {
    console.log("Click event triggered!");
    console.log(`Current Game Mode: ${gameMode}`);
    localStorage.setItem("gameMode", "OneRound");
  });
}
let oneRound2P = document.getElementById("oneRound2P");
if (oneRound2P) {
  oneRound2P.addEventListener("click", function () {
    console.log("Click event triggered!");
    console.log(`Current Game Mode: ${gameMode}`);
    localStorage.setItem("gameMode", "OneRound");
  });
}

let bestOf51P = document.getElementById("bestOf51P");
if (bestOf51P) {
  bestOf51P.addEventListener("click", function () {
    localStorage.setItem("gameMode", "BestOf5");
  });
}
let bestOf52P = document.getElementById("bestOf52P");
if (bestOf52P) {
  bestOf52P.addEventListener("click", function () {
    localStorage.setItem("gameMode", "BestOf5");
  });
}

let bestOf71P = document.getElementById("bestOf71P");
if (bestOf71P) {
  bestOf71P.addEventListener("click", function () {
    localStorage.setItem("gameMode", "BestOf7");
  });
}
let bestOf72P = document.getElementById("bestOf72P");
if (bestOf72P) {
  bestOf72P.addEventListener("click", function () {
    localStorage.setItem("gameMode", "BestOf7");
  });
}
if (roundNum) {
  roundNum.textContent = `Game Counter: ${roundNumber}`;
}
function determineWinner(player1Choice, player2Choice) {
  if (
    (player1Choice === "rock" &&
      (player2Choice === "scissors" || player2Choice === "lizard")) ||
    (player1Choice === "paper" &&
      (player2Choice === "rock" || player2Choice === "spock")) ||
    (player1Choice === "scissors" &&
      (player2Choice === "paper" || player2Choice === "lizard")) ||
    (player1Choice === "lizard" &&
      (player2Choice === "spock" || player2Choice === "paper")) ||
    (player1Choice === "spock" &&
      (player2Choice === "rock" || player2Choice === "scissors"))
  ) {
    return "Player 1 wins!";
  } else if (player1Choice === player2Choice) {
    return "It's a tie!";
  } else {
    return "Player 2 wins!";
  }
}

playGame();


function playGame() {
  const player1Choice = document.getElementById("player1").value;
  const player2Choice = document.getElementById("player2").value;

  const result = determineWinner(player1Choice, player2Choice);
  console.log(`Player 1 chose: ${player1Choice}`);
  console.log(`Player 2 chose: ${player2Choice}`);
  console.log(result);
  if (result.includes("Player 1")) {
    player1Wins++;
  } else if (result.includes("Player 2")) {
    player2Wins++;
  }

  roundsPlayed++;

  if (
    player1Wins === targetWins[roundsPlayed] ||
    player2Wins === targetWins[roundsPlayed]
  ) {
    // console.log(`Game over! ${result}`);
  } else {
    console.log(
      `Current score: Player 1 - ${player1Wins}, Player 2 - ${player2Wins}`
    );
  }
}

function isGameOver(gameMode) {
  if (gameMode === "OneRound") {
    return true;
  } else if (gameMode === "BestOf5") {
    return (playerScore === 3 && computerScore < 3) || (computerScore === 3 && playerScore < 3);
  } else if (gameMode === "BestOf7") {
    return (playerScore === 4 && computerScore < 4) || (computerScore === 4 && playerScore < 4);
  } else {
    return false;
  }
};

let playerText = document.getElementById("playerText");
playerText.textContent = `Player Score: ${playerText}`;

let computerText = document.getElementById("computerText");
computerText.textContent = `CPU Score: ${computerText}`;

async function getComputerChoice() {
  const apiUrl = "https://rpslsapi.azurewebsites.net/RPSLS";
  try {
    const response = await fetch(apiUrl);
    const data = await response.text();
    let computerChoice = data;
    return computerChoice;
  } catch (error) {
    console.error("Error fetching computer choice:", error);
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

function determineWinnerWithCPU(userChoice, computerChoice) {
  if (
    (userChoice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (userChoice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (userChoice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (userChoice === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (userChoice === "spock" &&
      (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    return "Player 1 wins!";
  } else if (userChoice === computerChoice) {
    return "It's a tie!";
  } else {
    return "Player 2 wins!";
  }
}

async function playGameTwo(userChoice) {
  const computerChoice = await getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinnerWithCPU(playerText, computerText));
}