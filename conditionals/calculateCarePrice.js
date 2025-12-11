/**
 * Рассчитывает приблизительную стоимость ежемесячного ухода за питомцем
 * на основе базовой стоимости корма и возраста животного.
 *
 * @param {number} baseFeedPrice - базовая стоимость корма
 * @param {number} age - возраст питомца в годах
 * @returns {number} ожидаемая стоимость ухода за питомцем
 */
function calculateCarePrice(baseFeedPrice, age) {
  if (age < 1) {
    return baseFeedPrice * 1.2;
  } else if (age > 7) {
    return baseFeedPrice * 1.5;
  } else {
    return baseFeedPrice;
  }
}


console.log(calculateCarePrice(2000, 0.5));
// => 2400
console.log(calculateCarePrice(2000, 3));
// => 2000
console.log(calculateCarePrice(2000, 10));
// => 3000