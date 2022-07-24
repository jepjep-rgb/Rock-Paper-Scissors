function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3);
    if (compChoice === 0){
        return "Rock";
    } else if (compChoice === 1) {
        return "Paper";
    } else if (compChoice === 2) {
        return "Scissors";
    } else {
        alert("Error");
    }
}

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

let playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));