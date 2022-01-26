const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");
const H = 735;
const W = 1200;
const cs = 67;
pen.fillStyle = "yellow";
pen.font = "40px sans-serif";
let score = 0;
let food = null;

class Snake {
  constructor() {
    this.init_len = 5;
    this.direction = "right";
    this.cells = [];
  }
  createSnake() {
    for (let i = 0; i < this.init_len; i++) {
      this.cells.push({ x: i, y: 0 });
    }
  }
  drawSnake() {
    for (let i = 0; i < this.cells.length; i++) {
      let cell = this.cells[i];
      if (i === this.cells.length - 1) {
        pen.fillStyle = "red";
      } else {
        pen.fillStyle = "green";
      }
      pen.fillRect(cell.x * cs, cell.y * cs, cs - 2, cs - 2);
    }
  }
  changeSnakeDirection(key) {
    this.direction = key;
  }
  updateSnake() {
    const headX = this.cells[this.cells.length - 1].x;
    const headY = this.cells[this.cells.length - 1].y;

    let nextX = null;
    let nextY = null;
    if (food.x == headX && food.y == headY) {
      food = getRandomFood();
      score++;
    } else {
      this.cells.shift();
    }

    if (headX * cs >= W || headY * cs >= H || headX < 0 || headY < 0) {
      pen.fillText("Game Over", 100, 100);
      clearInterval(id);
    }

    if (this.direction === "left") {
      nextX = headX - 1;
      nextY = headY;
    } else if (this.direction === "up") {
      nextX = headX;
      nextY = headY - 1;
    } else if (this.direction === "down") {
      nextX = headX;
      nextY = headY + 1;
    }
    if (this.direction === "right") {
      nextX = headX + 1;
      nextY = headY;
    }

    this.cells.push({ x: nextX, y: nextY });
  }
}

function getRandomFood() {
  const foodX = Math.floor((Math.random() * (W - cs)) / cs);
  const foodY = Math.floor((Math.random() * (H - cs)) / cs);

  return { x: foodX, y: foodY };
}

const snake = new Snake();

function init() {
  snake.createSnake();
  snake.drawSnake();
  pen.fillStyle = "orange";
  pen.fillText(`Score : ${score}`, 100, 50);
  food = getRandomFood();
  pen.fillRect(food.x * cs, food.y * cs, cs - 2, cs - 2);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      snake.changeSnakeDirection("right");
    } else if (e.key === "ArrowLeft") {
      snake.changeSnakeDirection("left");
    } else if (e.key === "ArrowUp") {
      snake.changeSnakeDirection("up");
    } else if (e.key === "ArrowDown") {
      snake.changeSnakeDirection("down");
    }
  });
}

function draw() {
  pen.clearRect(0, 0, W, H);
  pen.fillStyle = "orange";
  pen.fillText(`Score : ${score}`, 100, 50);
  pen.fillRect(food.x * cs, food.y * cs, cs - 2, cs - 2);
  snake.drawSnake();
}

function update() {
  snake.updateSnake();
}
function gameLoop() {
  draw();
  update();
}

init();
let id = setInterval(gameLoop, 200);
