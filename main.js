/*
    get player choice between rock, paper scissors
    let computer choose a choice
    see who wins
    repeat until someone wins best out of 3
*/

function StartDiceGame() 
{
    let PlayerChoice;
    let PlayerScore = 0, ComputerScore = 0;
    
    do {
        PlayerChoice = prompt("Enter rock paper or scissors")
        if (PlayerChoice != null) {PlayerChoice = PlayerChoice.toLowerCase();}
        if (PlayerChoice === "rock" || PlayerChoice === "paper" || PlayerChoice === "scissors") {
            console.log("you entered: " + PlayerChoice);

        } else {
            console.log("You entered: " + PlayerChoice + " which doesn't work, try again");
        }
    } while (PlayerChoice !== "rock" && PlayerChoice !== "paper" && PlayerChoice !== "scissors") 
    console.log("break while loop");
}

StartDiceGame();