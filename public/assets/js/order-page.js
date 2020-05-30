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
        // console.log(data);
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
    $.get(`/api/orders/${event.target.id}`).then(data => {
        console.log(data);
        $("#modal-date").text(data.date);
        $("#modal-type").text(data.orderType);
        $("#modal-number").text(data.numofItems);
        $("#modal-total").text(data.total)
        $("#modal-notes").text(data.notes);
        $("#modal-order-info").modal("show");
    })
}

$("#modal-edit").on("click", event => {
    event.preventDefault();
    // First I need to get the text from the CURRENT paragraphs
    var date = $("#modal-date").text();
    var type = $("#modal-type").text();
    var number = $("#modal-number").text();
    var total = $("#modal-total").text();
    var note = $("#modal-notes").text();
    // The paragraphs need to be replaced with inputs containing the text
    $("#modal-date").replaceWith("<input type='date' id='modal-date'>");
    $("#modal-date").val(date);
    $("#modal-type").replaceWith(`
        <input list='ordertypes' id='modal-order'>
        <datalist id='ordertypes'>
            <option value='Platter'>
            <option value='Box-Lunch'>
        </datalist>
    `)
    // $("#modal-order").val(type);
    $("#modal-number").replaceWith("<input type='number' id='modal-number'>");
    $("#modal-number").val(number);
    $("#modal-total").replaceWith("<input type='text' id='modal-total'>");
    $("#modal-total").val(total);
    $("#modal-notes").replaceWith("<textarea cols='30' rows='5' id='modal-notes'></textarea>");
    $("#modal-notes").text(note);
    // replace buttons
    $("#modal-edit").replaceWith("<button type='button' class='btn btn-primary' id='modal-submit'>Submit</button>");
    $("#modal-delete").remove();
})