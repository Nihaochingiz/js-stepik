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

const camerasActive = true;
const alarmActive = false;
console.log(canSurveillance(camerasActive, alarmActive));
// => true