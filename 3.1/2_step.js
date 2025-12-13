function bakingStatus(remainingTime) {

    if (remainingTime === undefined) {
        return 'Вы забыли установить таймер.';
    }

    if (remainingTime === 0) {
        return 'Пицца готова.';
    }
    return 'Не готова, подождите ещё.';
}
console.log(bakingStatus(0))
console.log(bakingStatus(15))
console.log(bakingStatus())