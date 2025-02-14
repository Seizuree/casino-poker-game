class Card {
  constructor(suit, rank) {
    this.suit = suit
    this.rank = rank
  }

  toString() {
    return `${this.suit}${this.rank}`
  }

  static getSuitRank(suit) {
    const suitOrder = { '♠': 4, '♥': 3, '♣': 2, '♦': 1 }
    return suitOrder[suit] || 0
  }

  static getRankValue(rank) {
    const rankOrder = { A: 14, K: 13, Q: 12, J: 11 }
    return rankOrder[rank] || parseInt(rank)
  }
}

module.exports = Card
