let manager = (function () {
    const ingredient = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipesObj = {
        'apple': {
            carbohydrate: 1,
            flavour: 2
        },
        'coke': {
            carbohydrate: 10,
            flavour: 20
        },
        'burger': {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        'omelet': {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        'cheverme': {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        } 
    };

    const prepareRecipe = (recipe, neededQuantity) => {
        const neededIngredients = Object.entries(recipesObj[recipe]);
        for (const [ing, qty] of neededIngredients) {
            const ingredientStored = ingredient[ing] * neededQuantity;
            if (qty > ingredientStored) {
                return `Error: not enough ${ing} in stock`;
            }
        }

        for (const [ing, qty] of neededIngredients) {
            ingredient[ing] -= qty * neededQuantity;
        }

        return 'Success';
    }

    return function (input) {
        const tokens = input.split(' ');
        const command = tokens[0];

        switch (command) {
            case 'restock':
                ingredient[tokens[1]] += Number(tokens[2]);
                return 'Success';
            case 'prepare':
                return prepareRecipe(tokens[1], Number(tokens[2]));
            case 'report':
                return Object.entries(ingredient).map((kvp) => `${kvp[0]}=${kvp[1]}`).join(' ');
        }
    }
})()