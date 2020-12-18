import React from "react";

// Components
import Jumbo from "./components/jumbotron.orders.components";
import Table from "./components/orderTable.orders.components";

// Styling
import "./orders.page.css";

function Orders() {
    return (
        <div>
            <Jumbo />
            <Table />
        </div>
    );
};

export default Orders;