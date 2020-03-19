console.log("The client list is linked.")

// get the information from the database
$.get("/api/clients", data => {
    console.log(data);
    data.forEach(element => {
        let clientCard = $("<div>");
        let cardContent = $("<div class='card-content'>");
        clientCard.append(`<h5 class='card-title'>${element.organization}</h5>`);
        cardContent.append(`<p class='content-p'><span class='bold'>Contact Name</span>: ${element.contactname}`);
        cardContent.append(`<p class='content-p'><span class='bold'>Address</span>: ${element.address}</p>`);
        cardContent.append(`<p class='content-p'><span class='bold'>Email</span>: ${element.email}</p>`);
        cardContent.append(`<p><span class='bold'>Phone</span>: ${element.phone}</p>`);
        clientCard.append(cardContent);
        $("#client-list").append(clientCard);
    })
})