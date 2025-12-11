/**
 * Скрытое проникновение возможно, когда лазерные датчики отключены
 *
 * @param {boolean} laserSensorsActive - активны ли лазерные датчики
 *
 * @return {boolean} Можно ли выполнить скрытое проникновение
 */
function canExecuteSilentEntry(laserSensorsActive) {
  return !laserSensorsActive;
}


const laserSensorsActive = true;
console.log(canExecuteSilentEntry(laserSensorsActive));