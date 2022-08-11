/*
    get player choice between rock, paper scissors
    let computer choose a choice
    see who wins
    repeat until someone wins best out of 3
*/

function StartDiceGame() {
    let PlayerChoice = prompt("Enter rock paper or scissors").toLowerCase();
    if (PlayerChoice === "rock" || PlayerChoice === "paper" || PlayerChoice === "scissor") {
        console.log("you entered: " + PlayerChoice);
    } else {
        console.log("You entered: " + PlayerChoice + " which doesn't work");
    }
}

StartDiceGame();