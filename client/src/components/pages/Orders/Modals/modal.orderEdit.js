import React from "react";

import { Modal, Container, Row, Col, Button } from "react-bootstrap"

function OrderEdit(props) {
    return (
        <Modal show={props.show} onHide={props.close} size="lg" backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Order #</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>The contents will go here.</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Submit</Button>
                <Button variant="secondary" onClick={props.close} name={props.name}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrderEdit