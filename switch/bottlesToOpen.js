/**
 * Вычисляет количество бутылок молока, которые нужно открыть,
 * чтобы получить необходимое количество молока.
 *
 * @param {number} milkNeeded - необходимое количество молока в миллилитрах
 * @param {string[]} bottles - массив размеров бутылок
 * @returns {number} количество открытых бутылок
 */
function bottlesToOpen(milkNeeded, bottles) {
    let totalMilk = 0;
    let bottlesOpened = 0;
    
    for (let i = 0; i < bottles.length; i++) {
        let milkFromBottle = 0;
        

        switch (bottles[i]) {
            case 'маленькая':
                milkFromBottle = 250;
                break;
            case 'средняя':
                milkFromBottle = 500;
                break;
            case 'большая':
                milkFromBottle = 1000;
                break;
            default:
                milkFromBottle = 0;
        }
        

        totalMilk += milkFromBottle;
        bottlesOpened++;
        
        if (totalMilk >= milkNeeded) {
            break;
        }
    }
    
    return bottlesOpened;
}


console.log(bottlesToOpen(1200, ["большая", "средняя", "маленькая", "маленькая"]));
