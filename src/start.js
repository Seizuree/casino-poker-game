const readlineSync = require('readline-sync')
const Game = require('./game')

console.log('Welcome to Poker Game Simulator')
const numPlayers = readlineSync.questionInt('Enter number of players (2-8): ')

const playerNames = []
for (let i = 0; i < numPlayers; i++) {
  playerNames.push(readlineSync.question(`Enter name for Player ${i + 1}: `))
}

const game = new Game(playerNames)
game.start()
