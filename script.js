console.log("Hello, Player!");
let playerScore = 0;
let computerScore = 0;

function playRound(event) {
    let computerChoice = getComputerChoice();
    let playerChoice = event.target.textContent;

    console.log("Computer selected: " + computerChoice)

    let winStr = `Congratulations! ${playerChoice} beats ${computerChoice}!`;
    let loseStr = `Aww, ${computerChoice} beats ${playerChoice}!`;

    const resultList = document.querySelector(".result-div")
    const para = document.createElement("p");

    if (computerChoice === playerChoice) {
        playerWins();
    } else if (computerChoice === "Rock") {
        if (playerChoice === "Paper") {
            playerWins(true);
            playerScore++
        } else {
            playerWins(false);
            computerScore++
        }
    } else if (computerChoice === "Paper") {
        if (playerChoice === "Scissors") {
            playerWins(true);
            playerScore++
        } else {
            playerWins(false);
            computerScore++
        }
    } else {
        if (playerChoice === "Rock") {
            playerWins(true);
            playerScore++
        } else {
            playerWins(false);
            computerScore++
        }
    }

    resultList.appendChild(para);


    function playerWins(wins) {
        if (wins === true) para.textContent = winStr;
        else if (wins === false) para.textContent = loseStr;
        else para.textContent = `Its a tie, you both selected ${computerChoice}`;
    }


}

function getComputerChoice() {
    let random = Math.random();
    let choice = Number(random * 2).toFixed();
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function getPlayerChoice () {
    playerChoice = prompt("Rock, Paper or Scissors? What is your choice?");    

    switch (playerChoice.toLocaleLowerCase()) {
        case "rock":
            return "Rock"
        case "paper":
            return "Paper"
        case "scissors":
            return "Scissors"
        default:
            return getPlayerChoice()
    }
}

const buttons = document.querySelector("div.btn-div");

buttons.addEventListener("click", playRound)