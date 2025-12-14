/**
 * Реализуйте классы и функции, необходимые для решения
 * упражнения.
 */
function Dimensions(width = 5, height = 3) {
    this.width = width;
    this.height = height;
}

const dimensions = new Dimensions(10, 8);

console.log(dimensions.width);
// => 10
console.log(dimensions.height);
// => 8
