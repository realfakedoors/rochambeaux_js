function computerPlay() {
  let moves = Array("ROCK", "PAPER", "SCISSORS");
  return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const play = playerSelection.toUpperCase();
  let result;
  switch (play) {
    case computerSelection:
      result = "tie!";
      break;
    case "ROCK":
      computerSelection == "PAPER" ?    result = "you lose!" : result = "you win!";
      break;
    case "PAPER":
      computerSelection == "SCISSORS" ? result = "you lose!" : result = "you win!";
      break;
    case "SCISSORS":
      computerSelection == "ROCK" ?     result = "you lose!" : result = "you win!";
      break;
  }
  
  return result;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++){
    let playerSelection  = prompt("Rock, Paper or Scissors?");
    let round = playRound(playerSelection, computerPlay());
    switch (round){
      case "you lose!":
        computerScore += 1;
        break;
      case "you win!":
        playerScore += 1;
        break;
      case "tie!":
        break;
    }
    alert(round);
  }
  
  let finalResults = `Game Over! You had ${playerScore} points and the computer had ${computerScore} points.`;
  alert(finalResults);
}

game();