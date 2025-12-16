/**
 * Проверяет, не превышает ли уровень вибрации допустимые значения.
 *
 * @param {number} vibrationLevel - Уровень вибрации в децибелах
 * @throws {Error} Выбрасывает ошибку, если уровень вибрации превышает 85 дБ
 */
function checkVibrationLevel(vibrationLevel) {

  if (vibrationLevel > 85) {
        throw new Error("Уровень вибрации превышает 85 дБ");
}}

console.log(checkVibrationLevel(70));
// => undefined

console.log(checkVibrationLevel(90));
// Выбрасывает ошибку
