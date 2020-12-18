import React from "react";

import { Modal, Container, Row, Col, Button } from "react-bootstrap"

function OrderDetails(props) {
    return (
        <Modal show={props.show} onHide={props.close} size="sm" backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Order #{props.orderNumber}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col md="auto"><h5 className="modal-h5">Date: {props.date}</h5></Col>
                    </Row>
                    <Row>
                        <Col md="auto"><h5 className="modal-h5">Number of Items: {props.numberOfItems}</h5></Col>
                    </Row>
                    <Row>
                        <Col md="auto"><h5 className="modal-h5">Total: ${props.total}</h5></Col>
                    </Row>
                    <Row>
                        <h4 className="modal-h4">Order Details</h4>
                    </Row>
                    {props.orderArray.map((element, index) => (
                        <div key={index}>{element}</div>
                    ))}
                    <Row>
                        <h4 className="modal-h4">Notes</h4>
                    </Row>
                    <Row>
                        <Col md="auto">{props.notes}</Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.editOrder}>Edit</Button>
                <Button variant="primary" onClick={props.deleteOrder} id={props.orderID}>Delete</Button>
                <Button variant="secondary" onClick={props.close} name={props.name}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrderDetails