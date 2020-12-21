export const customerInfo = (api) => {
    let url = window.location.search;
    let customerId = url.split('=')[1];
    api.info(customerId).then(results => {
        let info = results.data.Orders;
        console.log(info);
    })
}