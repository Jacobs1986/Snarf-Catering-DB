import React from "react";

// Bootstrap
import { Jumbotron } from 'react-bootstrap'

export default function Jumbo({ storeInfo }) {
    return (
        <Jumbotron>
            <h1>Catering Database</h1>
            <h5>Store Name: {storeInfo.storeName}</h5>
            <h5>Address: {storeInfo.address}</h5>
        </Jumbotron>
    );
};