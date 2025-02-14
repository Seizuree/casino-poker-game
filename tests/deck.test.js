const Deck = require('../src/deck')

describe('Deck Class', () => {
  test('Deck initializes with 52 cards', () => {
    const deck = new Deck()
    expect(deck.cards.length).toBe(52)
  })

  test('Deck shuffling changes card order', () => {
    const deck = new Deck()
    const firstCard = deck.cards[0].toString()
    deck.shuffle()
    expect(deck.cards[0].toString()).not.toBe(firstCard)
  })

  test('Deck deals correct number of cards', () => {
    const deck = new Deck()
    const hand = deck.dealHand(5)
    expect(hand.length).toBe(5)
    expect(deck.cards.length).toBe(47)
  })
})
