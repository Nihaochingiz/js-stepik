/**
 * Создать поздравительную открытку, включающую оба параметра.
 *
 * @param {string} event - событие для поздравления
 * @param {string} recipient - имя получателя
 *
 * @returns {string} шаблонная строка, объединяющая оба параметра
 */
function createGreeting(event, recipient) {
    return `Поздравляем с ${event}, ${recipient}!`;
}


console.log(createGreeting('Днем рождения', 'Петр'));