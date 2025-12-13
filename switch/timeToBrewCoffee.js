/**
 * Определяет, сколько времени требуется для приготовления определенного кофейного напитка.
 *
 * @param {string} name - название напитка
 * @returns {number} время в минуты
 */
function timeToBrewCoffee(name) {
    switch (name) {
        case 'Эспрессо':
            return 1;
        case 'Американо':
        case 'Капучино':
            return 2;
        case 'Латте':
            return 3;
        case 'Мокко':
            return 4;
        default:
            return 2.5;
    }
}

