/**
 * Реализуйте классы и функции, необходимые для решения
 * упражнения.
 */
function Dimensions(width = 100, height = 80) {
  this.width = width;
  this.height = height;
}

function Coordinates(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Coordinates.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

class Robot {
  constructor() {
    this.gridSize = new Dimensions(100, 80);
    this.dimensions = new Dimensions(5, 3);
    this.coordinates = new Coordinates(0, 0);
  }

  move(newCoordinates) {
    const minX = 0;
    const minY = 0;

    const maxX = this.gridSize.width - this.dimensions.width;
    const maxY = this.gridSize.height - this.dimensions.height;

    let finalX = newCoordinates.x;
    let finalY = newCoordinates.y;

    if (finalX < minX) finalX = minX;
    if (finalY < minY) finalY = minY;

    if (finalX > maxX) finalX = maxX;
    if (finalY > maxY) finalY = maxY;

    this.coordinates.move(finalX, finalY);
  }
}