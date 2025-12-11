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

/**
 * Наблюдение полезно, когда хотя бы одна система активна
 *
 * @param {boolean} camerasActive - активны ли камеры наблюдения
 * @param {boolean} alarmActive - активна ли сигнализация
 *
 * @returns {boolean} Можно ли проводить наблюдение
 */
function canSurveillance(camerasActive, alarmActive) {
  return camerasActive || alarmActive ? true : false;
}

/**
 * Сигнал будет перехвачен, если сигнализация активна или охранник на посту
 *
 * @param {boolean} alarmActive - активна ли сигнализация
 * @param {boolean} guardOnDuty - находится ли охранник на посту
 *
 * @returns {boolean} Можно ли отправить сигнал партнеру
 */
function canSignalPartner(alarmActive, guardOnDuty) {
  return !alarmActive && !guardOnDuty ? true : false;
}

/**
 * Финальная стадия плана: кража ценного артефакта.
 * Использует ранее определенные функции для принятия решения
 *
 * @param {boolean} laserSensorsActive - активны ли лазерные датчики
 * @param {boolean} camerasActive - активны ли камеры наблюдения
 * @param {boolean} alarmActive - активна ли сигнализация
 * @param {boolean} guardOnDuty - находится ли охранник на посту
 * @param {boolean} insideHelperPresent - есть ли помощник внутри музея
 *
 * @returns {boolean} Можно ли украсть артефакт
 */
function canStealArtifact(
  laserSensorsActive,
  camerasActive,
  alarmActive,
  guardOnDuty,
  insideHelperPresent
) {
  const silentEntryPossible = canExecuteSilentEntry(laserSensorsActive);
  const surveillancePossible = canSurveillance(camerasActive, alarmActive);
  const signalPossible = canSignalPartner(alarmActive, guardOnDuty);

  if (insideHelperPresent) {
    return silentEntryPossible && !surveillancePossible;
  } else {
    return silentEntryPossible && !surveillancePossible && signalPossible;
  }
}

const laserSensorsActive = false;
const camerasActive = true;
const alarmActive = false;
const guardOnDuty = false;
const insideHelperPresent = false;

console.log(canStealArtifact(
  laserSensorsActive,
  camerasActive,
  alarmActive,
  guardOnDuty,
  insideHelperPresent
));
// => false
