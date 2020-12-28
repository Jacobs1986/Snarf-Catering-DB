export const itemsCalc= (name, value, price1, price2, price3, price4) => {
    var total;
    var stateName;
    switch (name) {
        case "quantityPlatter":
            stateName = "totalPlatter"
            total = parseFloat(value) * parseFloat(price1)
            return [stateName, total.toFixed(2)]
        case "quantityGlutenFree":
            stateName = "totalGlutenFree"
            total = parseFloat(value) * parseFloat(price2)
            return [stateName, total.toFixed(2)]
        case "quantityBrownBag":
            stateName = "totalBrownBag"
            total = parseFloat(value) * parseFloat(price3)
            return [stateName, total.toFixed(2)]
        case "quantityBoxLunch":
            stateName = "totalBoxLunch"
            total = parseFloat(value) * parseFloat(price4)
            return [stateName, total.toFixed(2)]
        default:
    }
}

export const itemsTotal = (total1, total2, total3, total4) => {
    let total = parseFloat(total1) + parseFloat(total2) + parseFloat(total3) + parseFloat(total4);
    return ["itemsTotal", total.toFixed(2)];
}