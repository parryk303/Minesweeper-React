# Minesweeper-React
MiniApps fullstack practice #4. Use facebook/create-react-app to create a full-stack implementation of Minesweeper.

# Requirements
> Use: React for all the components
> Use: Redux to store your gameplay state
> Write: Jest tests to verify your gameplay logic and presentation logic. Achieve 80% test coverage
> Build: UI using ReactJS and bundle with Webpack
> Add: CSS to style your game

> Gameplay Rules:
Gameplay Rules

On each turn, the user clicks on a square to uncover it. If the square:

Contains a mine, the user loses, and the game is over!
Is adjacent to a mine, the square displays the total number of mines in the 8 squares around it.

Is not adjacent to a mine, the square is blank and should behave as if the 8 adjacent squares were also clicked. For each of those squares, their neighboring squares continue to be revealed in each direction (i.e., this step is applied recursively to all neighboring squares) until the edge of the board is reached or until a square is reached that is adjacent to a mine, in which case the previous rule applies.

The last rule winds up uncovering large areas of the board in one turn. This helps speed up gameplay. The user wins when they uncover all squares that don’t have mines.

# Set Up
> Run the following commands from the root of this repository
```
npm i
```
```
npm run build
```
```
npm start
```

# Final Product

![final product](./Minesweeper.png)