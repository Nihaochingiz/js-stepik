/**
 * Определяет сообщение об ошибке для пользовательского ввода.
 *
 * @param {string|null|undefined} input - Пользовательский ввод
 * @returns {string} сообщение об ошибке или пустая строка
 */
function inputValidation(input) {

    if (input === null || input === undefined || input === '') {
        return  'Обязательное поле'
    }
    
    const number = parseFloat(input);

    if (isNaN(number) || number <= 0) {
        return  'Должно быть положительным числом'
    }
    return '';
}


console.log(inputValidation('42'));
// => ''
console.log(inputValidation(''));
// => 'Обязательное поле'
console.log(inputValidation('-5'));
// => 'Должно быть положительным числом'
