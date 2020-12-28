export const dessertCalc = (name, value, price1, price2) => {
    var total;
    var stateName;
    switch (name) {
        case "quantityCookie":
            stateName = "totalCookie"
            total = parseFloat(value) * parseFloat(price1)
            return [stateName, total.toFixed(2)]
        case "quantityBrownie":
            stateName = "totalBrownie"
            total = parseFloat(value) * parseFloat(price2)
            return [stateName, total.toFixed(2)]
        default:
    }
}

export const dessertTotal = (total1, total2) => {
    let total = parseFloat(total1) + parseFloat(total2);
    return ["dessertTotal", total.toFixed(2)];
}