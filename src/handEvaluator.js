const Card = require('./card')

class HandEvaluator {
  static getHandRank(hand) {
    const ranks = hand
      .map((card) => Card.getRankValue(card.rank))
      .sort((a, b) => b - a)
    const suits = hand.map((card) => card.suit)
    const rankCounts = {}
    ranks.forEach((rank) => (rankCounts[rank] = (rankCounts[rank] || 0) + 1))
    const counts = Object.values(rankCounts).sort((a, b) => b - a)
    const isFlush = new Set(suits).size === 1
    const isStraight = ranks.length === 5 && ranks[0] - ranks[4] === 4
    const highest = ranks[0]

    if (isFlush && isStraight && highest === 14)
      return { name: 'Royal Flush', rank: 10 }
    if (isFlush && isStraight)
      return { name: 'Straight Flush', rank: 9, highest }
    if (counts[0] === 4) return { name: 'Four of a Kind', rank: 8, highest }
    if (counts[0] === 3 && counts[1] === 2)
      return { name: 'Full House', rank: 7, highest }
    if (isFlush) return { name: 'Flush', rank: 6, highest }
    if (isStraight) return { name: 'Straight', rank: 5, highest }
    if (counts[0] === 3) return { name: 'Three of a Kind', rank: 4, highest }
    if (counts[0] === 2 && counts[1] === 2)
      return { name: 'Two Pairs', rank: 3, highest }
    if (counts[0] === 2) return { name: 'One Pair', rank: 2, highest }
    return { name: 'High Card', rank: 1, highest }
  }
}

module.exports = HandEvaluator
