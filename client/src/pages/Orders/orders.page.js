import React from "react";

// API
import API from "../../utils/API.orders";

// functions
import {customerInfo} from "./functions/customerInfo.functions";

function Orders() {
    customerInfo(API);
    
    return (
        <div>This page is ready!</div>
    );
};

export default Orders;