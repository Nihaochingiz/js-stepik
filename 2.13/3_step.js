/**
 * Отменяет бронирование для гостя.
 *
 * @param {Object} guest - Объект гостя с активным бронированием
 * @returns {Object} Объект гостя без бронирования (bookingId = null)
 */
function cancelBooking(guest) {
    guest.bookingId = null;
    return guest;
}
const guest = {
  name: 'Анна Петрова',
  age: 32,
  bookingId: 'BR45XY789',
};

console.log(cancelBooking(guest));