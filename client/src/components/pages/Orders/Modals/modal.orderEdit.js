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
        </Modal>
    );
}

export default OrderEdit