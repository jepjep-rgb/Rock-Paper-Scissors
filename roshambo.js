const rockButton = document.querySelector('.btn-rock');
const paperButton = document.querySelector('.btn-paper');
const scissorsButton = document.querySelector('.btn-scissors');

const div = document.querySelector('.results');
const para = document.createElement('p');
const playerScore = document.createElement('p');
const compScore = document.createElement('p');

playerScore.classList.add('playerScore');
compScore.classList.add('compScore')
para.classList.add('results');


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

function scoringSystem(score) {
    if (score[1] < 5 && score[2] < 5){
        if (score[0] === 1) score[1]++;
        else if (score[0] === -1) score[2]++;
    }
    
    if (score[1] >= 5){
        para.textContent = "Player wins!";
    } else if (score[2] >= 5) {
        para.textContent = "Computer wins!";
    }

    playerScore.textContent = `Player Score: ${score[1]}`;
    compScore.textContent = `Computer Score: ${score[2]}`;

    div.appendChild(playerScore);
    div.appendChild(compScore);
    div.appendChild(para);
    return score;
}

function game() {
    // generalScore = [returnVal, playerVal, compVal]
    let generalScore = [0,0,0];
    rockButton.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        generalScore[0] = playRound('Rock', computerSelection);
        scoringSystem(generalScore);
    });
    paperButton.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        generalScore[0] = playRound('Paper', computerSelection);
        scoringSystem(generalScore);
    });
    scissorsButton.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        generalScore[0] = playRound('Scissors', computerSelection);
        scoringSystem(generalScore);
    });
}

game();