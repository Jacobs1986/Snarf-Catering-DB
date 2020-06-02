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
        $("#numofOrders").text(data.Orders.length);
        $("#lastOrderDate").text(lastOrder(data));
        $("#orderDay").text(orderDay(data));
    })

    displayTable(apiURL);

    // Add order information
    $("#add-order").on("click", event => {
        event.preventDefault();
        let order = {
            date: getInfo("#orderdate"),
            orderNumber: getInfo("#ordernumber"),
            orderType: getInfo("#ordertype"),
            numofItems: getInfo("#numberofitems"),
            total: getInfo("#total"),
            notes: getInfo("#notes"),
            CustomerId: customerId
        }
        $.post("/api/submit-order", order).then(data => {
            displayTable(apiURL);
            let array = ["#orderdate", "ordernumber", "#numberofitems", "#total", "#notes"]
            array.forEach(input => {
                $(input).val("")
            })
        });
    });

    $("#filterbtn").on("click", event => {
        event.preventDefault();
        // Get the value of filtertype and save it to the variable filtertype
        var buildFilter;
        let filterType = $("#filtertype").val();
        // Pass filterType into switch statment
        switch (filterType) {
            // Set the variable buildFilter accordingly
            case "orderType":
                buildFilter = {
                    filterType: filterType,
                    id: customerId,
                    orderType: $("#search-param").val()
                }
                break;
            case "orderNumber": {
                buildFilter = {
                    filterType: filterType,
                    orderNumber: $("#search-param").val()
                }
                break;
            }
            default:
                buildFilter = {
                    filterType: filterType,
                    id: customerId,
                    total: $("#search-param").val()
                }
        }
        // Send buildFilter along the api route /api/filter
        $.post("/api/filter", buildFilter).then(data => {
            // Once the results come back the table needs to be cleared.
            $("tbody").empty();
            if (data.length === 0) {
                $("tbody").append(
                    `<tr>
                        <td>No results</td>
                    </tr>`
                )
                // If there are results then the table should display those results in the table.
            } else {
                data.forEach(element => {
                    $("tbody").append(
                        `<tr>
                            <td>${element.date}</td>
                            <td><a href="#" onclick="loadModal(event);" id='${element.id}'>${element.orderNumber}</a></td>
                            <td>${element.orderType}</td>
                            <td>${element.total}</td>
                        </tr>`)
                })
            }
        })
    })
})

var getInfo = (input) => $(input).val().trim("")

const displayTable = (url) => {
    $("tbody").empty();
    $.get(url, data => {
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

// function to get last order date
const lastOrder = (data) => {
    let lastOrderIndex = data.Orders.length - 1;
    let lastOrderDate = data.Orders[lastOrderIndex].date;
    lastOrderDate = moment(lastOrderDate).format("MM/DD/YYYY");
    return lastOrderDate;
}

// function to get the frequent order day
const orderDay = data => {
    let daysoftheWeek = [];
    // first thing is to convert the dates to days of the week using forEach
    data.Orders.forEach(date => {
        //  Convert the days of the week
        let convertedDate = moment(date.date).format("dddd");
        // push convertDate to the array daysoftheWeek
        daysoftheWeek.push(convertedDate);
    })
    // The function now needs to count the number of instances of a day
    // Create a new array called dayOccurences
    let dayOccurences = [];
    // start the loop
    for (i = 0; i < daysoftheWeek.length; i++) {
        // first get the day from daysoftheWeek
        let weekDay = daysoftheWeek[i];
        // search the dayOccurence for that day, set the variable to be searchFor
        let indexofDay = dayOccurences.findIndex(index => index.day === weekDay);
        if (indexofDay === -1) {
            // create filter
            let filter = daysoftheWeek.filter(days => days === weekDay);
            // create an object dayResults that will save the weekDay and occurences
            let dayResults = {
                day: weekDay,
                occurences: filter.length
            }
            // push into dayOccurences
            dayOccurences.push(dayResults);
        }
    }
    // sort the array from least to greatest of occurences
    let compare = (a, b) => {
        let comparison = 0
        if (a.occurences >= b.occurences) {
            comparison = 1;
        } else if (a.occurences <= b.occurences) {
            comparison = -1
        }
        return comparison
    }
    let sortedDays = dayOccurences.sort(compare);
    let frequentDay = sortedDays[sortedDays.length - 1].day;
    return frequentDay;
}

loadModal = (event) => {
    event.preventDefault();
    $.get(`/api/orders/${event.target.id}`).then(data => {
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
    location.reload();
})