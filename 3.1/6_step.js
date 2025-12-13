function scaleRecipe(recipe, servings) {
    const scaleFactor = servings / 4;
    const scaledRecipe = {};
    
    for (const [ingredient, amount] of Object.entries(recipe)) {
        if (typeof amount === 'number') {
            scaledRecipe[ingredient] = amount * scaleFactor;
        } else {
            scaledRecipe[ingredient] = amount;
        }
    }
    
    return scaledRecipe;
}

console.log(scaleRecipe({ "dough": 400, "sauce": 0.5, "cheese": 200 }, 8));