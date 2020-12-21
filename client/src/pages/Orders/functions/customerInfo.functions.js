export const customerInfo = (api) => {
    let url = window.location.search;
    let customerId = url.split('=')[1];
    api.info(customerId).then(results => {
        return results.data.Orders;
    })
}