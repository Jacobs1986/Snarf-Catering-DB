export const sideCalc = (name, value, price1, price2, price3, price4, price5) => {
    var total;
    var stateName;
    switch (name) {
        case "quantityMacaroni":
            stateName = "totalMacaroni"
            total = parseFloat(value) * parseFloat(price1)
            return [stateName, total.toFixed(2)]
        case "quantityPotato":
            stateName = "totalPotato"
            total = parseFloat(value) * parseFloat(price2)
            return [stateName, total.toFixed(2)]
        case "quantityColeslaw":
            stateName = "totalColeslaw"
            total = parseFloat(value) * parseFloat(price3)
            return [stateName, total.toFixed(2)]
        case "quantityPickles":
            stateName = "totalPickle"
            total = parseFloat(value) * parseFloat(price4)
            return [stateName, total.toFixed(2)]
        case "quantityChips":
            stateName = "totalChip"
            total = parseFloat(value) * parseFloat(price5)
            return [stateName, total.toFixed(2)]
        default:
    }
}

export const sideTotal = (total1, total2, total3, total4, total5) => {
    let total = parseFloat(total1) + parseFloat(total2) + parseFloat(total3) + parseFloat(total4) + parseFloat(total5);
    return ["sidesTotal", total.toFixed(2)];
}