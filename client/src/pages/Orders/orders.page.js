import React from "react";

// functions
import {customerInfo} from "./functions/customerInfo.functions";

function Orders() {
    console.log(customerInfo());
    return (
        <div>This page is ready!</div>
    );
};

export default Orders;