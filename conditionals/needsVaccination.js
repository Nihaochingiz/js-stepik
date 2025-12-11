/**
 * Определяет, нужна ли вакцинация для определенного типа животного.
 *
 * @param {string} animalType - тип животного
 * @returns {boolean} требуется ли вакцинация
 */
function needsVaccination(animalType) {
  return animalType === "собака" || animalType === "кошка" ? true : false;
}

console.log(needsVaccination("собака"));
console.log(needsVaccination("кошка"));
console.log(needsVaccination("хомяк"));
