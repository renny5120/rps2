let playerWin = 0;
let computerWin = 0;

// Random Choice for Computer
function getComputerChoice(){
    const choices = [];
    choices.push("rock", "paper", "scissors");
    const randomElement = Math.floor(Math.random() * choices.length);
    return choices[randomElement];
}

// Plays Round
function playRound(playerChoice, compChoice){
    playerChoice = playerChoice.toLowerCase();
    let outcome = false;
    let tie = false;
    if (playerChoice == "rock"){
        if(compChoice == "scissors"){
            outcome = true;
        } else if (compChoice == "paper"){
            outcome = false;
        }else {
            tie = true;
        }
    } else if (playerChoice == "paper"){
        if(compChoice == "rock"){
            outcome = true;
        } else if (compChoice == "scissors"){
            outcome = false;
        }else {
            tie = true;
        }
    } else {
        if(compChoice == "paper"){
            outcome = true;
        } else if (compChoice == "rock"){
            outcome = false;
        }else {
            tie = true;
        }
    }
    if (tie){
        return "tie";
    }

    if (outcome){
        playerWin++;
        updateScoreText();
        console.log(`${playerWin} - ${computerWin}`);
        return `"You Win! ${playerChoice} beats ${compChoice}"`
    } else {
        computerWin++;
        updateScoreText();
        console.log(`${playerWin} - ${computerWin}`);
        return `"You Lose! ${compChoice} beats ${playerChoice}"`
    }
}

// test

function game(){
    for (let i = 0; i < 5; i++){
        let outcome = "tie";
        while (outcome == "tie"){
            let playerSelection = prompt("Input your Choice!");
            outcome = playRound(playerSelection, getComputerChoice());
        }
        console.log(outcome);
    }
}
//game();

let selections = document.querySelector('.selections');

selections.addEventListener('click', (e) => {
    let displayText = document.querySelector('.display');

    let target = e.target;
    const selectedClass = target.classList[0];
    switch(selectedClass){
        case 'rock':
            displayText.textContent = playRound('rock', getComputerChoice());
            break;
        case 'paper':
            displayText.textContent = playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            displayText.textContent = playRound('scissors', getComputerChoice());
            break;
        default:
            alert(selectedClass);
            break;
    }
});

function updateScoreText(){
    let scoreText = document.querySelector('.results');
    scoreText.textContent = `${playerWin} - ${computerWin}`;
}

