export const getContext = (canvasId: string): CanvasRenderingContext2D => {
  const canvas = document.getElementById(canvasId);
  if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Can't get context.");

  const context = canvas.getContext('2d');
  if (!(context instanceof CanvasRenderingContext2D))
    throw Error("Can't get context.");

  return context;
};

export const position2coordinate = (
  position: BoardPosition,
): BoardCoordinate => {
  const coordinate: BoardCoordinate = {
    x: position.xIndex * 16,
    y: position.yIndex * 16,
  };

  return coordinate;
};

export const drawSnake = (
  snake: Snake,
  context: CanvasRenderingContext2D,
): void => {
  for (let i = 0; i < snake.positions.length; i += 1) {
    const coordinate = position2coordinate(snake.positions[i]);

    context.fillStyle = snake.parts[i].color;
    context.fillRect(coordinate.x, coordinate.y, 16, 16);
  }
};
