const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let computerWins = 0;
let playerWins = 0


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
        computerWins += 1;
    } else if (playerSelection === paper && computerSelection === scissors) {
        computerWins += 1;
    } else if (playerSelection === scissors && computerSelection === rock) {
        computerWins += 1;
    } else if (playerSelection === rock && computerSelection === scissors) {
        playerWins += 1;
    } else if (playerSelection === paper && computerSelection === rock) {
        playerWins += 1;
    } else if (playerSelection === scissors && computerSelection === paper) {
        playerWins += 1;
    }
}


function playerPrompt () {
    let promptQuestion = prompt("Rock, paper, or Scissors? Crush, crinkle, snip if you will");
    if (promptQuestion.toLowerCase() === "rock") {
        return rock;
    } else if (promptQuestion.toLowerCase() === "paper") {
        return paper;
    } else if (promptQuestion.toLowerCase() === "scissors") {
        return scissors;
    } else {
        promptQuestion;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPrompt();
        let computerSelection = getComputerChoice();
        //console.log(playerPrompt());
        //console.log(getComputerChoice());
        console.log(playRound(playerSelection,computerSelection));
        console.log(computerWins);
        console.log(playerWins);
     }
     if (computerWins > playerWins) {
        console.log("Computer Wins and had " + computerWins + " wins, and you only had " + playerWins + " wins");
     } else if (computerWins < playerWins) {
        console.log("You Win and had " + playerWins + " and the computer only had " + computerWins + " wins");
     } else if (computerWins === playerWins) {
        console.log("It's a draw!");
     }
}