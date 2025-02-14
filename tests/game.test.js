const Game = require('../src/game')

describe('Game Flow Tests', () => {
  test('Test player management', () => {
    const game = new Game(['Alice', 'Bob'])
    expect(game.players.length).toBe(2)
  })

  test('Test round execution', () => {
    const game = new Game(['Alice', 'Bob'])
    game.start()
    expect(game.players[0].hand.length).toBe(5)
    expect(game.players[1].hand.length).toBe(5)
  })

  test('Test winner determination', () => {
    const game = new Game(['Alice', 'Bob'])
    game.start()
    expect(game.showResults).toBeDefined()
  })

  test('Test multiple rounds', () => {
    const game1 = new Game(['Alice', 'Bob'])
    game1.start()

    const game2 = new Game(['Alice', 'Bob'])
    game2.start()

    expect(game1.players[0].hand).not.toEqual(game2.players[0].hand)
  })
})
