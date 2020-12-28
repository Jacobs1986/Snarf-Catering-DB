export const drinkCalc = (name, value, price1, price2, price3, price4, price5, price6, price7) => {
    var total;
    var stateName;
    switch (name) {
        case "quantityBottled":
            stateName = "totalBottled"
            total = parseFloat(value) * parseFloat(price1)
            return [stateName, total.toFixed(2)]
        case "quantityIzze":
            stateName = "totalIzze"
            total = parseFloat(value) * parseFloat(price2)
            return [stateName, total.toFixed(2)]
        case "quantityArizona":
            stateName = "totalArizona"
            total = parseFloat(value) * parseFloat(price3)
            return [stateName, total.toFixed(2)]
        case "quantityGatorade":
            stateName = "totalGatorade"
            total = parseFloat(value) * parseFloat(price4)
            return [stateName, total.toFixed(2)]
        case "quantitySnapple":
            stateName = "totalSnapple"
            total = parseFloat(value) * parseFloat(price5)
            return [stateName, total.toFixed(2)]
        case "quantityStewart":
            stateName = "totalStewart"
            total = parseFloat(value) * parseFloat(price6)
            return [stateName, total.toFixed(2)]
        case "quantityCan":
            stateName = "totalCan"
            total = parseFloat(value) * parseFloat(price7)
            return [stateName, total.toFixed(2)]
        default:
    }
}

export const drinkTotal = (total1, total2, total3, total4, total5, total6, total7) => {
    let total = parseFloat(total1) + parseFloat(total2) + parseFloat(total3) + parseFloat(total4) + parseFloat(total5) + parseFloat(total6) + parseFloat(total7);
    return ["drinkTotal", total.toFixed(2)];
}