import { getContext } from './board';
import { draw } from './drawing';
import {
  createSnake,
  createBackground,
  nextSnakePositions,
} from './components';
import { handleKeyPressed } from './listeners';

const game = () => {
  try {
    const context = getContext('canvas');

    const snake = createSnake();
    const background = createBackground();

    setInterval(() => {
      requestAnimationFrame(() => {
        snake.positions = nextSnakePositions(snake);
        draw(context, background, snake);
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
