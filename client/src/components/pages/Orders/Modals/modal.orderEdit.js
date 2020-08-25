import React from "react";

import { Modal, Container, Row, Col, Button, Form } from "react-bootstrap"

function OrderEdit(props) {
    return (
        <Modal show={props.show} onHide={props.close} size="lg" backdrop="static">
            <Modal.Header closeButton>
                <Form inline>
                    <Form.Label id="modal-edit-order-label">Order #:</Form.Label>
                    <Form.Control 
                        id="modal-edit-orderNum-input"
                        type="text"
                        name="modalEditOrderNumber"
                        value={props.orderNum}
                        onChange={props.change}
                    />
                </Form>
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