export const buyIngredient = (ingredient) => ({
    type: "BUY_INGREDIENT",
    payload: ingredient
});

export const fillStock = (ingredients) => ({
    type: "FILL_STOCK",
    payload: ingredients
});
