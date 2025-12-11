function multiplyScalar2d(scalar) {
  // Возвращаем функцию, которая "запоминает" скаляр через замыкание
  return function(matrix) {
    // Создаем результирующую матрицу 2x2
    const result = [
      [0, 0],
      [0, 0]
    ];
    
    // Умножаем каждый элемент матрицы на скаляр
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        result[i][j] = scalar * matrix[i][j];
      }
    }
    
    return result;
  };
}

// Пример использования:
const doubleMatrix = multiplyScalar2d(2);
const result = doubleMatrix([[1, -2], [3, 4]]);
console.log(result); // [[2, -4], [6, 8]]