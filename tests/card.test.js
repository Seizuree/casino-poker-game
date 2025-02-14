const Card = require('../src/card')

describe('Card Class', () => {
  test('Creates a card correctly', () => {
    const card = new Card('♠', 'A')
    expect(card.suit).toBe('♠')
    expect(card.rank).toBe('A')
  })

  test('Card toString() method works', () => {
    const card = new Card('♥', 'K')
    expect(card.toString()).toBe('♥K')
  })

  test('Card suit ranking works', () => {
    expect(Card.getSuitRank('♠')).toBe(4)
    expect(Card.getSuitRank('♥')).toBe(3)
    expect(Card.getSuitRank('♣')).toBe(2)
    expect(Card.getSuitRank('♦')).toBe(1)
  })

  test('Card rank value works', () => {
    expect(Card.getRankValue('A')).toBe(14)
    expect(Card.getRankValue('K')).toBe(13)
    expect(Card.getRankValue('2')).toBe(2)
  })
})
