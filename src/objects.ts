export const createSnake = (): Snake => {
  const position: BoardPosition = {
    xIndex: Math.floor(Math.random() * 10),
    yIndex: Math.floor(Math.random() * 10),
  };

  const part: SnakePart = { color: 'red' };

  const direction = undefined;

  return {
    direction,
    positions: [position],
    parts: [part],
  };
};
