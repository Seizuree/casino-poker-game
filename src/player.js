class Player {
  constructor(name) {
    this.name = name
    this.hand = []
  }

  receiveHand(hand) {
    this.hand = hand
  }

  showHand() {
    return this.hand.map((card) => card.toString()).join(' ')
  }
}

module.exports = Player
