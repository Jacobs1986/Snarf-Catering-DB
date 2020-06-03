// add a new customer

var id;
var deleteid;

$("#add-customer-btn").on("click", event => {
    let newcustomer = {
        contactname: $("#customer-name").val().trim(""),
        organization: $("#customer-organization").val().trim(""),
        address: $("#customer-address").val().trim(""),
        email: $("#customer-email").val().trim(""),
        phone: $("#customer-phone").val().trim("")
    }
    // Send to the database
    $.post("/api/addcustomer", newcustomer).then(data => {
        location.reload();
    })
})

// apply updates to a customer
$("#update-customer-btn").on("click", event => {
    let updatecustomer = {
        id: id,
        contactname: $("#update-name").val().trim(""),
        organization: $("#update-organization").val().trim(""),
        address: $("#update-address").val().trim(""),
        email: $("#update-email").val().trim(""),
        phone: $("#update-phone").val().trim("")
    }
    // send to the database
    $.ajax({
        url: "/api/customers",
        method: "PUT",
        data: updatecustomer
    }).then(data => {
        location.reload()
    })
})

// show the information of a single customer
$(document).on("click", ".edit-btn", function(event) {
    event.preventDefault();
    let classType = $(this).attr("class");
    id = $(this).attr("id");
    $.get(`/api/customers/${id}`, data => {
       $("#update-name").val(data.contactname);
       $("#update-organization").val(data.organization);
       $("#update-address").val(data.address);
       $("#update-email").val(data.email);
       $("#update-phone").val(data.phone);
       $("#modal-customer-edit").modal("show");
    })
})

// launch delete modal
$(document).on("click", ".delete-btn", function(event) {
    event.preventDefault();
    deleteid = $(this).attr("id");
    $("#modal-customer-delete").modal("show");
})

// delete a customer button
$("#delete-customer-btn").on("click", (event) => {
    $.ajax({
        url: `/api/customers/${deleteid}`,
        method: "DELETE"
    }).then(data => {
        location.reload();
    })
})

$("#searchCustomer").on("click", event => {
    event.preventDefault();
    let search = {
        name: $("#searchDB").val()
    }
    $.post("/api/searchcustomer", search).then(data => {
        $("#customer-list").empty();
        if (data.length === 0) {
            $("#customer-list").append("<div><h3>No results</h3></div>");
        } else {
            data.forEach(element => {
                let customerCard = $("<div>");
                let cardContent = $("<div class='card-content'>");
                customerCard.append(`<a href='/orders?customer_id=${element.id}'><h5 class='card-title'>${element.organization}</h5></a>`);
                cardContent.append(`<p class='content-p'><span class='bold'>Contact Name</span>: ${element.contactname}`);
                cardContent.append(`<p class='content-p'><span class='bold'>Address</span>: ${element.address}</p>`);
                cardContent.append(`<p class='content-p'><span class='bold'>Email</span>: ${element.email}</p>`);
                cardContent.append(`<p class='content-p last-p'><span class='bold'>Phone</span>: ${element.phone}</p>`);
                cardContent.append(`<button type='button' class='edit-btn' id='${element.id}'>Update</button>`)
                cardContent.append(`<button type='button' class='delete-btn' id='${element.id}'>Delete</button>`)
                customerCard.append(cardContent);
                $("#customer-list").append(customerCard);
            })
        }
    })
})