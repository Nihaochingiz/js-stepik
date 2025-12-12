/**
 * Определяет уровень программы лояльности гостя.
 *
 * @param {Object} guest - Объект гостя (может содержать информацию о программе лояльности)
 * @returns {string|undefined} Уровень лояльности или undefined, если информация недоступна
 */
function loyaltyLevel(guest) {
    if (guest?.loyalty?.level) {
        return guest.loyalty.level;
    }
    return undefined;
}


const guestNew = {
  name: 'Анна Петрова',
  age: 32, 
  bookingId: 'BR45XY789',
  loyalty: {
    active: true,
    level: 'gold',
  },
};

console.log(loyaltyLevel(guestNew));
// => 'gold'

const guestOld = {
  name: 'Анна Петрова',
  age: 32,
  bookingId: 'BR45XY789',
};

console.log(loyaltyLevel(guestOld));
// => undefined
