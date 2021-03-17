import React, { createContext, useEffect, useState } from "react";

// Styling
import './HomePage.css';
import { Container } from 'react-bootstrap';

// Components
import Jumbo from './components/Jumbo'
import CustomerCard from './components/CustomerCard';
import CustomerModal from './components/CustomerModal';
import SearchBar from './components/SearchBar';

// API
import { getStoreInfo } from '../../services/API.store';

// Create context
export const StoreContext = createContext();
export const ArrayContext = createContext();

export default function HomePage() {
    const [storeId, setStoreId] = useState();
    const [storeArray, setStoreArray] = useState();
    const [updateArray, setUpdateArray] = useState(false);
    const [searchArray, setSearchArray] = useState([])

    // set the storeId
    useEffect(() => {
        setStoreId(1)
        let mounted = true;
        getStoreInfo(storeId).then(items => {
            if (mounted) {
                setStoreArray(items.data)
            }
        })
        return () => mounted = false;
    }, [storeId, updateArray])

    return (
        <StoreContext.Provider value={{ storeArray, storeId, searchArray, setSearchArray }}>
            <div>
                {!storeArray ? <div></div> :
                    <Container>
                        <Jumbo />
                        <SearchBar />
                        <ArrayContext.Provider value={{ updateArray, setUpdateArray }}>
                            <CustomerModal />
                            <hr></hr>
                            <h2>Customer List</h2>
                            <CustomerCard />
                        </ArrayContext.Provider>
                    </Container>
                }
            </div>
        </StoreContext.Provider>
    );
};