const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Set canvas props

canvas.width = 600;
canvas.height = 600;

//score

let score = 0;
const h1 = document.getElementById("score");
h1.textContent = `${score}`;
//  initial snake

// Events

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 68) {
    // right
    snake.head.x++;
  }
  if (e.keyCode === 65) {
    // left
    snake.head.x--;
  }
  if (e.keyCode === 87) {
    // up
    snake.head.y--;
  }
  if (e.keyCode === 83) {
    // down
    snake.head.y++;
  }
});

const block = 20;

const snake = {
  head: {
    x: 10,
    y: 10,
  },
  tail: [],
};

//foodObject
const food = {
  x: Math.floor(Math.random() * 30) + 1,
  y: Math.floor(Math.random() * 30) + 1,
};

// Main function

game();
setInterval(game, 100);

// functions

function game() {
  clearCanvas();
  draw();
  checkCollision();
}

function clearCanvas() {
  ctx.fillStyle = "rgb(255,255,240)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  drawHead();
  drawFood();

  function drawHead() {
    ctx.fillStyle = "red";
    ctx.fillRect(snake.head.x * block, snake.head.y * block, block, block);
  }

  function drawFood() {
    ctx.fillStyle = "rgba(241, 157, 0, 1)";
    ctx.fillRect(food.x * block, food.y * block, block, block);
  }
}

function checkCollision() {
  if (snake.head.x === food.x && snake.head.y === food.y) {
    updateScore();
    updateFoodCords();

    //push coords of tail
    snake.tail.push({
      tailX: ``, // ?
      tailY: ``, // ?
    });
  }
  function updateScore() {
    score++;
    h1.textContent = `${score}`;
  }

  function updateFoodCords() {
    food.x = Math.floor(Math.random() * 30) + 1;
    food.y = Math.floor(Math.random() * 30) + 1;
  }
}
