// add a new client
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