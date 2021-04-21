import React, { createContext, useContext, useEffect, useState } from "react";

// Bootstrap
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

// Import Context
import { CustomerContext } from '../OrderPage';

// Components
import ViewOrderModal from './ModalViewOrder';
import EditOrderModal from './ModalEditOrder';

// API
import { deleteOrder } from '../../../../services/api/API.orders';

// Functions
// Formatters
import { formatDateTime } from '../../../../services/functions/formatters';

// Context
export const ModalContext = createContext();

export default function OrderHistory() {
    const { customerInfo, setUpdateArray } = useContext(CustomerContext);
    const [orderHistory, setOrderHistory] = useState();
    const [ editOrder, setEditOrder ] = useState();
    const [ modalData, setModalData ] = useState();

    useEffect(() => {
        if (!customerInfo) {
            setOrderHistory([]);
        } else {
            setOrderHistory(customerInfo.Orders);
        }
    }, [customerInfo])

    // set the order that needs to be edited
    const handleSetEditOrder = event => {
        setEditOrder(orderHistory[event.target.id]);
    }

    // Show more order details
    const handleShowModal = event => {
        setModalData(orderHistory[event.target.id]);
        // setShowModal(true);
    }

    // Delete an order
    const handleDeleteOrder = event => {
        deleteOrder(event.target.id).then(() => {
            setUpdateArray(true);
        })
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{ textDecoration: 'underline' }}>Order History</h2>
                    </Col>
                </Row>
                <div className="overflow-auto" style={{ height: '500px' }}>
                    <Table striped size='sm'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Order Number</th>
                                <th>Total</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!orderHistory ? <tr></tr> : orderHistory.length === 0 ? <tr></tr> :
                                orderHistory.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="td-order-table">{formatDateTime(info.date)}</td>
                                            <td className="td-order-table"><Button variant='link' className="table-link" onClick={handleShowModal} id={index}>{info.orderNum}</Button></td>
                                            <td className="td-order-table">{info.total}</td>
                                            <td><span role='img' className='emoji-btn' onClick={handleSetEditOrder} id={index}>🗒️</span><span role='img' className='emoji-btn' onClick={handleDeleteOrder} id={info.id}>❌</span></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
            <ModalContext.Provider value={{ editOrder, setEditOrder, modalData, setModalData}}>
                {!modalData ? <></> : <ViewOrderModal />}
                {!editOrder ? <></> : <EditOrderModal />}
            </ModalContext.Provider>
        </div>
    );
};