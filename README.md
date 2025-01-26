# Bubble Game

This is a simple Bubble Game where the goal is to click the correct bubble that matches the displayed number before the timer runs out. Each successful click adds to your score. The game ends when the timer reaches zero, and the final score is displayed.

## Game Logic

1. **Timer**: The game starts with a timer of 60 seconds, which counts down. The game ends when the timer reaches zero.
2. **Bubbles**: At the start of the game, bubbles are randomly generated in the `bottom_panel`. Each bubble displays a random number.
3. **Matching Number**: A random number is also displayed on the top of the screen. To score, the player must click on the bubble that has the same number as the one displayed.
4. **Scoring**: Every time a bubble with the correct number is clicked, the score increases by one.
5. **Game Over**: When the timer reaches zero, the game ends and the final score is displayed.

## Features

- **Timer**: Countdown from 60 seconds.
- **Random Bubble Generation**: Bubbles with random numbers (0-9) are generated.
- **Score Update**: The score is updated when the player clicks the correct bubble.
- **Game Over**: The game ends when the timer reaches zero, showing the final score.

## How to Play

1. A number will appear at the top of the game screen.
2. Click on the bubble with the same number to score.
3. The game will end once the timer hits 0, and your score will be displayed.

## Setup

To play the game, simply download the repository and open the `index.html` file in your browser.

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.) is required to play the game.

## Files

- **index.html**: The HTML structure for the game.
- **style.css**: The styling for the game.
- **script.js**: The JavaScript logic that runs the game, including bubble generation, scoring, and timer logic.

## License

This project is open-source and available under the [MIT License](LICENSE).
