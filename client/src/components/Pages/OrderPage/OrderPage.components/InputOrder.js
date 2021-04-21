import React, { createContext, useEffect, useContext, useReducer, useState } from "react";
// import moment from 'moment';

// Bootstrap
import { Button, Col, Collapse, Container, Form } from 'react-bootstrap';

// Components
import DateInput from './Menu.components/date.input.menu';
import MainMenu from './Menu.components/main.input.menu';
import MenuAccordion from './InputAccordion';
import Notes from './Menu.components/notes.input.menu';
import EndCalc from './Menu.components/endCalc.input.menu';

// Contexts
import { CustomerContext } from '../OrderPage';

// Functions
// Reducers
import { reducer as inputReducer } from '../../../../services/functions/reducers';
import { reducer as quantityReduc } from '../../../../services/functions/reducers';
import { reducer as quantityTotalReduc } from '../../../../services/functions/reducers';
import { reducer as taxAddOnReduc } from '../../../../services/functions/reducers';
// Formatters
import { formatQuantity } from '../../../../services/functions/formatters';

// API
import { addOrder } from '../../../../services/api/API.orders';

// total calculation
function getTotal(quantity) {
    const total = Object.values(quantity).reduce((t, n) => parseFloat(t) + parseFloat(n), 0);
    return total;
}

// Create Input Context
export const InputContext = createContext();

export default function InputOrder() {
    const { menu, customerInfo, setUpdateArray } = useContext(CustomerContext);
    const [collapseState, setCollapseState] = useState(false);
    const [input, setInput] = useReducer(inputReducer, {});
    const [quantity, setQuantity] = useReducer(quantityReduc, {});
    const [quantityTotal, setQuantityTotal] = useReducer(quantityTotalReduc, {});
    const [endCalculations, setEndCalculations] = useReducer(taxAddOnReduc, {});
    const [orderTotal, setOrderTotal] = useState(parseFloat(0).toFixed(2));

    // calculate total cost of order
    useEffect(() => {
        let qTotal = getTotal(quantityTotal);
        let infoTotal = getTotal(endCalculations);
        let total = (parseFloat(qTotal) + parseFloat(infoTotal)).toFixed(2);
        if (total === 'NaN') {
            return
        } else {
            setOrderTotal(total);
        }
    }, [endCalculations, quantityTotal]);

    // Handle the collapsing of the input form
    const handleCollapseForm = () => {
        setCollapseState(!collapseState);
        handleClearForm();
    }

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

    // Submit the information
    const handleSubmit = () => {
        let newOrder = {
            ...input,
            items: formatQuantity(quantity),
            numOfItems: getTotal(quantity),
            ...endCalculations,
            total: orderTotal,
            OrganizationId: customerInfo.id

        }
        // console.log(newOrder);
        addOrder(newOrder).then(() => {
            setUpdateArray(true);
            handleCollapseForm();
        })
    }

    // Hide the input form and clear it
    const handleClearForm = () => {
        setInput({ reset: true });
        setQuantity({ reset: true });
        setQuantityTotal({ reset: true });
        setEndCalculations({ reset: true });
    }

    return (
        <div>
            <Container>
                <Button variant='link' id='input-button' onClick={handleCollapseForm}>Input Order</Button>
                <Collapse in={collapseState}>
                    <div>
                        <InputContext.Provider value={{ input, setInput, quantity, handleCalculation, quantityTotal, endCalculations, setEndCalculations }}>
                            <Form>
                                {/* Date and Order Number */}
                                <DateInput />
                                <h5>Sandwiches</h5>
                                {/* Main Items */}
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
                            </Form>
                        </InputContext.Provider>
                        <Form.Row>
                        <Form.Group as={Col}>
                            <Button variant='primary' style={{ marginRight: '1rem' }} onClick={handleSubmit}>Submit</Button>
                            <Button variant='secondary' onClick={handleCollapseForm}>Close</Button>
                        </Form.Group>
                    </Form.Row>
                    </div>
                </Collapse>
            </Container>
        </div>
    );
};