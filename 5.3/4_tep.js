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
 * Выполняет мониторинг системы давления и реагирует на различные ошибки.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertHighPressure: function,
 * shutdown: function
 * }} actions - Объект с функциями для различных действий
 * @param {function} actions.check - Функция проверки давления
 * @param {function} actions.alertDeadSensor - Функция оповещения о неисправном датчике
 * @param {function} actions.alertHighPressure - Функция включения предупреждающего сигнала
 * @param {function} actions.shutdown - Функция отключения системы
 * @throws {ArgumentError|PressureError|Error} Может перебросить различные типы ошибок
 */
function monitorPressureSystem(actions) {
  try {
    actions.check();
  } catch (error) {

    if (error instanceof ArgumentError) {

    } else if (error instanceof PressureError) {

      if (error.pressure > 10) {
        actions.shutdown();
        
      } else {
        actions.alertHighPressure();
      }

    } else {
      throw error;
    }
  }
}
