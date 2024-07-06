console.log("Hello, Player!");
let playerScore = 0;
let computerScore = 0;

function playRound(event) {
    let computerChoice = getComputerChoice();
    let playerChoice = event.target.textContent;

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
    const scorePara = document.createElement("p")

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) scorePara.textContent = "Congrats! You won this round!"
        else scorePara.textContent = "You lost this round! Better luck next time!"

        playerScore = 0;
        computerScore = 0;
    }
    resultList.appendChild(scorePara)

    function playerWins(wins) {
        if (wins === true) para.textContent = winStr;
        else if (wins === false) para.textContent = loseStr;
        else para.textContent = `Its a tie, you both selected ${computerChoice}`;
    }
    console.log(playerScore, computerScore)


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

const buttons = document.querySelector("div.btn-div");

buttons.addEventListener("click", playRound)