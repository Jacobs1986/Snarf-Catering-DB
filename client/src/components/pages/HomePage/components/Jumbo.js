import React, { useContext, useEffect, useState } from "react";

// Import context
import { StoreContext } from '../HomePage';

// Bootstrap
import { Jumbotron } from 'react-bootstrap';

export default function Jumbo() {
    const { storeArray } = useContext(StoreContext)
    const [ storeInfo, setStoreInfo ] = useState();

    // get Info
    useEffect(() => {
        setStoreInfo(storeArray)
    }, [storeArray])

    return (
        <Jumbotron>
            <h1>Catering Database</h1>
            <h5>Store Name: {!storeInfo ? '' : storeInfo.storeName}</h5>
            <h5>Address: {!storeInfo ? '' : storeInfo.address}</h5>
        </Jumbotron>
    );
};