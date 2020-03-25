interface BoardPosition {
  xIndex: number;
  yIndex: number;
}

interface BoardCoordinate {
  x: number;
  y: number;
}

interface SnakePart {
  color: string;
}

interface Snake {
  positions: Array<BoardPosition>;
  parts: Array<SnakePart>;
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | undefined;
}

interface Food {
  position: BoardPosition;
}
