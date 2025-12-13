/**
 * Создать открытку с достижением, включающую несколько строк.
 *
 * @param {string} name - имя человека
 * @param {string} achievement - описание достижения
 *
 * @returns {string} многострочная шаблонная строка
 */
function achievementCard(name, achievement) {
    return `Поздравляем ${name}!\nС ${achievement}`;
}


console.log(achievementCard('Михаил', 'получение диплома MBA'));
// => "Поздравляем Михаил!\nС получение диплома MBA"


console.log(achievementCard('Анна', 'защитой диссертации'));
// => "Поздравляем Анна!\nС защитой диссертации"

console.log(achievementCard('Иван', 'победой в конкурсе'));
// => "Поздравляем Иван!\nС победой в конкурсе"