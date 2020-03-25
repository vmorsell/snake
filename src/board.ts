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
