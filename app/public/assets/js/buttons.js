$(function () {
    $("#add-client-btn").on("click", function (event) {
        // make new client
        let newClient = {
            name: $("#clientName").val().trim(),
            organization: $("#organization").val().trim(),
            address: $("#address").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#phone").val().trim()
        }
        console.log(newClient);

        // Send AJAX POST-request
        $.post("/api/new", newClient).then(data => {
            console.log(data);
            // $("#add-client").modal("hide");
            // $("#clientName").val("");
            // $("#organization").val("");
            // $("#address").val("");
            // $("#email").val("");
            // $("#phone").val("")
            location.reload();
        })
    })

    // edit button
    $(document).on("click", ".edit-button", function (event) {
        event.preventDefault()
        console.log("You will update this client.")
        console.log(`The id is ${this.id}`);
    })
})