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

export const randomUnoccupiedPosition = (
  snake?: Snake,
  foods?: Array<Food>,
): BoardPosition => {
  const snakePositions = snake ? snake.positions : [];
  const foodPositions = foods ? foods.map(food => food.position) : [];
  const occupied: Array<BoardPosition> = [...snakePositions, ...foodPositions];

  const randomize = (occupied: Array<BoardPosition>): BoardPosition => {
    const randomPosition: BoardPosition = {
      xIndex: Math.floor(Math.random() * config.board.width),
      yIndex: Math.floor(Math.random() * config.board.height),
    };

    const exists = occupied.some(
      position =>
        position.xIndex === randomPosition.xIndex &&
        position.yIndex === randomPosition.yIndex,
    );

    return !exists ? randomPosition : randomize(occupied);
  };

  return randomize(occupied);
};
