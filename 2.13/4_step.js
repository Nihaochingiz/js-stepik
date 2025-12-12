const bookings = {
  '0BR5Z123': null,
  '23LA9T41': 'Анна Петрова',
};

/**
 * Определяет статус бронирования в системе отслеживания.
 *
 * @param {Object.<string, string|null>} bookings - Объект отслеживания бронирований
 * @param {string} bookingId - Идентификатор бронирования
 * @returns {string} Статус бронирования
 */
function bookingStatus(bookings, bookingId) {
    // Проверяем, существует ли такой ключ в объекте
    if (!bookings.hasOwnProperty(bookingId)) {
        return 'неизвестный id бронирования';
    }
    
    // Получаем значение по ключу
    const value = bookings[bookingId];
    
    // Проверяем значение
    if (value === null) {
        return 'не забронировано';
    }
    
    // Если значение не null, значит есть имя клиента
    return `забронировано на ${value}`;
}

// Тестирование
console.log(bookingStatus(bookings, 'XY90VAW7'));
// => 'неизвестный id бронирования'

console.log(bookingStatus(bookings, '0BR5Z123'));
// => 'не забронировано'

console.log(bookingStatus(bookings, '23LA9T41'));
// => 'забронировано на Анна Петрова'