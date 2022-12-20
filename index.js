let rock = "rock";
let paper = "paper";
let scissors = "scissors";
const playerSelection = "rock";

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1){
        return rock;
    } else if (choice === 2) {
        return paper;
        
    } else {
        return scissors;
    }
    
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw. Try again";
    } else if (playerSelection === rock && computerSelection === paper) {
        return "Computer Wins!";
    } else if (playerSelection === paper && computerSelection === scissors) {
        return "Computer Wins!";
    } else if (playerSelection === scissors && computerSelection === rock) {
        return "Computer Wins!";
    } else if (playerSelection === rock && computerSelection === scissors) {
        return "You Win";
    } else if (playerSelection === paper && computerSelection === rock) {
        return "You Win";
    } else if (playerSelection === scissors && computerSelection === paper) {
        return "You Win";
    }
}