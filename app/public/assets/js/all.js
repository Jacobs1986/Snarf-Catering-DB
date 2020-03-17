// when the page loads show all the clients from the db
$.get("/api/all", (data) => {
    console.log(data);
    data.forEach(element => {
        let row = $("<div>");
        row.addClass("client-card");
        row.append(`<h4>${element.organization}</h4>`);
        row.append(`<p>Contact: ${element.name}</p>`);
        row.append(`<p>Address: ${element.address}</p>`);
        row.append(`<p>Email: ${element.email}</p>`);
        row.append(`<p>Phone: ${element.phone}</p>`);
        $("#client-list").append(row);
    })
})