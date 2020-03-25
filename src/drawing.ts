import { position2coordinates } from './board';
import { config } from './config';

export const drawBackground = (context: CanvasRenderingContext2D): void => {
  context.fillStyle = 'white';
  context.fillRect(
    0,
    0,
    config.board.width * config.board.tileSize,
    config.board.height * config.board.tileSize,
  );
};

export const draw = (
  context: CanvasRenderingContext2D,
  background: HTMLCanvasElement,
  snake: Snake,
) => {
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
};
