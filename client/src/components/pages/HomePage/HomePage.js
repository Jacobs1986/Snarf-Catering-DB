import React, { createContext, useEffect, useState } from "react";

// CSS File
import './HomePage.css';

// Bootstrap
import { Container } from 'react-bootstrap';

// Components
import Jumbo from './HomePage.components/Jumbo';
import CustomerCard from './HomePage.components/CustomerCard';
import AddCustomerModal from './HomePage.components/ModalAddCustomer';
import SearchBar from './HomePage.components/SearchBar';

// API routes
import { getStoreInfo } from '../../../services/api/API.store';

// Contexts
export const StoreContext = createContext();

export default function HomePage() {
    const [ storeInfo, setStoreInfo ] = useState([]);
    const [ storeId, setStoreId ] = useState();
    const [ updateInfo, setUpdateInfo ] = useState(false);
    const [ searchArray, setSearchArray ] = useState([]);

    // get the store info
    useEffect(() => {
        setStoreId(1);
        getStoreInfo(storeId).then(items => {
            // console.log(items.data);
            setStoreInfo(items.data);
        })
        if (updateInfo) {
            setUpdateInfo(false);
        }
    }, [updateInfo, storeId])

    return (
        <StoreContext.Provider value={{ storeInfo, setUpdateInfo, storeId, setStoreInfo, searchArray, setSearchArray }}>
            {!storeInfo ? <div></div> :
                <Container>
                    <Jumbo storeInfo={storeInfo} />
                    <SearchBar />
                    <AddCustomerModal />
                    <CustomerCard />
                </Container>}
        </StoreContext.Provider>
    );
};