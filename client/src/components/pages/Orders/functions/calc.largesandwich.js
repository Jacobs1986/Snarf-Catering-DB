export const largeSandwichCalc = (name, value, price1, price2, price3) => {
    var total;
    var stateName;
    switch (name) {
        case "quantityRegNovice":
            stateName = "totalRegNovice"
            total = parseFloat(value) * parseFloat(price1)
            return [stateName, total.toFixed(2)]
        case "quantityRegSnarf":
            stateName = "totalRegSnarf"
            total = parseFloat(value) * parseFloat(price2)
            return [stateName, total.toFixed(2)]
        case "quantityRegPro":
            stateName = "totalRegPro"
            total = parseFloat(value) * parseFloat(price3)
            return [stateName, total.toFixed(2)]
        default:
            console.log("There is something wrong!")
    }
}

export const largeSandwichTotal = (total1, total2, total3) => {
    let total = parseFloat(total1) + parseFloat(total2) + parseFloat(total3);
    return ["largeSandwichTotal", total.toFixed(2)];
}