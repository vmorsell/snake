import { nextSnakePositions } from './objects';

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
    x: position.xIndex * 16,
    y: position.yIndex * 16,
  };

  return coordinates;
};

export const drawNext = (context: CanvasRenderingContext2D, snake: Snake) => {
  snake.positions = nextSnakePositions(snake.positions, snake.direction);

  snake.positions.forEach((position, index) => {
    const coordinates = position2coordinates(position);
    context.fillStyle = snake.parts[index].color;
    context.fillRect(coordinates.x, coordinates.y, 16, 16);
  });

  setTimeout(() => requestAnimationFrame(() => drawNext(context, snake)), 100);
};
