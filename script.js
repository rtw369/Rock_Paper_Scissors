// plays game
game();

function computerPlay() {
    let num =  Math.floor(Math.random() * 3) //returns either 0, 1, or 2.

    if(num === 2) {
        // if num equals 2, then return rock
            return "rock";
    }
    else if(num === 1) {
        // if num equals 1, then return paper
        return "paper";
    }
    else {
        // if num doesn't equals 2 or 1, then it has to equals 0
        // therefore return scissors
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // need playerSelection.toLowerCase() in case player input different
    // variations of rock, paper, or scissors
    playerSelection = playerSelection.toLowerCase();
    // figure out playerSelection first
    if(playerSelection === "rock") {
        if (computerSelection === "rock") {
            return `It's a tie! ${playerSelection} does nothing to ${computerSelection}`;
        }
        else if (computerSelection === "paper") {
            return ` You lose! ${playerSelection} gets beaten by ${computerSelection}`;
        }
        // computer only output rock, paper, or scissors
        else {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if(playerSelection === "paper") {
        if (computerSelection === "rock") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection === "paper") {
            return `It's a tie! ${playerSelection} does nothing to ${computerSelection}`;
        }
        else {
            return ` You lose! ${playerSelection} gets beaten by ${computerSelection}`;
        }
    }
    // can't be else because player might have input different variations
    // or player might have input something else than rock, paper, or scissors
    else if(playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return ` You lose! ${playerSelection} gets beaten by ${computerSelection}`;
        }
        else if (computerSelection === "paper") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            return `It's a tie! ${playerSelection} does nothing to ${computerSelection}`;
        }
    }
    else {
        return "Error, wrong input";
    }
}

function game() {
    const container = document.querySelector('#container');

    //outputs result
    const output = document.createElement('p');
    output.classList.add('result');

    const score = document.createElement('div');
    score.classList.add('score');
    let playerScore = 0;
    let computerScore = 0;

    const rock = document.querySelector('#Rock');
    rock.addEventListener('click', () => { 
        output.textContent = playRound("rock", computerPlay());
    });

    const paper = document.querySelector('#Paper');
    paper.addEventListener('click', () => {
        output.textContent = playRound("paper", computerPlay());
    });

    const scissors = document.querySelector('#Scissors');
    scissors.addEventListener('click', () => {
        output.textContent = playRound("scissors", computerPlay());
    });

    const btns = document.querySelectorAll('button');

    //keep score everytime a button is pressed
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (output.textContent.includes('win')) playerScore++;
            else if (output.textContent.includes('lose')) computerScore++;

            score.textContent = `Player Score: ${playerScore}   Computer Score: ${computerScore}`;

            if(playerScore == 5) {
                alert("You win!");
                playerScore = 0;
                computerScore = 0;
            }
            else if(computerScore == 5) {
                alert("You lost!");
                playerScore = 0;
                computerScore = 0;
            }
        });
    });

    container.appendChild(score);
    container.appendChild(output);
}