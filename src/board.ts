import { nextSnakePositions } from './objects';
import { config } from './config';

export const getContext = (canvasId: string): CanvasRenderingContext2D => {
  const canvas = document.getElementById(canvasId);
  if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Can't get context.");

  const context = canvas.getContext('2d');
  if (!(context instanceof CanvasRenderingContext2D))
    throw Error("Can't get context.");

  return context;
};

export const position2coordinates = (
  position: BoardPosition,
): BoardCoordinate => {
  const coordinates: BoardCoordinate = {
    x: position.xIndex * config.board.tileSize,
    y: position.yIndex * config.board.tileSize,
  };

  return coordinates;
};

const drawBackground = (context: CanvasRenderingContext2D): void => {
  context.fillStyle = 'white';
  context.fillRect(
    0,
    0,
    config.board.width * config.board.tileSize,
    config.board.height * config.board.tileSize,
  );
};

export const getBackgroundCanvas = (): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = config.board.width * config.board.tileSize;
  canvas.height = config.board.height * config.board.tileSize;

  const context = <CanvasRenderingContext2D>canvas.getContext('2d');
  drawBackground(context);

  return canvas;
};

export const drawNext = (
  context: CanvasRenderingContext2D,
  background: HTMLCanvasElement,
  snake: Snake,
) => {
  snake.positions = nextSnakePositions(snake.positions, snake.direction);

  context.drawImage(background, 0, 0);

  snake.positions.forEach((position, index) => {
    const coordinates = position2coordinates(position);
    context.fillStyle = snake.parts[index].color;
    context.fillRect(
      coordinates.x,
      coordinates.y,
      config.board.tileSize,
      config.board.tileSize,
    );
  });

  setTimeout(
    () => requestAnimationFrame(() => drawNext(context, background, snake)),
    100,
  );
};
