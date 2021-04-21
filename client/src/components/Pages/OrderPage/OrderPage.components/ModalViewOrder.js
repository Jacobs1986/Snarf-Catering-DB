import React, { useContext, useEffect, useState } from "react";

// Bootstrap
import { Button, Col, Modal, Row } from 'react-bootstrap';

// Import contexts
import { ModalContext } from './OrderHistory';

// Functions
// Handle the way the items list is displayed
function displayItems(itemList) {
    let itemsArray = itemList.replace(/[""{}]/g, "").replace(/[:]/g, ": ").split(",");
    return itemsArray.map((item, index) => {
        return (
            <div key={index} className="item-list">{item}</div>
        )
    })
}

export default function ViewOrderModal() {
    const { modalData, setModalData } = useContext(ModalContext);
    const [ showModal, setShowModal ] = useState(false);

    // Determine when to show the modal when modalData does not equal undefined
    useEffect(() => {
        if (modalData) {
            setShowModal(true);
            // console.log(modalData.items);
        }
    }, [modalData])

    // Handle what to do when the modal is hidden
    const handleHideModal = () => {
        setShowModal(false);
        setModalData();
    }

    return (
        <div>
            <Modal backdrop='static' show={showModal} dialogClassName='order-modal' onHide={handleHideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Number: {modalData.orderNum}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md="auto" className="modal-styling">Date: {modalData.date}</Col>
                        <Col md="auto" className="modal-styling">Number of Items: {modalData.numOfItems}</Col>
                        <Col md="auto" className="modal-styling">Total: ${modalData.total}</Col>
                    </Row>
                    <h5>Items List:</h5>
                    {displayItems(modalData.items)}
                    <br />
                    <h5>Notes</h5>
                    <div>{modalData.notes}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleHideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};