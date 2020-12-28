export const saladCalc = (name, value, price1, price2, price3, price4) => {
    var total;
    var stateName;
    switch (name) {
        case "quantityCobb":
            stateName = "totalCobb"
            total = parseFloat(value) * parseFloat(price1)
            return [stateName, total.toFixed(2)]
        case "quantityGreek":
            stateName = "totalGreek"
            total = parseFloat(value) * parseFloat(price2)
            return [stateName, total.toFixed(2)]
        case "quantitySnarf":
            stateName = "totalSnarf"
            total = parseFloat(value) * parseFloat(price3)
            return [stateName, total.toFixed(2)]
        case "quantityTossed":
            stateName = "totalTossed"
            total = parseFloat(value) * parseFloat(price4)
            return [stateName, total.toFixed(2)]
        default:
    }
}

export const saladTotal = (total1, total2, total3, total4) => {
    let total = parseFloat(total1) + parseFloat(total2) + parseFloat(total3) + parseFloat(total4);
    return ["saladTotal", total.toFixed(2)];
}