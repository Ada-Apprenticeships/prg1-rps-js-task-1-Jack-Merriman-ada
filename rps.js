function rockPaperScissors(player1, player2) {
  const rockPaperScissorsBeatsStats = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["spock", "paper"],
    "spock": ["scissors", "rock"]
    };
  if (player1 === player2) {
    return "draw";
  } else if (rockPaperScissorsBeatsStats[player1].includes(player2)) {
    return "player1";
  }
  return "player2";
};









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
} 