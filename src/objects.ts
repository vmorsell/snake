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

export const nextSnakePositions = (
  positions: Array<BoardPosition>,
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | undefined,
): Array<BoardPosition> => {
  const offset = {
    xIndex: (direction === 'LEFT' && -1) || (direction === 'RIGHT' && 1) || 0,
    yIndex: (direction === 'UP' && -1) || (direction === 'DOWN' && 1) || 0,
  };

  const nextPosition = {
    xIndex: positions[0].xIndex + offset.xIndex,
    yIndex: positions[0].yIndex + offset.yIndex,
  };

  return [nextPosition, ...positions.slice(0, -1)];
};
