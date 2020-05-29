$(document).ready(function () {
    // first get the customer id from the url
    var url = window.location.search;
    var customerId = url.split("=")[1];
    var apiURL = `/api/customers/${customerId}`;

    $.get(apiURL, data => {
        $("#organization").text(data.organization);
        $("#name").text(data.contactname);
        $("#address").text(data.address);
        $("#email").text(data.email);
        $("#phone").text(data.phone);
        // console.log(data);
    })

    displayTable(apiURL);

    // Add order information
    $("#add-order").on("click", event => {
        event.preventDefault();
        console.log("The button is working")
        let order = {
            date: getInfo("#orderdate"),
            orderNumber: getInfo("#ordernumber"),
            orderType: getInfo("#ordertype"),
            numofItems: getInfo("#numberofitems"),
            total: getInfo("#total"),
            notes: getInfo("#notes"),
            CustomerId: customerId
        }
        console.log(order);
        $.post("/api/submit-order", order).then(data => {
            displayTable(apiURL);
            let array = ["#orderdate", "ordernumber", "#numberofitems", "#total", "#notes"]
            array.forEach(input => {
                $(input).val("")
            })
        });
    });

    // Pull up modal that will allow the user to view order information.
})

var getInfo = (input) => $(input).val().trim("")

const displayTable = (url) => {
    $("tbody").empty();
    $.get(url, data => {
        console.log(data);
        let orderHistory = data.Orders;
        orderHistory.forEach(element => {
            $("tbody").append(
                `<tr>
                    <td>${element.date}</td>
                    <td><a href="#" onclick="loadModal(event);" id='${element.id}'>${element.orderNumber}</a></td>
                    <td>${element.orderType}</td>
                    <td>${element.total}</td>
                </tr>`)
        })
    })
}

loadModal = (event) => {
    event.preventDefault();
    console.log("You clicked the link!")
    console.log(`The id for the link is ${event.target.id}`);
}