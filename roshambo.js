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
    let generalScore = 0;
    let playerScore = 0;
    let compScore = 0;
    rockButton.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        generalScore = playRound('Rock', computerSelection);
        if (generalScore === 1) playerScore++;
        else if (generalScore === -1) compScore++;
        console.log(`ps${playerScore} cs ${compScore}`);
    });
    paperButton.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        generalScore = playRound('Paper', computerSelection);
        if (generalScore === 1) playerScore++;
        else if (generalScore === -1) compScore++;
        console.log(`ps${playerScore} cs ${compScore}`);
    });
    scissorsButton.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        generalScore = playRound('Scissors', computerSelection);
        if (generalScore === 1) playerScore++;
        else if (generalScore === -1) compScore++;
        console.log(`ps${playerScore} cs ${compScore}`);
    });

    div.appendChild(para);
}

game();