/*
    get player choice between rock, paper scissors
    let computer choose a choice
    see who wins
    repeat until someone wins best out of 3
*/
let PlayerScore = 0, ComputerScore = 0;

function StartDiceGame() 
{
    console.log("First one to 3 points wins")
    
    do {
        playerSelection  = PlayerChoice();
        computerSelection = GetComputerChoice();
        ScoreGame(playerSelection, computerSelection);
    } while (PlayerScore < 2 || ComputerScore < 2)

    WinnerIs();
    
}

function PlayerChoice() 
{

    let PlayerChoice;
    do {
        PlayerChoice = prompt("Enter rock paper or scissors: ")
        if (PlayerChoice != null) {PlayerChoice = PlayerChoice.toLowerCase();}
        if (PlayerChoice === "rock" || PlayerChoice === "paper" || PlayerChoice === "scissors") {
            console.log("you entered: " + PlayerChoice);

        } else {
            console.log("You entered: " + PlayerChoice + " which doesn't work, try again");
        }
    
    } while (PlayerChoice !== "rock" && PlayerChoice !== "paper" && PlayerChoice !== "scissors") 
    return PlayerChoice;
}

function GetComputerChoice()
{
    const CHOICES = ["rock", "paper", "scissors"];
    let randomGuess = Math.round(Math.random() * (CHOICES.length - 1) );
    console.log("randomGuess: " + randomGuess + "  choicesarray.length= " + CHOICES.length )
    return CHOICES[randomGuess];
}

function ScoreGame(PC, GCC) 
{
    if (PC === "rock" && GCC === "rock" 
    || PC === "paper" && GCC === "paper"
    || PC === "scissors" && GCC === "scissors" )
    {
        console.log("There was a tie?!");
    }

    else if (PC === "rock" && GCC === "scissors") {
        console.log("Woh, you used Rock and it's super effective Computer's paper");
        PlayerScore++;
    }

    else if (PC === "paper" && GCC === "rock") {
        console.log("paper swoops in and tackles computer's rock for the touchdown");
        PlayerScore++;
    }
    else if (PC === "scissors" && GCC === "paper") {
        console.log("you gave computer a paper cut");
        PlayerScore++;
    }

    else if (GCC === "rock" && PC === "scissors") {
        console.log("Computer throws a rock at your knees");
        ComputerScore++;
    }

    else if (GCC === "paper" && PC === "rock") {
        console.log("computer wraps your rock up in paper and drops it into the ocean");
        ComputerScore++;
    }
    else if (GCC === "scissors" && PC === "paper") {
        console.log("paper mache");
        ComputerScore++;
    }

    else {
        console.log("under no reason, should you be seeing this message");
    }
        console.log("PlayerScore: " + PlayerScore + "\tComputerScore: " + ComputerScore);

}

function WinnerIs() {
    if (PlayerScore > ComputerScore) {
        console.log("You Win!")
    }

    else {
        console.log("Computer Wins! AI SMARTER THAT HUMAN?")
    }

    console.log("FInal Score Human: "+ PlayerScore + " - Computer: " + ComputerScore)
}


StartDiceGame();