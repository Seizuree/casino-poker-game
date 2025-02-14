const Card = require('../src/card')
const HandEvaluator = require('../src/handEvaluator')

describe('Hand Evaluator', () => {
  test('Recognizes Royal Flush', () => {
    const hand = [
      new Card('♠', 'A'),
      new Card('♠', 'K'),
      new Card('♠', 'Q'),
      new Card('♠', 'J'),
      new Card('♠', '10'),
    ]
    expect(HandEvaluator.getHandRank(hand).name).toBe('Royal Flush')
  })

  test('Recognizes Straight Flush', () => {
    const hand = [
      new Card('♠', '9'),
      new Card('♠', '8'),
      new Card('♠', '7'),
      new Card('♠', '6'),
      new Card('♠', '5'),
    ]
    expect(HandEvaluator.getHandRank(hand).name).toBe('Straight Flush')
  })

  test('Recognizes Four of a Kind', () => {
    const hand = [
      new Card('♠', 'K'),
      new Card('♥', 'K'),
      new Card('♣', 'K'),
      new Card('♦', 'K'),
      new Card('♠', 'A'),
    ]
    expect(HandEvaluator.getHandRank(hand).name).toBe('Four of a Kind')
  })

  test('Recognizes Full House', () => {
    const hand = [
      new Card('♠', 'Q'),
      new Card('♥', 'Q'),
      new Card('♣', 'Q'),
      new Card('♠', 'J'),
      new Card('♥', 'J'),
    ]
    expect(HandEvaluator.getHandRank(hand).name).toBe('Full House')
  })

  test('Recognizes Flush', () => {
    const hand = [
      new Card('♠', 'A'),
      new Card('♠', 'K'),
      new Card('♠', '9'),
      new Card('♠', '6'),
      new Card('♠', '3'),
    ]
    expect(HandEvaluator.getHandRank(hand).name).toBe('Flush')
  })

  test('Recognizes High Card', () => {
    const hand = [
      new Card('♠', 'A'),
      new Card('♥', '8'),
      new Card('♣', '5'),
      new Card('♦', '4'),
      new Card('♠', '2'),
    ]
    expect(HandEvaluator.getHandRank(hand).name).toBe('High Card')
  })
})
