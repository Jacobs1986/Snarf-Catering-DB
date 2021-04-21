import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

// Bootstrap
import { Button, Modal } from 'react-bootstrap';

// Import Context
import { ModalContext } from './OrderHistory';
import { CustomerContext } from '../OrderPage';

// Compnents
import DateInput from './Edit.menu.components/date.edit.menu';
import MainMenu from './Edit.menu.components/main.edit.menu';
import MenuAccordion from './Edit.menu.components/accordion.edit.menu';
import Notes from './Edit.menu.components/notes.edit.menu';
import EndCalc from './Edit.menu.components/endCalc.edit.menu';

// Functions
import { reducer as editReducer } from '../../../../services/functions/reducers';
import { reducer as quantityReduc } from '../../../../services/functions/reducers';
import { reducer as quantityTotalReduc } from '../../../../services/functions/reducers';
import { reducer as taxAddOnReduc } from '../../../../services/functions/reducers';
// Formatters
import { formatQuantity } from '../../../../services/functions/formatters';

// API route
import { editOrder as editOrderAPI } from '../../../../services/api/API.orders';

// Export context
export const EditContext = createContext();

// Conver the string to a JSON Object
function jsonifyString(string) {
    let jsonItems = JSON.parse(string);
    return jsonItems
}

// Set the initial state for editInput hook
function setInitialInput(hook) {
    let initialState = {
        date: hook.date,
        orderNum: hook.orderNum,
        notes: hook.notes
    }
    return initialState
}

// calculate totals from the quantities of the order
function quantityCalculation(string, menu) {
    // First the string needs to be converted into an object
    let jsonItems = jsonifyString(string)
    // Get the keys from the object
    let objectKeys = Object.keys(jsonItems)
    // create an array to hold the items
    let itemsArray = []
    objectKeys.forEach(item => {
        // Search the menu array for the key name
        let index = menu.findIndex(o => o.item === item);
        // get the item price
        let price = menu[index].price;
        // Calculate the total price
        let quantityTotal = (parseFloat(price) * parseFloat(jsonItems[item])).toFixed(2);
        // push the name of the item and it's total into the array
        itemsArray.push(`"${item}": "${quantityTotal}"`);
    })
    // Convert the array to a string
    let arrayString = "{" + itemsArray.toString() + "}";
    // Change the string to an object
    let arrayObj = jsonifyString(arrayString)
    return arrayObj;
}

// Set the initial state for the endCalculations hook
function setInitalEndCalc(hook) {
    let initialState = {
        gratuity: hook.gratuity,
        delivery: hook.delivery,
        salesTax: hook.salesTax,
        adjustment: hook.adjustment
    }
    return initialState
}

// total calculation
function getTotal(quantity) {
    const total = Object.values(quantity).reduce((t, n) => parseFloat(t) + parseFloat(n), 0);
    return total;
}

export default function EditOrder() {
    const { menu, setUpdateArray } = useContext(CustomerContext);
    const { editOrder, setEditOrder } = useContext(ModalContext);
    const [showModal, setShowModal] = useState(false);
    const [editInput, setEditInput] = useReducer(editReducer, setInitialInput(editOrder));
    const [quantity, setQuantity] = useReducer(quantityReduc, jsonifyString(editOrder.items));
    const [quantityTotal, setQuantityTotal] = useReducer(quantityTotalReduc, quantityCalculation(editOrder.items, menu));
    const [endCalculations, setEndCalculations] = useReducer(taxAddOnReduc, setInitalEndCalc(editOrder));
    const [orderTotal, setOrderTotal] = useState(parseFloat(0).toFixed(2));

    // show the modal if editOrder is not unknown
    useEffect(() => {
        if (editOrder) {
            // show the modal
            setShowModal(true);
        }
    }, [editOrder, menu]);

    // handle hiding the modal
    const handleHideModal = () => {
        setShowModal(false);
        setEditOrder();
    }

    // calculate total cost of order
    useEffect(() => {
        // Get the quantityTotal
        let qTotal = getTotal(quantityTotal);
        // Get the total for the endCalculation
        let infoTotal = getTotal(endCalculations);
        // Add them together
        let total = (parseFloat(qTotal) + parseFloat(infoTotal)).toFixed(2);
        // If the total is NaN simply return, else set orderTotal to be total
        if (total === 'NaN') {
            return
        } else {
            setOrderTotal(total);
        }
    }, [endCalculations, quantityTotal]);

    // Calculation function
    const handleCalculation = event => {
        // find the index
        let index = menu.findIndex(o => o.item === event.target.name);
        // Get the price from the menu
        let price = menu[index].price;
        // Calculate the total quantity price
        let quantityTotal = price * event.target.value;
        // Set the quantity
        setQuantity({
            name: event.target.name,
            value: event.target.value
        });
        // Set the quantity total
        setQuantityTotal({
            name: event.target.name,
            value: quantityTotal.toFixed(2)
        })
    }

    // Handle the edit submit
    const handleSubmitEdit = () => {
        let newEdit = {
            ...editInput,
            items: formatQuantity(quantity),
            numOfItems: getTotal(quantity),
            ...endCalculations,
            total: orderTotal,
            OrganizationId: editOrder.OrganizationId,
            id: editOrder.id
        }
        // console.log(newEdit);
        editOrderAPI(newEdit).then(data => {
            // console.log(data.data);
            setUpdateArray(true);
            handleHideModal();
        })
    }

    return (
        <div>
            <Modal size="lg" show={showModal} backdrop="static" onHide={handleHideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContext.Provider value={{ editInput, setEditInput, quantity, quantityTotal, handleCalculation, endCalculations, setEndCalculations }}>
                        {/* Date and Order/Reciept number */}
                        <DateInput />
                        {/* Main Menu */}
                        <MainMenu />
                        {/* Sides */}
                        <MenuAccordion />
                        {/* Notes */}
                        <h5>Notes</h5>
                        <Notes />
                        <hr />
                        {/* End calculations */}
                        <EndCalc />
                        <h4>Total: ${orderTotal}</h4>
                    </EditContext.Provider>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmitEdit}>Edit</Button>
                    <Button variant="secondary" onClick={handleHideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};