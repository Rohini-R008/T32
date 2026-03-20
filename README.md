#  React Chess Game

## Project Description

This project is a simple offline chess game built using React.js. The main goal of this project was to understand how to implement game logic, manage state, and build interactive UI components without using any external libraries.

In this application, two players can play chess by taking turns. The game enforces basic move validation, tracks moves, and includes timers for both players.

## Features Implemented

* 8x8 chess board with correct initial setup of pieces
* Turn-based gameplay (white and black alternate turns)
* Basic move validation for pieces
* Prevention of invalid moves
* Display of moves in chess notation (e.g., e4, e5)
* Timer for each player
* Simple and clean user interface

## Technologies Used

* React.js
* JavaScript (ES6)
* HTML & CSS

## Project Structure

src/

* components/

  * Board.js
  * Square.js
  * Timer.js
  * MoveList.js
* utils/

  * initialBoard.js
  * moveLogic.js
* App.js
* App.css

## How to Run the Project

1. Open terminal
2. Navigate to the project folder
3. Run the following commands:

```bash
npm install
npm start
```

4. Open browser and go to:

```
http://localhost:3000
```


## How to Play

* Click on a piece to select it
* Click on a valid square to move the piece
* Players take turns automatically
* Moves are recorded on the right side
* Timer runs for the active player

## Additional Notes

* No external chess libraries were used in this project
* All logic is implemented manually using JavaScript
* The project focuses more on functionality than advanced UI

## Improvements that shold be done

* Full implementation of all chess rules
* Check and checkmate detection improvements
* Highlighting valid moves
* Undo move feature
* Better UI design

## Conclusion

This project helped me understand how to manage state in React and implement game logic step by step. It was a good learning experience in building a real-world interactive application.

