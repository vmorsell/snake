import { getContext, getBackgroundCanvas, drawNext } from './board';
import { createSnake } from './objects';
import { handleKeyPressed } from './listeners';

const game = () => {
  try {
    const context = getContext('canvas');
    const snake = createSnake();

    const background = getBackgroundCanvas();

    drawNext(context, background, snake);

    document.addEventListener('keydown', event => {
      handleKeyPressed(event, snake);
    });
  } catch (error) {
    console.error(error);
  }
};

game();
