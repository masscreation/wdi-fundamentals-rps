////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    if (move !== null) {
        return move; 
    } 
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    else {
        return getInput(); 
    };
    
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    if (move !== null) {
        return move; 
    } 
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    else {
        return randomPlay(); 
    };
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    computerMove = getComputerMove(null);
    playerMove = getPlayerMove(null);
    switch(playerMove, computerMove) {
        case(playerMove === computerMove):
            winner = 'tie'; 
            break; 
        case('rock', 'paper'):
            winner = 'computer';
            break; 
        case('rock', 'scissors'):
            winner = 'player';
            break; 
        case('paper', 'rock'):
            winner = 'player';
            break; 
        case('paper', 'scissors'):
            winner = 'computer';
            break; 
        case('scissors', 'rock'):
            winner = 'computer';
            break; 
        case('scissors', 'paper'):
            winner = 'player'; 
            break;
        default:
            console.log("Please enter either 'rock', 'paper', or 'scissors'.");
    }
    console.log("The player chose " + playerMove + " and computer chose " + computerMove + ". " + winner + " wins.");
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((computerWins || playerWins) < 5) {
        getWinner();
        if (getWinner() === 'computer') {
            computerWins +=  1; 
        }
        else if (getWinner() === 'player') {
            playerWins += 1;
        }
        return [playerWins, computerWins];
    }
    
}

