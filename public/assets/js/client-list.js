console.log("The client list is linked.")

// get the information from the database
$.get("/api/clients", data => {
    console.log(data);
    data.forEach(element => {
        let clientCard = $("<div>");
        clientCard.append(`<h5>${element.organization}</h5>`);
        clientCard.append(`<p><span>Contact Name</span>: ${element.contactname}`);
        clientCard.append(`<p><span>Address</span>: ${element.address}</p>`);
        clientCard.append(`<p><span>Email</span>: ${element.email}</p>`);
        clientCard.append(`<p><span>Phone</span>: ${element.phone}</p>`);
        $("#client-list").append(clientCard);
    })
})