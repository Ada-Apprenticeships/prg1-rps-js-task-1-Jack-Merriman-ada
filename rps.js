function rockPaperScissors(player1Choice, player2Choice) {
  const rockPaperScissorsBeatsInfo = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["spock", "paper"],
    "spock": ["scissors", "rock"]
  };
  if (player1Choice === player2Choice) {
    return "draw";
  } else if (rockPaperScissorsBeatsInfo[player1Choice].includes(player2Choice)) {
    return "player1";
  }
  return "player2";
};









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
} 