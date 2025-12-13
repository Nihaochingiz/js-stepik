/**
 * Вычисляет общее количество рыб.
 *
 * @param {number[]} fishPerDay - массив количества рыб за каждый день
 * @returns {number} общее количество рыб
 */
function totalFishCount(fishPerDay) {
    let sumFish = 0;

    for (let i = 0; i < fishPerDay.length; i++) {
        sumFish += fishPerDay[i];
    }
        return sumFish;
}

fishPerDay = [3, 8, 2, 5, 7, 1, 4, 2, 6, 3, 1, 2, 5, 3];
console.log(totalFishCount(fishPerDay));