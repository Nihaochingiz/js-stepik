/**
 * Создает нового гостя в системе отеля.
 *
 * @param {string} name - Имя гостя
 * @param {number} age - Возраст гостя
 * @param {string} bookingId - Идентификатор бронирования
 * @returns {Object} Объект гостя с полями name, age и bookingId
 */
function createGuest(name, age, bookingId) {
    return {
        name: name,
        age: age,
        bookingId: bookingId,
    }
}

console.log(createGuest('Анна Петрова', 32, 'BR45XY789'));
// => { name: 'Анна Петрова', age: 32, bookingId: 'BR45XY789' }