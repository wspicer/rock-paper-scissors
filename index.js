
// declare rock, paper, scissors variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//create scorekeepers for how many times each competitor has won a round
let computerWins = 0;
let playerWins = 0;

//variables to hold the computer choice and human choice

let playerSelection;
let computerSelection = getComputerChoice();





/*Create a function that plays a round of R,P,S when a button is pressed returning a computer
and player choice and then tallying up the total score for each player. This should include
a check that checks to see what each player's score is, and if it is 5, the game ends and the 
player with 5 points wins (a 1st to 5 game).*/

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw. Try again";
    } else if (playerSelection === rock && computerSelection === paper) {
        computerWins += 1;
        console.log(`You choice ${playerSelection} and the Computer chose ${computerSelection}`);
        isGameOver();
    } else if (playerSelection === paper && computerSelection === scissors) {
        computerWins += 1;
        console.log(`You choice ${playerSelection} and the Computer chose ${computerSelection}`);
        isGameOver();
    } else if (playerSelection === scissors && computerSelection === rock) {
        computerWins += 1;
        console.log(`You choice ${playerSelection} and the Computer chose ${computerSelection}`);
        isGameOver();
    } else if (playerSelection === rock && computerSelection === scissors) {
        playerWins += 1;
        console.log(`You choice ${playerSelection} and the Computer chose ${computerSelection}`);
        isGameOver();
    } else if (playerSelection === paper && computerSelection === rock) {
        playerWins += 1;
        console.log(`You choice ${playerSelection} and the Computer chose ${computerSelection}`);
        isGameOver();
    } else if (playerSelection === scissors && computerSelection === paper) {
        playerWins += 1;
        console.log(`You choice ${playerSelection} and the Computer chose ${computerSelection}`);
        isGameOver();
    };

        
};

//This function will get the computer selection
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1){
        return rock;
    } else if (choice === 2) {
        return paper;
    } else if (choice === 3) {
        return scissors;
    } else {
        return "broken"
    }
    
};

/* This function checks if someone has won*/
function isGameOver() {
        if (playerWins === 5) {
        window.alert('Game over. You win...');
        playerWins = 0;
        computerWins = 0;
    }
    else if (computerWins === 5) {
        window.alert('Game over. I, the Computer, win');
        playerWins = 0;
        computerWins = 0;
    } else {
    
    }
};


//each button has it's listener that will then run the playRound function with the appropriate
//score kept

function rockListen() {rockButton.addEventListener("click", e => {
playerSelection = rock;
computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
playRound(playerSelection,computerSelection);
divPlayerScore.textContent = "Your Score " + playerWins;
divComputerScore.textContent = "Computer Score " + computerWins;
});
};

function paperListen() {paperButton.addEventListener("click", e => {
playerSelection = paper;
computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
playRound(playerSelection,computerSelection);
divPlayerScore.textContent = "Your Score " + playerWins;
divComputerScore.textContent = "Computer Score " + computerWins;
});
};

function scissorsListen() {scissorsButton.addEventListener("click", e => {
playerSelection = scissors;
computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
playRound(playerSelection,computerSelection);
divPlayerScore.textContent = "Your Score " + playerWins;
divComputerScore.textContent = "Computer Score " + computerWins;
})
};