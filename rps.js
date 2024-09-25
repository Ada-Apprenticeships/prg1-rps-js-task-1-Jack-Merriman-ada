function rockPaperScissors(player1, player2) {
  const rockPaperScissorsStats = {
    "rock": {
      "beats": ["scissors"],
    },
    "paper": {
      "beats": ["rock"],
    },
    "scissors": {
      "beats": ["paper"],
    },
  };
  if (player1 === player2) {
    return "draw";
  } else if (rockPaperScissorsStats[player1]["beats"].includes(player2)) {
    return "player1";
  } else {
    return "player2";
  }
}

//console.log(rockPaperScissors('paper', 'paper'))









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
} 