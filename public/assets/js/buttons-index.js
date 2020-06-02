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