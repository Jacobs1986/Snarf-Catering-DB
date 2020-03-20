// add a new client

var id;

$("#add-client-btn").on("click", event => {
    console.log("This button is linked");
    let newClient = {
        contactname: $("#client-name").val().trim(""),
        organization: $("#client-organization").val().trim(""),
        address: $("#client-address").val().trim(""),
        email: $("#client-email").val().trim(""),
        phone: $("#client-phone").val().trim("")
    }
    console.log(newClient);
    // Send to the database
    $.post("/api/addclient", newClient).then(data => {
        console.log(data);
        location.reload();
    })
})

// apply updates to a client
$("#update-client-btn").on("click", event => {
    console.log("This button is linked")
    console.log(`The id that will be updated is ${id}`)
    let updateClient = {
        id: id,
        contactname: $("#update-name").val().trim(""),
        organization: $("#update-organization").val().trim(""),
        address: $("#update-address").val().trim(""),
        email: $("#update-email").val().trim(""),
        phone: $("#update-phone").val().trim("")
    }
    console.log(updateClient);
    // send to the database
    $.ajax({
        url: "/api/clients",
        method: "PUT",
        data: updateClient
    }).then(data => {
        console.log(data);
        location.reload()
    })
})

// show the information of a single client
$(document).on("click", ".edit-btn", function(event) {
    event.preventDefault();
    console.log("This button is linked!");
    let classType = $(this).attr("class");
    id = $(this).attr("id");
    $.get(`/api/clients/${id}`, data => {
       console.log(data);
       $("#update-name").val(data.contactname);
       $("#update-organization").val(data.organization);
       $("#update-address").val(data.address);
       $("#update-email").val(data.email);
       $("#update-phone").val(data.phone);
       $("#modal-client-edit").modal("show");
    })
})

// delete a client
$(document).on("click", ".delete-btn", function(event) {
    event.preventDefault();
    console.log("The button is live!");
    id = $(this).attr("id");
    console.log(`The id for this button is ${id}`);
    $("#modal-client-delete")
})