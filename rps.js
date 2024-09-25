function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return 'draw'
  } else if (player1 === 'rock' && player2 === 'scissors') {
    return 'player1'
  } else if (player1 === 'scissors' && player2 === 'paper') {
    return 'player1'
  } else if (player1 === 'paper' && player2 === 'rock') {
    return 'player1'
  } else if (player2 === 'rock' && player1 === 'scissors') {
    return 'player2'
  } else if (player2 === 'scissors' && player1 === 'paper') {
    return 'player2'
  } else if (player2 === 'paper' && player1 === 'rock') {
    return 'player2'
  }
}

//console.log(rockPaperScissors('paper', 'paper'))









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
} 