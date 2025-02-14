const Card = require('../src/card')

describe('Card Tests', () => {
  test('Test card creation', () => {
    const card = new Card('♠', 'A')
    expect(card.suit).toBe('♠')
    expect(card.rank).toBe('A')
    expect(card.toString()).toBe('♠A')
  })

  test('Test card comparison', () => {
    const card1 = new Card('♠', 'A')
    const card2 = new Card('♥', 'K')
    expect(Card.getRankValue(card1.rank)).toBeGreaterThan(
      Card.getRankValue(card2.rank)
    )
  })

  test('Test suit ranking', () => {
    expect(Card.getSuitRank('♠')).toBe(4)
    expect(Card.getSuitRank('♥')).toBe(3)
    expect(Card.getSuitRank('♣')).toBe(2)
    expect(Card.getSuitRank('♦')).toBe(1)
  })

  test('Test ace high/low handling', () => {
    expect(Card.getRankValue('A')).toBe(14)
    expect(Card.getRankValue('2')).toBe(2)
  })
})
