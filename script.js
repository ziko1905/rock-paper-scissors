console.log("Hello, Player!");
let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
    console.log("Computer selected: " + computerChoice)

    let winStr = `Congratulations! ${playerChoice} beats ${computerChoice}!`;
    let loseStr = `Aww, ${computerChoice} beats ${playerChoice}!`

    if (computerChoice === playerChoice) {
        console.log(`Its a tie, you both selected ${computerChoice}`);
    } else if (computerChoice === "Rock") {
        if (playerChoice === "Paper") {
            console.log(winStr);
            playerScore++
        } else {
            console.log(loseStr);
            computerScore++
        }
    } else if (computerChoice === "Paper") {
        if (playerChoice === "Scissors") {
            console.log(winStr);
            playerScore++
        } else {
            console.log(loseStr);
            computerScore++
        }
    } else {
        if (playerChoice === "Rock") {
            console.log(winStr);
            playerScore++
        } else {
            console.log(loseStr);
            computerScore++
        }
    }

    // if (confirm("Want to play again?")) {
    //     playRound()
    // }

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
for (x = 0; x < 5; x++) {
    playRound(getComputerChoice(), getPlayerChoice())
}
console.log(`Total score is ${playerScore} for you and ${computerScore} for computer!`)
if (playerScore > computerScore) {
    console.log("Yay, you won overall! Congrats!")
} else if (playerScore < computerScore) {
    console.log("Oh, computer won, better luck next time!")
} else {
    console.log("It's a tie! You might wanna play again to see who will win!")
}
