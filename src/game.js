const Deck = require('./deck')
const Player = require('./player')
const HandEvaluator = require('./handEvaluator')

class Game {
  constructor(playerNames) {
    this.players = playerNames.map((name) => new Player(name))
    this.deck = new Deck()
  }

  start() {
    console.log('\nDealing cards...\n')
    this.players.forEach((player) => {
      player.receiveHand(this.deck.dealHand(5))
      console.log(`${player.name}'s hand: ${player.showHand()}`)
    })
    this.showResults()
  }

  showResults() {
    console.log('\nHand Rankings:')
    const results = this.players.map((player) => {
      const evaluation = HandEvaluator.getHandRank(player.hand)
      console.log(`${player.name}: ${evaluation.name}`)
      return { playerName: player.name, hand: player.showHand(), ...evaluation }
    })

    results.sort((a, b) => b.rank - a.rank || b.highest - a.highest)

    console.log(`\nWinner: ${results[0].playerName} with ${results[0].name}!\n`)
  }
}

module.exports = Game
