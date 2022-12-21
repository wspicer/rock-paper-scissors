const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let playerSelection = playerPrompt();
const computerSelection = getComputerChoice();

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
        return "Computer Wins this round";
    } else if (playerSelection === paper && computerSelection === scissors) {
        return "Computer Wins this round";
    } else if (playerSelection === scissors && computerSelection === rock) {
        return "Computer Wins this round";
    } else if (playerSelection === rock && computerSelection === scissors) {
        return "You Win this round";
    } else if (playerSelection === paper && computerSelection === rock) {
        return "You Win this round";
    } else if (playerSelection === scissors && computerSelection === paper) {
        return "You Win this round";
    }
}


function playerPrompt () {
    let promptQuestion = prompt("Rock, paper, or Scissors? Crush, crinkle, snip if you will");
    if (promptQuestion.toLowerCase() === "rock") {
        return rock;
    } else if (promptQuestion.toLowerCase() === "paper") {
        return paper;
    } else if (promptQuestion.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        promptQuestion;
    }
}
