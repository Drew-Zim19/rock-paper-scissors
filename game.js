
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
    let choiceRock = 'Rock';
    let choicePaper = 'Paper';
    let choiceScissors = 'Scissors';
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

let computerChoice = getComputerChoice();

//prompt user for input. allow user to quit anytime

let userChoice = '';
let userWins = 0;
let userLoss = 0;


userChoice = prompt("Hello and welcome to Rock Paper Scissors. To play, type in either Rock, Paper or Scissors. Press q to quit anytime.");

//input validation function

function userChoiceCheck(userChoice){

    let choiceCheck = userChoice.toString().toLowerCase();

    while (choiceCheck != 'rock' && choiceCheck && 'scissors' && choiceCheck != 'paper' && choiceCheck != 'q'){
        choiceCheck = prompt("You made an invalid input. Please choose either Rock, Paper, Scissors, or q to quit.");
        choiceCheck = choiceCheck.toLowerCase();
    }
    return choiceCheck;
}

userChoiceCheck(userChoice);

//while(userChoice != 'q' || userChoice != 'Q'){

