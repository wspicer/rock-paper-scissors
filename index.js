let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    if (choice === 1){
        console.log(rock);
    } else if (choice === 2) {
        console.log(paper);
        
    } else {
        console.log(scissors);
    }
    
}