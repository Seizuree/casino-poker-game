const readlineSync = require('readline-sync')
const Game = require('./game')

console.log('Welcome to Poker Game Simulator')

while (true) {
  let numPlayers

  while (true) {
    numPlayers = readlineSync.questionInt('Enter number of players (2-8): ')

    if (numPlayers < 2 || numPlayers > 8) {
      console.log(
        'Error: The number of players must be between 2 and 8. Please try again.'
      )
    } else {
      break
    }
  }

  const playerNames = []
  for (let i = 0; i < numPlayers; i++) {
    playerNames.push(readlineSync.question(`Enter name for Player ${i + 1}: `))
  }

  const game = new Game(playerNames)
  game.start()

  const playAgain = readlineSync
    .question('Play another round? (y/n): ')
    .toLowerCase()
  if (playAgain !== 'y') {
    console.log('Thanks for playing! Goodbye.')
    break
  }
}
