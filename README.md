# Casino Poker Game

A **command-line Poker game** built with **Node.js**, featuring a **deck of cards, hand evaluation, and a game flow simulation**. Supports **2-8 players**, and includes a **Jest-powered test suite** for validation.

---

## Features

- **Deck of Cards**: Shuffle and deal cards randomly.
- **Hand Evaluation**: Detects **Royal Flush, Straight, Four of a Kind**, etc.
- **Game Flow**: Players receive hands, and the winner is determined.
- **Unit Tests**: Includes tests for **cards, deck, hand rankings, game logic**, and more.

---

## Installation

Make sure you have **Node.js (v16+)** installed.

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Seizuree/casino-poker-game.git
   cd casino-poker-game
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

---

## How to Play

1. Run the game:

   ```sh
   node start.js
   ```

2. **Follow the prompts**:
   - Enter the number of players (2-8).
   - Enter player names.
   - The game will shuffle and deal cards.
   - Hand rankings and the **winner** will be displayed.
   - You can **choose to play another round**.

---

## Running Tests

This project uses **Jest** for testing.

### Run All Tests

```sh
npm test
```

### Run Tests with Coverage Report

```sh
npm test -- --coverage
```

---

## Test Coverage

The test suite includes:

### 1️⃣ **Card Tests**

- ✅ Card creation
- ✅ Card comparisons
- ✅ Suit rankings
- ✅ Ace high/low handling

### 2️⃣ **Deck Tests**

- ✅ Deck creation
- ✅ Shuffling
- ✅ Dealing
- ✅ Deck reset

### 3️⃣ **Hand Evaluation Tests**

- ✅ All hand types
- ✅ Hand comparison
- ✅ Tie breakers
- ✅ Edge cases

### 4️⃣ **Game Flow Tests**

- ✅ Player management
- ✅ Round execution
- ✅ Winner determination
- ✅ Multiple rounds

### 5️⃣ **Winner Determination Tests**

- ✅ All ranking scenarios
- ✅ Tie-breaking rules
- ✅ Suit hierarchy
- ✅ Multiplayer scenarios

---

# Sample Game Data

To get a quick understanding of how the game works, here’s an example session:

---

### **Sample Input**

```
Welcome to Poker Game Simulator
Enter number of players (2-8): 3
Enter name for Player 1: Alice
Enter name for Player 2: Bob
Enter name for Player 3: Charlie
```

### **Sample Output**

```
Dealing cards...

Hand Rankings:

Alice: ♠10 ♠J ♠Q ♠K ♠A (Royal Flush)
Bob: ♥7 ♥7 ♣7 ♦7 ♣K (Four of a Kind)
Charlie: ♦4 ♦5 ♦6 ♦7 ♦8 (Straight Flush)

Winner: Alice with ♠10 ♠J ♠Q ♠K ♠A (Royal Flush)!

Play another round? (y/n):
```

---

### **Try It Yourself**

You can interact with the game by running:

```sh
node start.js
```

Then enter **player names and number of players** to start a game round.

---

## Contributing

If you'd like to contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```sh
   git checkout -b feature-branch
   ```
3. **Commit your changes**:
   ```sh
   git commit -m "Add new feature"
   ```
4. **Push to your fork**:
   ```sh
   git push origin feature-branch
   ```
5. **Open a Pull Request** 🚀

---

## License

This project is **licensed under the ISC License**.

---

## Author

- **Brian** - Creator of the Casino Poker Game.

---

## Acknowledgments

- Built using **Node.js**.
- **Jest** for testing.
- **readline-sync** for CLI input.

---

🎰 **Happy Playing!** 🃏♠️♥️♦️♣️
