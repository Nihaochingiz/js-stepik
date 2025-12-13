function addSecretIngredient(firstArr, secondArr) {
    secondArr.push(firstArr[firstArr.length - 1]);
}


console.log(addSecretIngredient(["dough", "sauce", "oregano"], ["dough", "cheese"]));