const Deck = require('./deck')
const Player = require('./player')
const HandEvaluator = require('./handEvaluator')

class Game {
  constructor(playerNames) {
    this.players = playerNames.map((name) => new Player(name))
    this.deck = new Deck()
  }

  start() {
    this.players.forEach((player) => player.receiveHand(this.deck.dealHand(5)))
    this.showResults()
  }

  showResults() {
    const results = this.players.map((player) => {
      const evaluation = HandEvaluator.getHandRank(player.hand)
      return { name: player.name, hand: player.showHand(), ...evaluation }
    })

    results.sort((a, b) => b.rank - a.rank || b.highest - a.highest)
    console.log('\nGame Results:')
    results.forEach(({ name, hand, name: rankName }) =>
      console.log(`${name}: ${hand} (${rankName})`)
    )
    console.dir(this.players.hand[0])
    console.log(`\nWinner: ${results[0].name} with ${results[0].name}!\n`)
  }
}

module.exports = Game
