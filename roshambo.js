const rockButton = document.querySelector('.btn-rock');
const paperButton = document.querySelector('.btn-paper');
const scissorsButton = document.querySelector('.btn-scissors');
const div = document.querySelector('.results');
const para = document.createElement('p');
para.textContent = '';

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
        para.textContent = `You tied! Both played ${ps}`;
        return 0;
    } else if (ps === 'rock' && cs === 'paper'){
        para.textContent = `You lose! ${cs} beats ${ps}`;
        return -1;
    } else if (ps === 'paper' && cs === 'scissors'){
        para.textContent = `You lose! ${cs} beats ${ps}`;
        return -1;
    } else if (ps === 'scissors' && cs === 'rock'){
        para.textContent = `You lose! ${cs} beats ${ps}`;
        return -1;
    } else if (ps === 'rock' && cs === 'scissors'){
        para.textContent = `You won! ${ps} beats ${cs}`;
        return 1;
    } else if (ps === 'paper' && cs === 'rock'){
        para.textContent = `You won! ${ps} beats ${cs}`;
        return 1;
    } else if (ps === 'scissors' && cs === 'paper'){
        para.textContent = `You won! ${ps} beats ${cs}`;
        return 1;
    } else {
        para.textContent = "ERROR!";
        return 0;
    }
}

function game() {
    let playerSelection;
    let computerSelection;
    let score = 0;
    for (i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
        computerSelection = getComputerChoice();
        score += playRound(playerSelection,computerSelection);
    }
    if (score === 0){
        console.log("Both player and computer tied!");
    } else if (score > 0){
        console.log("Player won!");
    } else if (score < 0) {
        console.log("Computer won!");
    } else {
        console.log("Error!");
    }
}

rockButton.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('Rock', computerSelection);
});
paperButton.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('Paper', computerSelection);
});
scissorsButton.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound('Scissors', computerSelection);
});

div.appendChild(para);
//game();