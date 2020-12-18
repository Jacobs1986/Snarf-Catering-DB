export const itemsQuantityTotal = (quantity1, quantity2, quantity3, quantity4) => {
    return parseFloat(quantity1) + parseFloat(quantity2) + parseFloat(quantity3) + parseFloat(quantity4);
}

export const saladQuantityTotal = (quantity1, quantity2, quantity3, quantity4) => {
    return parseFloat(quantity1) + parseFloat(quantity2) + parseFloat(quantity3) + parseFloat(quantity4);
}

export const sidesQuantityTotal = (quantity1, quantity2, quantity3, quantity4, quantity5) => {
    return parseFloat(quantity1) + parseFloat(quantity2) + parseFloat(quantity3) + parseFloat(quantity4) + parseFloat(quantity5);
}

export const drinksQuantityTotal = (quantity1, quantity2, quantity3, quantity4, quantity5, quantity6, quantity7) => {
    return parseFloat(quantity1) + parseFloat(quantity2) + parseFloat(quantity3) + parseFloat(quantity4) + parseFloat(quantity5) + parseFloat(quantity6) + parseFloat(quantity7);
}

export const dessertQuantityTotal = (quantity1, quantity2) => {
    return parseFloat(quantity1) + parseFloat(quantity2);
}