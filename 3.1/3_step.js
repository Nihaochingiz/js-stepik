function preparationTime(products, time) {
    const productsLength = products.length;
    const DEFAULT_TIME = 3;

    if (!time) {
        time = DEFAULT_TIME;
    }
    
    return productsLength * time;

}


console.log(preparationTime(["dough", "sauce", "cheese", "pepperoni"], 4 ));