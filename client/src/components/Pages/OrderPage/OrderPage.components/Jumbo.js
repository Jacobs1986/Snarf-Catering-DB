import React, { createContext, useContext, useEffect, useState } from "react";

// Bootstrap
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';

// Import Context
import { CustomerContext } from '../OrderPage';

// Impot components
import ViewContactModal from './ModalViewContacts';

// Formatter function
import { formatDateTime } from '../../../../services/functions/formatters';

// Export context
export const JumboContext = createContext();

export default function Jumbo() {
    const { customerInfo } = useContext(CustomerContext)
    const [showContactModal, setShowContactModal] = useState(false)
    const [lastOrderDate, setLastOrderDate] = useState();
    const [lastOrderTotal, setLastOrderTotal] = useState();

    useEffect(() => {
        if (!customerInfo) {
            setLastOrderDate('NA');
            setLastOrderTotal('0.00');
        } else {
            if (customerInfo.Orders.length === 0) {
                setLastOrderDate('NA');
                setLastOrderTotal('0.00');
            } else {
                setLastOrderDate(formatDateTime(customerInfo.Orders[0].date));
                setLastOrderTotal(customerInfo.Orders[0].total);
            }
        }
    }, [customerInfo])

    const handleShowModal = event => {
        event.preventDefault()
        setShowContactModal(true);
    }

    return (
        <div>
            <Jumbotron>
                <a href="/">Back</a>
                <Container fluid>
                    <Row>
                        <Col lg="auto">
                            <h1 style={{ textDecoration: 'underline' }}>Customer Info</h1>
                            <h4>Customer Name: {!customerInfo ? '' : customerInfo.name}</h4>
                            <h4>Customer Address: {!customerInfo ? '' : customerInfo.address}</h4>
                            <Button variant="link" id="jumbo-contact-btn" onClick={handleShowModal}>Contact List</Button>
                        </Col>
                        <Col>
                            <h1 style={{ textDecoration: 'underline' }}>Order History</h1>
                            <h4>Number of Orders: {!customerInfo ? '' : customerInfo.Orders.length}</h4>
                            <h4>Last Order: {lastOrderDate}</h4>
                            <h4>Order Total: ${lastOrderTotal}</h4>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <JumboContext.Provider value={{ showContactModal, setShowContactModal }}>
                <ViewContactModal />
            </JumboContext.Provider>
        </div>
    );
};