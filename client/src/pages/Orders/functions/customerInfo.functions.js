export const customerInfo = () => {
    let url = window.location.search;
    let customerId = url.split('=')[1];
    return customerId;
}