export const buyIngredient = (ingredients) => ({
    type: "BUY_INGREDIENT",
    payload: ingredients
});

export const fillStock = (ingredients) => ({
    type: "FILL_STOCK",
    payload: ingredients
});
