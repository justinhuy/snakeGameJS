const playBoard = document.querySelector('.play-board')

let foodX, foodY

let snakeX = 5,
 snakeY = 10

let snakeBody = []

let velocityX = 0,
 velocityY = 0

let changeDirection = e => {
 // Changing velocity value based on key press
 if (e.key === 'ArrowUp') {
  velocityX = 0
  velocityY = -1
 } else if (e.key === 'ArrowDown') {
  velocityX = 0
  velocityY = 1
 } else if (e.key === 'ArrowLeft') {
  velocityX = -1
  velocityY = 0
 } else if (e.key === 'ArrowRight') {
  velocityX = 1
  velocityY = 0
 }
}

const changeFoodPosition = () => {
 // Passing a random 0 - 30 value as food position
 foodX = Math.floor(Math.random() * 30) + 1
 foodY = Math.floor(Math.random() * 30) + 1
}

const initGame = () => {
 let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`

 if (snakeX === foodX && snakeY === foodY) {
  changeFoodPosition()

  //   Checking if snake hit the food
  snakeBody.push([foodX, foodY])
  console.log(snakeBody)
 }

 snakeBody[0] = [snakeX, snakeY] // Setting first element of snake body to current snake position

 // Updating the snake's head position based on the current velocity
 snakeX += velocityX
 snakeY += velocityY

 for (let i = 0; i < snakeBody.length; i++) {
  htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`
 }
 playBoard.innerHTML = htmlMarkup
}

changeFoodPosition()
setInterval(initGame, 125)
document.addEventListener('keydown', changeDirection)
