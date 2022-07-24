let rock = 0;
let paper = 0;
let scissors = 0; 

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3);
    if (compChoice === 0){
        console.log("Rock");
        rock++;
    } else if (compChoice === 1) {
        console.log("Paper");
        paper++;
    } else if (compChoice === 2) {
        console.log("Scissors");
        scissors++;
    } else {
        alert("Error");
    }
}

for (i = 0; i < 100; i++){
    getComputerChoice();
}

console.log(rock);
console.log(paper);
console.log(scissors);

function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps === cs){
        return `You tied! Both played ${ps}`;
    } else if (ps === 'rock' && cs === 'paper'){
        return `You lose! ${cs} beats ${ps}`;
    } else if (ps === 'paper' && cs === 'scissors'){
        return `You lose! ${cs} beats ${ps}`;
    } else if (ps === 'scissors' && cs === 'rock'){
        return `You lose! ${cs} beats ${ps}`;
    } else if (ps === 'rock' && cs === 'scissors'){
        return `You won! ${ps} beats ${cs}`;
    } else if (ps === 'paper' && cs === 'rock'){
        return `You won! ${ps} beats ${cs}`;
    } else if (ps === 'scissors' && cs === 'paper'){
        return `You won! ${ps} beats ${cs}`;
    } else {
        return "ERROR!";
    }
}