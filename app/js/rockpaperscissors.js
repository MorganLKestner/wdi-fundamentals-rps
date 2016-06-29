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
// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getPlayerMove(move) {
 var move;
  if (move === true) {
  }
    else {
    move = getInput();
  }
      return move;
}
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

function getComputerMove(move) {
    if (move === true) {
    }
    else {
      move = randomPlay();
    }
    return move;
}

// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
/* YOUR CODE HERE */

function getWinner(playerMove,computerMove) {
    var winner;
      if ((computerMove == "scissors" && playerMove == "rock")
        || (computerMove == "paper" && playerMove == "scissors")
        || (computerMove == "rock" && playerMove == "paper")) {
          winner = "Player Wins!";
        }
        else if ( (playerMove == "scissors" && computerMove == "rock")
          || (playerMove == "paper" && computerMove == "scissors")
          || (playerMove == "rock" && computerMove == "paper")) {
            winner = "Computer Wins!";
          }
          else if (playerMove == computerMove) {
            winner = " It's a tie!";
          }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
