import { getContext } from './board';
import { draw } from './drawing';
import {
  createSnake,
  createBackground,
  createFood,
  nextSnakePositions,
} from './components';
import { handleKeyPressed } from './listeners';

const game = () => {
  try {
    const context = getContext('canvas');

    const snake = createSnake();
    const background = createBackground();
    const foods: Array<Food> = [];

    setInterval(() => {
      requestAnimationFrame(() => {
        if (Math.random() > 0.95) {
          const food = createFood();
          foods.push(food);
        }

        snake.positions = nextSnakePositions(snake);

        const ateFoodIndex = foods.findIndex(
          food =>
            food.position.xIndex === snake.positions[0].xIndex &&
            food.position.yIndex === snake.positions[0].yIndex,
        );

        if (ateFoodIndex !== -1) {
          foods.splice(ateFoodIndex, 1);

          const snakePart: SnakePart = { color: 'blue' };

          snake.parts.push(snakePart);
          snake.positions.push(snake.positions[snake.positions.length - 1]);
        }

        draw(context, background, snake, foods);
      });
    }, 100);

    document.addEventListener('keydown', event => {
      handleKeyPressed(event, snake);
    });
  } catch (error) {
    console.error(error);
  }
};

game();
