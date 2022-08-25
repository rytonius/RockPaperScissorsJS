/*
    get player choice between Rock, Paper Scissors
    let computer choose a choice
    see who wins
    repeat until someone wins best out of 3
*/
let PlayerScore = 0, ComputerScore = 0;
const ButtonList = ["Rock", "Paper", "Scissors"];
let EndGame = Boolean(false)
Info = document.querySelector('info')
Score = document.querySelector('Score')
Info.textContent = "First one to 2 points wins"

function StartRPS() {
    const Buttons = document.querySelectorAll('button');

    Buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (EndGame) {
                PlayerScore = 0;
                ComputerScore = 0;
                EndGame = Boolean(false);
            }
            else {
                console.log(button.id)
                ScoreGame(button.id,GetComputerChoice());
            }
            
        });
    });
}

function GetComputerChoice() {
    const CHOICES = ButtonList
    let randomGuess = Math.round(Math.random() * (CHOICES.length - 1));
    console.log("randomGuess: " + CHOICES[randomGuess])
    return CHOICES[randomGuess];
}

function ScoreGame(PC, GCC) {
    if (PC === "Rock" && GCC === "Rock"
        || PC === "Paper" && GCC === "Paper"
        || PC === "Scissors" && GCC === "Scissors") {
        Info.textContent = ("There was a tie?!");
    }

    else if (PC === "Rock" && GCC === "Scissors") {
        Info.textContent = "Woh, you used Rock and it's super effective Computer's Paper";
        PlayerScore++;
    }

    else if (PC === "Paper" && GCC === "Rock") {
        Info.textContent = "Paper swoops in and tackles computer's Rock for the touchdown";
        PlayerScore++;
    }
    else if (PC === "Scissors" && GCC === "Paper") {
        Info.textContent = "you gave computer a Paper cut";
        PlayerScore++;
    }

    else if (GCC === "Rock" && PC === "Scissors") {
        Info.textContent = "Computer throws a Rock at your knees";
        ComputerScore++;
    }

    else if (GCC === "Paper" && PC === "Rock") {
        Info.textContent = "computer wraps your Rock up in Paper and drops it into the ocean";
        ComputerScore++;
    }
    else if (GCC === "Scissors" && PC === "Paper") {
        Info.textContent = "Paper mache";
        ComputerScore++;
    }

    else {
        Info.textContent = "under no reason, should you be seeing this message";
    }

    console.log("PlayerScore: " + PlayerScore + "\tComputerScore: " + ComputerScore);
    Score.textContent = `]-[${PlayerScore}:${ComputerScore}]-[`
    if (ComputerScore > 2 || PlayerScore > 2) {
        WinnerIs();   
        EndGame = Boolean(true);
    }


}

function WinnerIs() {
    if (PlayerScore > ComputerScore) {
        Info.textContent = "You Win!\nClick to Start Again"
    }

    else {
        Info.textContent = "Computer Wins! AI SMARTER THAT HUMAN?\nClick to Start Again"
    }

    console.log("Final Score Human: " + PlayerScore + " - Computer: " + ComputerScore)
}

function CreateButtons() {
    // /<button id="Rock">Rock</button>

    const Middle = document.querySelector("Middle");
    ButtonList.forEach(element => {
        var button = document.createElement('button');
        button.id = element;
        button.textContent = element;
        console.log("created button: " + button.id)
        Middle.append(button);
    });
}

CreateButtons();
StartRPS();