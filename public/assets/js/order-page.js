$(document).ready(function () {
    // first get the customer id from the url
    var url = window.location.search;
    var customerId = url.split("=")[1];

    $.get(`/api/customers/${customerId}`, data => {
        $("#organization").text(data.organization);
        $("#name").text(data.contactname);
        $("#address").text(data.address);
        $("#email").text(data.email);
        $("#phone").text(data.phone);
    })

    $("#add-order").on("click", event => {
        event.preventDefault();
        console.log("The button is working")
        let order = {
            date: getInfo("#orderdate"),
            orderType: getInfo("#ordertype"),
            numofItems: getInfo("#numberofitems"),
            total: getInfo("#total"),
            notes: getInfo("#notes"),
            CustomerId: customerId
        }
        console.log(order);
    })
})

var getInfo = (input) => $(input).val().trim("")