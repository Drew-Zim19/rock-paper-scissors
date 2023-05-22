
/* 
    This file will be the basis for the rock paper scissors game.
    Steps for the game include:
    1. create random choice for rock paper or scissors from computer
    2. propmt user for input. allowing user to quit anytime
    3. validate input
    4. compare to computer choice to decide who wins
    5. output winner, record count and add to record counter
    6. repeat until user quits
*/

//Is it best practice to define functions here or in another place?

// computer choice function

function getComputerChoice (){
    let choiceNum = Math.random();
    let choiceRock = 'rock';
    let choicePaper = 'paper';
    let choiceScissors = 'scissors';
    if (choiceNum < .33){
        return choiceRock;
    }
    else if (choiceNum >= .33 && choiceNum < .66){
        return choicePaper;
    }
    else {
        return choiceScissors;
    }
}

//prompt user for name, allow user to quit anytime

let userWins = 0;
let userLoss = 0;
let userTies = 0;
let gameCount = 0;
let userName = prompt("Hello and welcome to Rock, Paper, Scissors! Please enter your first name.");
let computerChoice = getComputerChoice();
let userChoice = '';

alert(`Hi ${userName}! To play, click either Rock, Paper or Scissors. 

Scorekeeping is format W-L-T. First to 5 wins ends the game.`);

//input validation function
/*
function userChoiceCheck(userChoice){

    let choiceCheck = userChoice.toString().toLowerCase();

    while (choiceCheck != 'rock' && choiceCheck && 'scissors' && choiceCheck != 'paper' && choiceCheck != 'q'){
        choiceCheck = prompt("You made an invalid input. Please choose either Rock, Paper, Scissors, or q to quit.");
        choiceCheck = choiceCheck.toLowerCase();
    }
    return choiceCheck;
}
*/

//userchoice
const body = document.body;
const div = document.createElement('div');
body.append(div);

//function to compare to decide winner 

function playRound(userChoice, computerChoice){
  if(userWins < 5 && userLoss < 5){
    if(userChoice === 'rock'){
        if(computerChoice === 'rock'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Rock. You tied!';
            div.appendChild(resultText);
            userTies++;
            gameCount++;
            results();
        }
        if(computerChoice === 'paper'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Paper. You lost!';
            div.appendChild(resultText);
            userLoss++;
            gameCount++;
            results();
        }
        if(computerChoice === 'scissors'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Scissors. You won!';
            div.appendChild(resultText);
            userWins++;
            gameCount++;
            results();
        }
    } 
    if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Rock. You won!';
            div.appendChild(resultText);
            userWins++;
            gameCount++;
            results();
        }
        if(computerChoice === 'paper'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Paper. You tied!';
            div.appendChild(resultText);
            userTies++;
            gameCount++;
            results();
        }
        if(computerChoice === 'scissors'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Scissors. You lost!';
            div.appendChild(resultText);
            userLoss++;
            gameCount++;
            results();
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Rock. You lost!';
            div.appendChild(resultText);
            userLoss++;
            gameCount++;
            results();
        }
        if(computerChoice === 'paper'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Paper. You won!';
            div.appendChild(resultText);
            userWins++;
            gameCount++;
            results();
        }
        if(computerChoice === 'scissors'){
            const resultText = document.createElement('p');
            resultText.textContent = 'Computer chose Scissors. You tied!';
            div.appendChild(resultText);
            userTies++;
            gameCount++;
            results();
        }
    }
} else{
    endGame();
}
}

//function to display total results

function results(){
    const gameCountText = document.createElement('p');
    gameCountText.textContent = `You have played ${gameCount} game(s). The score is ${userWins}-${userLoss}-${userTies} versus the computer.`;
    div.appendChild(gameCountText);
}

//event listeners on buttons to trigger user input

document.getElementById("rock").addEventListener("click", () => {
    userChoice = 'rock';
    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
    
});

document.getElementById("paper").addEventListener("click", () => {
    userChoice = 'paper';
    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);

});

document.getElementById("scissors").addEventListener("click", () => {
    userChoice = 'scissors';
    computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);

});

// function to end the game once the computer or user reaches 5 wins

function endGame(){
    const gameEnd = document.createElement('p');
    gameEnd.textContent = 'One of the players has reached 5 wins. The game is over. Thanks for playing!';
    div.appendChild(gameEnd);
}

