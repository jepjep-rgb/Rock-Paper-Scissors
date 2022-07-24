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