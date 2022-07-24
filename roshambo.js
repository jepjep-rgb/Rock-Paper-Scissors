

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3);
    if (compChoice === 0){
        console.log("Rock");
    } else if (compChoice === 1) {
        console.log("Paper");
    } else if (compChoice === 2) {
        console.log("Scissors");
    } else {
        alert("Error");
    }
}