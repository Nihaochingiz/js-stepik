/**
 * Создать свадебную открытку, условно форматирующую возвращаемую строку.
 *
 * @param {number} years - количество лет в браке
 *
 * @returns {string} шаблонная строка на основе количества лет
 */
function createWeddingCard(years) {
    let property;
    if (years >= 25) {
        property = 'опытная'
    } else {
        property = 'молодая';
    }
    return `Поздравляем с годовщиной! Какая ${property} пара вы есть.`;
}

console.log(createWeddingCard(25));
// => "Поздравляем с годовщиной! Какая опытная пара вы есть."

console.log(createWeddingCard(15));
// => "Поздравляем с годовщиной! Какая молодая пара вы есть."
