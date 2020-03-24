export const handleKeyPressed = (
  event: DocumentEventMap['keypress'],
  snake: Snake,
): void => {
  const directions = [
    { keyCode: 37, name: 'LEFT', notAllowedAfter: 'RIGHT' },
    { keyCode: 38, name: 'UP', notAllowedAfter: 'DOWN' },
    { keyCode: 39, name: 'RIGHT', notAllowedAfter: 'LEFT' },
    { keyCode: 40, name: 'DOWN', notAllowedAfter: 'UP' },
  ];

  if (event.keyCode >= 37 && event.keyCode <= 40) {
    event.preventDefault();

    const direction = directions.find(
      direction =>
        direction.keyCode === event.keyCode &&
        (!snake.direction ||
          (snake.direction !== direction.name &&
            snake.direction !== direction.notAllowedAfter)),
    );

    if (direction) {
      snake.direction = <'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>direction.name;
    }
  }
};
