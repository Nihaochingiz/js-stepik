/**
 * Реализуйте классы и функции, необходимые для решения
 * упражнения.
 */
function Coordinates(x = 0, y = 0) {
  this.x = x;
  this.y = y;

}

Coordinates.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

const coords = new Coordinates();
coords.x;
// => 0
coords.y;
// => 0

coords.move(25, 40);
coords.x;
// => 25
coords.y;
