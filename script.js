console.log("Hello, Player!");

function getComputerChoice() {
    let random = Math.random();
    let choice = Number(random * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}