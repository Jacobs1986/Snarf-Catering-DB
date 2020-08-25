import React from "react";

import { Modal, Col, Accordion, Card, Button, Form } from "react-bootstrap"

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
                        value={props.orderNum.toUpperCase()}
                        onChange={props.change}
                    />
                </Form>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row className="row-spacing">
                        {/* Order Date */}
                        <Col md={3}>
                            <Form.Label>Date:</Form.Label>
                            <Form.Control
                                type="date"
                                name="newOrderDate"
                                value={props.date}
                                onChange={props.change}
                            />
                        </Col>
                        {/* Order Number */}
                        <Col md={3}>
                            <Form.Label>Order/Receipt Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="modalEditOrderNumber"
                                value={props.orderNumber.toUpperCase()}
                                onChange={props.change}
                            />
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Submit</Button>
                <Button variant="secondary" onClick={props.close} name={props.name}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrderEdit