////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
function getPlayerMove() {
  return getInput();
}
function getComputerMove(move) {
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
      if ((computerMove == "scissors" && playerMove == "rock") || (computerMove == "paper" && playerMove == "scissors") || (computerMove == "rock" && playerMove == "paper")) {
          winner = "Player Wins!";
        }
        else if ( (playerMove == "scissors" && computerMove == "rock") || (playerMove == "paper" && computerMove == "scissors") || (playerMove == "rock" && computerMove == "paper")) {
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

      return [playerWins, computerWins];
}

function playToFive() {
      console.log("Let's play Rock Paper Scissors");
      var playerWins = 0;
      var computerWins = 0;
        while (playerWins < 5 && computerWins < 5) {
          result = getWinner(getPlayerMove(), getComputerMove());
          if (result === 'player') {
             playerWins++;
            }
              else if (result === 'computer') {
                computerWins++;
                }
                  else {
                    console.log('tie!');
                    }
                      console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
                      }
                        var result;
      return [playerWins, computerWins];
  }
