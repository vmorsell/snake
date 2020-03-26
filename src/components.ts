import { randomUnoccupiedPosition } from './board';
import { drawBackground } from './drawing';
import { config } from './config';

export const createSnake = (): Snake => {
  const position = randomUnoccupiedPosition();
  const part: SnakePart = { color: 'red' };
  const direction = undefined;

  return {
    direction,
    positions: [position],
    parts: [part],
  };
};

export const createBackground = (): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = config.board.width * config.board.tileSize;
  canvas.height = config.board.height * config.board.tileSize;

  const context = <CanvasRenderingContext2D>canvas.getContext('2d');
  drawBackground(context);

  return canvas;
};

export const createFood = (snake: Snake, foods: Array<Food>): Food => {
  const position = randomUnoccupiedPosition(snake, foods);

  return { position };
};

export const nextSnakePositions = (snake: Snake): Array<BoardPosition> => {
  if (!snake.direction) {
    return snake.positions;
  }

  const offset = {
    xIndex:
      (snake.direction === 'LEFT' && -1) ||
      (snake.direction === 'RIGHT' && 1) ||
      0,
    yIndex:
      (snake.direction === 'UP' && -1) ||
      (snake.direction === 'DOWN' && 1) ||
      0,
  };

  const nextPosition = {
    xIndex: snake.positions[0].xIndex + offset.xIndex,
    yIndex: snake.positions[0].yIndex + offset.yIndex,
  };

  return [nextPosition, ...snake.positions.slice(0, -1)];
};
