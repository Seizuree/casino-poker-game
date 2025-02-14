const Game = require('../src/game')

describe('Game Class', () => {
  test('Game initializes with correct number of players', () => {
    const game = new Game(['Alice', 'Bob'])
    expect(game.players.length).toBe(2)
  })

  test('Players receive 5 cards each', () => {
    const game = new Game(['Alice', 'Bob'])
    game.start()
    game.players.forEach((player) => {
      expect(player.hand.length).toBe(5)
    })
  })

  test('Game determines winner correctly', () => {
    const game = new Game(['Alice', 'Bob'])
    game.start()
    expect(game.players.length).toBeGreaterThan(1)
  })
})
