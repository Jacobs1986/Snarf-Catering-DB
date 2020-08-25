export const extraCalc = (name, value, price1, price2, price3, price4, price5, price6) => {
    var total;
    var stateName;
    switch (name) {
        case "quantityArtichoke":
            stateName = "totalArtichoke"
            total = parseFloat(value) * parseFloat(price1)
            return [stateName, total.toFixed(2)]
        case "quantityBacon":
            stateName = "totalBacon"
            total = parseFloat(value) * parseFloat(price2)
            return [stateName, total.toFixed(2)]
        case "quantityPortobello":
            stateName = "totalPortobello"
            total = parseFloat(value) * parseFloat(price3)
            return [stateName, total.toFixed(2)]
        case "quantityAvocado":
            stateName = "totalAvocado"
            total = parseFloat(value) * parseFloat(price4)
            return [stateName, total.toFixed(2)]
        case "quantityMeat":
            stateName = "totalMeat"
            total = parseFloat(value) * parseFloat(price5)
            return [stateName, total.toFixed(2)]
        case "quantityGFBread":
            stateName = "totalGFBread"
            total = parseFloat(value) * parseFloat(price6)
            return [stateName, total.toFixed(2)]
        default:
    }
}

export const extraTotal = (total1, total2, total3, total4, total5, total6) => {
    let total = parseFloat(total1) + parseFloat(total2) + parseFloat(total3) + parseFloat(total4) + parseFloat(total5) + parseFloat(total6);
    return ["extraTotal", total.toFixed(2)];
}