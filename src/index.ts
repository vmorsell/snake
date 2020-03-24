import { getContext, drawSnake } from './board';
import { createSnake } from './objects';

const game = () => {
  try {
    const context = getContext('canvas');
    const snake = createSnake();

    drawSnake(snake, context);
  } catch (error) {
    console.error(error);
  }
};

game();
