// add a new client

var newInfo;

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

$(document).on("click", ".edit-btn", function(event) {
    event.preventDefault();
    console.log("This button is linked!");
    let classType = $(this).attr("class");
    let id = $(this).attr("id");
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