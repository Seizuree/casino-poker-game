const Deck = require('../src/deck')

describe('Deck Tests', () => {
  test('Test deck creation', () => {
    const deck = new Deck()
    expect(deck.cards.length).toBe(52)
  })

  test('Test shuffling', () => {
    const deck = new Deck()
    const originalOrder = [...deck.cards.map((card) => card.toString())]
    deck.shuffle()
    const shuffledOrder = [...deck.cards.map((card) => card.toString())]
    expect(shuffledOrder).not.toEqual(originalOrder)
  })

  test('Test dealing', () => {
    const deck = new Deck()
    const hand = deck.dealHand(5)
    expect(hand.length).toBe(5)
    expect(deck.cards.length).toBe(47)
  })

  test('Test deck reset', () => {
    const deck = new Deck()
    deck.dealHand(5)
    deck.initializeDeck()
    expect(deck.cards.length).toBe(52)
  })
})
