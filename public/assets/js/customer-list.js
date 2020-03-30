console.log("The customer list is linked.")

// get the information from the database
$.get("/api/customers", data => {
    console.log(data);
    data.forEach(element => {
        let customerCard = $("<div>");
        let cardContent = $("<div class='card-content'>");
        customerCard.append(`<h5 class='card-title'>${element.organization}</h5>`);
        cardContent.append(`<p class='content-p'><span class='bold'>Contact Name</span>: ${element.contactname}`);
        cardContent.append(`<p class='content-p'><span class='bold'>Address</span>: ${element.address}</p>`);
        cardContent.append(`<p class='content-p'><span class='bold'>Email</span>: ${element.email}</p>`);
        cardContent.append(`<p class='content-p last-p'><span class='bold'>Phone</span>: ${element.phone}</p>`);
        cardContent.append(`<button type='button' class='edit-btn' id='${element.id}'>Update</button>`)
        cardContent.append(`<button type='button' class='delete-btn' id='${element.id}'>Delete</button>`)
        customerCard.append(cardContent);
        $("#customer-list").append(customerCard);
    })
})