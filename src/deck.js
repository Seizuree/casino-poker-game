const Card = require('./card')

class Deck {
  constructor() {
    this.suits = ['♠', '♥', '♣', '♦']
    this.ranks = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ]
    this.cards = []
    this.initializeDeck()
  }

  initializeDeck() {
    this.cards = []
    this.suits.forEach((suit) => {
      this.ranks.forEach((rank) => {
        this.cards.push(new Card(suit, rank))
      })
    })
    this.shuffle()
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }

  dealHand(numCards) {
    return this.cards.splice(0, numCards)
  }
}

module.exports = Deck
