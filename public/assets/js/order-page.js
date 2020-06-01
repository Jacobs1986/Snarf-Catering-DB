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

    $("#filterbtn").on("click", event => {
        // Get the value from search-param and the customerId
        // Save those values to a variable called buildFilter, id: customerId, total: search-param
        let buildFilter = "This is a test string."
        console.log(buildFilter)
        // Send buildFilter along the api route /api/filter
        $.get("/api/filter", buildFilter)
            // Once the results come back the table needs to be cleared.
            // If there are no results the table should display "No Results"
            // If there are results then the table should display those results in the table.
    })
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
        $(".modal-title").text(`Order Information for ${data.orderNumber}`);
        $("#modal-date").text(data.date);
        $("#modal-type").text(data.orderType);
        $("#modal-number").text(data.numofItems);
        $("#modal-total").text(data.total)
        $("#modal-notes").text(data.notes);
        $(".modal").attr('id', event.target.id);
        $(".modal").modal("show");
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
        <input list='ordertypes' id='modal-type'>
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
    $("#modal-edit").replaceWith("<button type='button' class='btn btn-primary' onclick='submitEdit(event)'>Submit</button>");
    $("#modal-delete").remove();
})

submitEdit = (event) => {
    event.preventDefault();
    // Get all of the new information from the modal
    let updateOrder = {
        id: $(".modal").attr("id"),
        date: $("#modal-date").val(),
        orderType: $("#modal-type").val(),
        numofItems: $("#modal-number").val(),
        total: $("#modal-total").val(),
        notes: $("#modal-notes").val()
    }
    $.ajax({
        url: "/api/orders",
        method: "PUT",
        data: updateOrder
    }).then(data => {
        location.reload();
    })
    // Send along the api route
}

$("#modal-delete").on("click", event => {
    event.preventDefault();
    let id = $(".modal").attr("id");
    $.ajax({
        url: `/api/orders/${id}`,
        method: "DELETE"
    }).then(() => {
        location.reload();
    })
})

$(".modal-close").on("click", function () {
    console.log("The modal is hidden. Needs to be reset.");
    location.reload();
})