import moment from 'moment';

// Format date and time input
export function formatDateTime(date) {
    let formattedDate = moment(date).format("MM-DD-YYYY");
    return formattedDate;
}

// format the quantity
export function formatQuantity(quantity) {
    for (let [key, value] of Object.entries(quantity)) {
        if (value === '0' || value === "") {
            delete quantity[key]
        }
    }
    // stringify the object
    let string = JSON.stringify(quantity)
    return string
}