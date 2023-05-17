
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

let computerChoice = getComputerChoice();

//prompt user for name, allow user to quit anytime

let userChoice = '';
let userWins = 0;
let userLoss = 0;
let userTies = 0;
let gameCount = 0;
let userName = prompt("Hello and Welcome to Rock, Paper, Scissors! Please enter your first name. To play, type in either Rock, Paper or Scissors. \n\nFive games will be played. Press q to quit anytime.");

//input validation function

function userChoiceCheck(userChoice){

    let choiceCheck = userChoice.toString().toLowerCase();

    while (choiceCheck != 'rock' && choiceCheck && 'scissors' && choiceCheck != 'paper' && choiceCheck != 'q'){
        choiceCheck = prompt("You made an invalid input. Please choose either Rock, Paper, Scissors, or q to quit.");
        choiceCheck = choiceCheck.toLowerCase();
    }
    return choiceCheck;
}

//function to compare to decide winner

function decideWinner(userChoice, computerChoice){

    if(userChoice === 'rock'){
        if(computerChoice === 'rock'){
            userTies++;
            alert(`Computer chose ${computerChoice}, it's a tie!`);
        }
        if(computerChoice === 'paper'){
            userLoss++;
            alert(`Computer chose ${computerChoice}, You lost!`);
        }
        if(computerChoice === 'scissors'){
            userWins++;
            alert(`Computer chose ${computerChoice}, You won!`);
        }
    } 
    if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            userWins++;
            alert(`Computer chose ${computerChoice}, You won!`);
        }
        if(computerChoice === 'paper'){
            userTies++;
            alert("It's a tie!");
        }
        if(computerChoice === 'scissors'){
            userLoss++;
            alert(`Computer chose ${computerChoice}, You lost!`);
        }
    }
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            userLoss++;
            alert(`Computer chose ${computerChoice}, You lost!`);
        }
        if(computerChoice === 'paper'){
            userWins++;
            alert(`Computer chose ${computerChoice}, You won!`);
        }
        if(computerChoice === 'scissors'){
            userTies++;
            alert("It's a tie!");
        }
    }

}
//this will play 5 games if user doesn't quit

if(userChoice != 'q' && userName != 'q'){
do{
    userChoice = prompt(`${userName}, please choose Rock, Paper, Scissors or q to quit`);
    userChoice = userChoiceCheck(userChoice);
    computerChoice = getComputerChoice();

    if(userChoice != 'q'){
    decideWinner(userChoice, computerChoice);
    alert(`The current score is ${userName} ${userWins}, computer ${userLoss}, ${userTies} tie(s). Five games will be played, quit anytime.`);
    gameCount++;
    }

} while(gameCount < 5 && userChoice != 'q');
}

alert(`Final Score: ${userName} ${userWins} win(s), computer ${userLoss} win(s), ${userTies} tie(s). Thanks for playing!`)

