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
                                name="quantityPlatter"
                                value={props.quantityPlatter}
                                onChange={props.calculate}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="price-label">Price: ${props.pricePlatter}</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label className="price-label">Total: ${props.totalPlatter}</Form.Label>
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
                                name="quantityGlutenFree"
                                value={props.quantityGlutenFree}
                                onChange={props.calculate}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="price-label">Price: ${props.priceGlutenFree}</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label className="price-label">Total: ${props.totalGlutenFree}</Form.Label>
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
                                name="quantityBrownBag"
                                value={props.quantityBrownBag}
                                onChange={props.calculate}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="price-label">Price: ${props.priceBrownBag}</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label className="price-label">Total: ${props.totalBrownBag}</Form.Label>
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
                                name="quantityBrownBag"
                                value={props.quantityBrownBag}
                                onChange={props.calculate}
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Label className="price-label">Price: ${props.priceBoxLunch}</Form.Label>
                        </Col>
                        <Col md="auto">
                            <Form.Label className="price-label">Total: ${props.totalBoxLunch}</Form.Label>
                        </Col>
                    </Form.Row>
                    {/* Add Ons */}
                    <Form.Row>
                        <h5>Add Ons</h5>
                    </Form.Row>
                    <Accordion style={{ width: '47rem' }} defaultActiveKey='1'>
                        {/* Salads */}
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                                    Salads
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey='0'>
                                <Card.Body>
                                    {/* Cobb Salad */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Cobb</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityCobb"
                                                value={props.quantityCobb}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceCobb}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalCobb}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Greek Salad */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Greek</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityGreek"
                                                value={props.quantityGreek}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceGreek}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalGreek}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Snarf Salad */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Snarf</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantitySnarf"
                                                value={props.quantitySnarf}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceSnarf}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalSnarf}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Tossed */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Tossed</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityTossed"
                                                value={props.quantityTossed}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceTossed}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalTossed}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        {/* Sides */}
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                                    Sides
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey='1'>
                                <Card.Body>
                                    <div>Sides go here.</div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
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