export const orderInfo = (api) => {
    let url = window.location.search;
    let customerId = url.split("=")[1];
    api.info(customerId).then(result => {
        console.log(result);
    })
}