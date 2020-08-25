import React from "react";

import { Modal, Col, Accordion, Card, Button, Form } from "react-bootstrap"

function OrderEdit(props) {
    return (
        <Modal show={props.show} onHide={props.close} size="lg" backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Edit Order</Modal.Title>
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
                            <Form.Label>Order/Receipt Number:</Form.Label>
                            <Form.Control
                                type="text"
                                name="modalEditOrderNumber"
                                value={props.orderNumber.toUpperCase()}
                                onChange={props.change}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <h5>Items</h5>
                    </Form.Row>
                    {/* Platters */}
                    <Form.Row className="row-spacing">
                        <Col md={3}>
                            <Form.Label>Platter</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label>Quantity: </Form.Label>
                        </Col>
                        <Col md={2}>
                            <Form.Control
                                type="number"
                                name="editQuantityPlatter"
                                value={props.editQuantityPlatter}
                                onChange={props.calculate}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="price-label">Price: ${props.pricePlatter}</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label className="price-label">Total: ${props.editTotalPlatter}</Form.Label>
                        </Col>
                    </Form.Row>
                    {/* Gluten Free Platter */}
                    <Form.Row className="row-spacing">
                        <Col md={3}>
                            <Form.Label>Gluten Free Platter</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label>Quantity: </Form.Label>
                        </Col>
                        <Col md={2}>
                            <Form.Control
                                type="number"
                                name="editQuantityGlutenFree"
                                value={props.editQuantityGlutenFree}
                                onChange={props.calculate}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="price-label">Price: ${props.priceGlutenFree}</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label className="price-label">Total: ${props.editTotalGlutenFree}</Form.Label>
                        </Col>
                    </Form.Row>
                    {/* Brown Bag Lunch */}
                    <Form.Row className="row-spacing">
                        <Col md={3}>
                            <Form.Label>Brown Bag Lunch</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label>Quantity: </Form.Label>
                        </Col>
                        <Col md={2}>
                            <Form.Control
                                type="number"
                                name="editQuantityBrownBag"
                                value={props.editQuantityBrownBag}
                                onChange={props.calculate}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="price-label">Price: ${props.priceBrownBag}</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label className="price-label">Total: ${props.editTotalBrownBag}</Form.Label>
                        </Col>
                    </Form.Row>
                    {/* Box Lunch */}
                    <Form.Row className="row-spacing">
                        <Col md={3}>
                            <Form.Label>Box Lunch</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label>Quantity: </Form.Label>
                        </Col>
                        <Col md={2}>
                            <Form.Control
                                type="number"
                                name="editQuantityBoxLunch"
                                value={props.editQuantityBoxLunch}
                                onChange={props.calculate}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="price-label">Price: ${props.priceBoxLunch}</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label className="price-label">Total: ${props.editTotalBoxLunch}</Form.Label>
                        </Col>
                    </Form.Row>
                    {/* Add Ons */}
                    <Form.Row>
                        <h5>Add Ons</h5>
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