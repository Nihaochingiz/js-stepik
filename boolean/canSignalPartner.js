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


const alarmActive = false;
const guardOnDuty = true;
console.log(canSignalPartner(alarmActive, guardOnDuty));