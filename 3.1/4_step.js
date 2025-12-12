function quantities(products) {
    let dough = 0;
    let sauce = 0;

    for (i = 0; i < products.length; i++) {
            
            if (products[i] === 'dough') {
                dough++;
            }

            if (products[i] === 'sauce') {
                sauce++;
            }
    }

    let needDough = dough * 200;
    let needSauce = sauce * 0.1;
    
    return {"dough":needDough,"sauce":needSauce}
}

console.log(quantities(["dough", "sauce", "cheese", "sauce", "pepperoni"]));