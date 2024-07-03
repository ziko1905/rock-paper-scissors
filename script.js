console.log("Hello, Player!");
let playerScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice()

    let winStr = `Congratulations! ${playerChoice} beats ${computerChoice}!`;
    let loseStr = `Aww, ${computerChoice} beats ${playerChoice}!`

    if (computerChoice === playerChoice) {
        console.log(`Its a tie, you both selected ${computerChoice}`);
    } else if (computerChoice === "Rock") {
        if (playerChoice === "Paper") {
            console.log(winStr);
        } else {
            console.log(loseStr);
        }
    } else if (computerChoice === "Paper") {
        if (playerChoice === "Scissors") {
            console.log(winStr);
        } else {
            console.log(loseStr);
        }
    } else {
        if (playerChoice === "Rock") {
            console.log(winStr);
        } else {
            console.log(loseStr);
        }
    }

    console.log(`Total score is ${playerScore} for you and ${computerScore} for computer!`)
    if (confirm("Want to play again!")) {
        playRound()
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
    let playerChoice = null;

    while (!playerChoice) {
        playerChoice = prompt("Rock, Paper or Scissors? What is your choice?");    
    }

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

playRound()