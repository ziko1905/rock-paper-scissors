console.log("Hello, Player!");

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