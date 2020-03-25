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
