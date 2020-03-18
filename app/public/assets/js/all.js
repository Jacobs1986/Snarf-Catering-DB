// when the page loads show all the clients from the db
$(function () {
    $.get("/api/all", (data) => {
        console.log(data);
        data.forEach(element => {
            let button = $("<button>")
            let card = $(`<div class='client-card container' id=${element.id}>`);
            let row = $("<div class='row'>");
            let col1 = $("<div class='col-4 column-1'>");
            let col2 = $("<div class='col'>")
            col1.append(`<h4>${element.organization}</h4>`);
            col1.append(`<p>Contact: ${element.name}</p>`);
            col1.append(`<p>Address: ${element.address}</p>`);
            col1.append(`<p>Email: ${element.email}</p>`);
            col1.append(`<p>Phone: ${element.phone}</p>`);
            button.text("Update");
            button.addClass("edit")
            col2.append(button);
            row.append(col1);
            row.append(col2);
            card.append(row);
            $("#client-list").append(card);
        })
    })
})