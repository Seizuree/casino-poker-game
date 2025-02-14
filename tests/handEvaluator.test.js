const HandEvaluator = require('../src/handEvaluator')
const Card = require('../src/card')

describe('Hand Evaluation Tests', () => {
  function createHand(cards) {
    return cards.map(([suit, rank]) => new Card(suit, rank))
  }

  test('Test all hand types', () => {
    const royalFlush = createHand([
      ['♠', '10'],
      ['♠', 'J'],
      ['♠', 'Q'],
      ['♠', 'K'],
      ['♠', 'A'],
    ])
    expect(HandEvaluator.getHandRank(royalFlush).name).toBe('Royal Flush')

    const fourOfAKind = createHand([
      ['♠', '7'],
      ['♥', '7'],
      ['♦', '7'],
      ['♣', '7'],
      ['♠', 'K'],
    ])
    expect(HandEvaluator.getHandRank(fourOfAKind).name).toBe('Four of a Kind')
  })

  test('Test hand comparison', () => {
    const flush = createHand([
      ['♠', '2'],
      ['♠', '5'],
      ['♠', '9'],
      ['♠', 'J'],
      ['♠', 'K'],
    ])
    const straight = createHand([
      ['♠', '2'],
      ['♣', '3'],
      ['♦', '4'],
      ['♥', '5'],
      ['♠', '6'],
    ])

    expect(HandEvaluator.getHandRank(flush).rank).toBeGreaterThan(
      HandEvaluator.getHandRank(straight).rank
    )
  })

  test('Test tie breakers', () => {
    const pair1 = createHand([
      ['♠', 'A'],
      ['♣', 'A'],
      ['♦', '5'],
      ['♥', '6'],
      ['♠', '7'],
    ])
    const pair2 = createHand([
      ['♠', 'K'],
      ['♣', 'K'],
      ['♦', '4'],
      ['♥', '6'],
      ['♠', '7'],
    ])

    expect(HandEvaluator.getHandRank(pair1).highest).toBeGreaterThan(
      HandEvaluator.getHandRank(pair2).highest
    )
  })

  test('Test edge cases', () => {
    const highCard = createHand([
      ['♠', '2'],
      ['♣', '4'],
      ['♦', '6'],
      ['♥', '8'],
      ['♠', '10'],
    ])
    expect(HandEvaluator.getHandRank(highCard).name).toBe('High Card')
  })
})
