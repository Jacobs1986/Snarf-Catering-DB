export const largeSandwichCalc= (name, value, price1) => {
    var total;
    var stateName;
    switch (name) {
        case "quantityRegNovice":
            stateName = "totalRegNovice"
            total = parseFloat(value) * parseFloat(price1)
            return [stateName, total.toFixed(2)]
        default:
    }
}