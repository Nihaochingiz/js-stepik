/**
 * Помогает выбрать между двумя вариантами корма, рекомендуя тот,
 * который идет первым в алфавитном порядке.
 *
 * @param {string} option1 - первый вариант корма
 * @param {string} option2 - второй вариант корма
 * @returns {string} предложение с советом, какой вариант выбрать
 */
function chooseFeed(option1, option2) {
const recommendedOption = option1.localeCompare(option2) <= 0 ? option1 : option2;
    return `${recommendedOption} - явно лучший выбор.`;
}
console.log(chooseFeed('Роял Канин', 'Проплан'));
// => 'Проплан - явно лучший выбор.'
console.log(chooseFeed("Хиллс", "Акана"));
// => 'Акана - явно лучший выбор.'