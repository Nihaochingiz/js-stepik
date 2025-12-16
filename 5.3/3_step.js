/**
 * Класс ошибки для некорректных аргументов
 */
class ArgumentError extends Error {}

/**
 * Класс ошибки для превышения давления
 */
class PressureError extends Error {
  constructor(pressure) {
    super(`Давление ${pressure} атм! Превышение допустимого уровня!`);
    this.pressure = pressure;
  }
}

/**
 * Проверяет давление в системе и выбрасывает соответствующие ошибки.
 *
 * @param {number|null} pressure - Давление в атмосферах или null, если датчик сломан
 * @throws {ArgumentError} Выбрасывается, если датчик сломан (pressure === null)
 * @throws {PressureError} Выбрасывается, если давление превышает 8 атмосфер
 */
function reportPressureIssue(pressure) {

    if (pressure === null) {
        throw new ArgumentError("null");

    }
    
    if (pressure > 8) {
        throw new PressureError(pressure);

    };
}

console.log(reportPressureIssue(null));
console.log(reportPressureIssue(12));
