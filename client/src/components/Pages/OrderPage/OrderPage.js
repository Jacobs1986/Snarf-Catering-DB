import React, { createContext, useEffect, useState } from "react";

// Styling
import "./OrderPage.css"

// Components
import Jumbo from './OrderPage.components/Jumbo';
import OrderHistory from './OrderPage.components/OrderHistory';
import InputOrder from './OrderPage.components/InputOrder';

// API
import { getOrganization } from '../../../services/api/API.organizations';
import { getAll } from "../../../services/api/API.menu";


// Export context
export const CustomerContext = createContext();

export default function OrderPage() {
    const [ orgId, setOrgId ] = useState();
    const [ customerInfo, setCustomerInfo ] = useState();
    const [ updateArray, setUpdateArray ] = useState(false)
    const [ menu, setMenu ] = useState(null);

    // Set the orgId and get API
    useEffect(() => {
        let url = window.location.search;
        let urlId = url.split("=")[1];
        setOrgId(urlId)
        let mounted = true;
        getOrganization(orgId).then(data => {
            if (mounted) {
                setCustomerInfo(data.data)
            }
            if (updateArray) {
                setUpdateArray(false)
            }
        })
        return () => mounted = false;
    }, [orgId, updateArray])

    // Get the menu items
    useEffect(() => {
        let mounted = true;
        getAll().then(items => {
            if (mounted) {
                setMenu(items.data)
            }
        })
        return () => mounted = false;
    }, [])

    return (
        <CustomerContext.Provider value={{ customerInfo, updateArray, setUpdateArray, menu }}>
            <div>
                <Jumbo />
                <InputOrder />
                <OrderHistory />
            </div>
        </CustomerContext.Provider>
    );
};