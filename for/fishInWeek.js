/**
 * Вычисляет общее количество рыб, наблюдавшихся за конкретную неделю.
 *
 * @param {number[]} fishPerDay - массив количества рыб за каждый день
 * @param {number} week - номер недели (начиная с 1)
 * @returns {number} количество рыб за указанную неделю
 */
function fishInWeek(fishPerDay, week) {
    const DAYS_IN_WEEK = 7;
    let sumFish = 0;
    
    const startIndex = (week - 1) * DAYS_IN_WEEK;
    const endIndex = Math.min(startIndex + DAYS_IN_WEEK, fishPerDay.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        sumFish += fishPerDay[i];
    }
    
    return sumFish;
}

const fishPerDay = [3, 8, 2, 5, 7, 1, 4, 2, 6, 3, 1, 2, 5, 3];
console.log(fishInWeek(fishPerDay, 1)); // => 30
console.log(fishInWeek(fishPerDay, 2)); // => 18