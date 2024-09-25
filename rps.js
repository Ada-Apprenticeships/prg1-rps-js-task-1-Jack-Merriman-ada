function rockPaperScissors(player1, player2) {
  const rockPaperScissorsStats = {
    "rock": {
      "beats": ["scissors", "lizard"],
    },
    "paper": {
      "beats": ["rock", "spock"],
    },
    "scissors": {
      "beats": ["paper", "lizard"],
    },
    "lizard": {
      "beats": ["spock", "paper"],
    },
    "spock": {
      "beats": ["scissors", "rock"],
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









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
} 