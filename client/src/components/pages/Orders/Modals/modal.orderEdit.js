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
                    <Accordion style={{ width: '47rem' }}>
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
                                    {/* Macaroni Salad */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Macaroni Salad</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityMacaroni"
                                                value={props.quantityMacaroni}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceMacaroni}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalMacaroni}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Potato Salad */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Potato Salad</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityPotato"
                                                value={props.quantityPotato}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.pricePotato}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalPotato}</Form.Label>
                                        </Col>
                                    </Form.Row >
                                    {/* Coleslaw */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Coleslaw</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityColeslaw"
                                                value={props.quantityColeslaw}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceColeslaw}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalColeslaw}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Pickles */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Pickles</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityPickles"
                                                value={props.quantityPickles}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.pricePickles}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalPickle}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Chips */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Chips</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityChips"
                                                value={props.quantityChips}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceChips}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalChip}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        {/* Drinks */}
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                                    Drinks
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey='2'>
                                <Card.Body>
                                    {/* Bottled */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Bottled</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityBottled"
                                                value={props.quantityBottled}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceBottled}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalBottled}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Izzes */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Izzes</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityIzze"
                                                value={props.quantityIzze}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceIzze}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalIzze}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Arizona Tea */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Arizona Tea</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityArizona"
                                                value={props.quantityArizona}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceArizona}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalArizona}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Gatorade */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Gatorade</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityGatorade"
                                                value={props.quantityGatorade}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceGatorade}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalGatorade}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Snapple */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Snapple</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantitySnapple"
                                                value={props.quantitySnapple}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceSnapple}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalSnapple}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Stewarts */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Stewarts</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityStewart"
                                                value={props.quantityStewart}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceStewart}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalStewart}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Can */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Can</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityCan"
                                                value={props.quantityCan}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceCan}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalCan}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        {/* Desserts */}
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                                    Desserts
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    {/* Cookies */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Cookies</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityCookie"
                                                value={props.quantityCookie}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceCookie}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalCookie}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Brownies */}
                                    <Form.Row className="row-spacing">
                                        <Col md={2}>
                                            <Form.Label>Brownies</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityBrownie"
                                                value={props.quantityBrownie}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceBrownie}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalBrownie}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        {/* Extras */}
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='4'>
                                    Extras
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey='4'>
                                <Card.Body>
                                    {/* Artichoke */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Artichoke</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityArtichoke"
                                                value={props.quantityArtichoke}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceArtichoke}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalArtichoke}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Bacon */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Bacon</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityBacon"
                                                value={props.quantityBacon}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceBacon}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalBacon}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Portobello */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Portobello</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityPortobello"
                                                value={props.quantityPortobello}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.pricePortobello}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalPortobello}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Avocado */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Avocado</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityAvocado"
                                                value={props.quantityAvocado}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceAvocado}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalAvocado}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Extra Meat */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Extra Meat</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityMeat"
                                                value={props.quantityMeat}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceMeat}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalMeat}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                    {/* Gluten Free Bread */}
                                    <Form.Row className="row-spacing">
                                        <Col md={3}>
                                            <Form.Label>Gluten Free Bread</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Quantity: </Form.Label>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                type="number"
                                                className="accordion-input-width"
                                                name="quantityGFBread"
                                                value={props.quantityGFBread}
                                                onChange={props.calculate}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label>Price: ${props.priceGFBread}</Form.Label>
                                        </Col>
                                        <Col md="auto">
                                            <Form.Label>Total: ${props.totalGFBread}</Form.Label>
                                        </Col>
                                    </Form.Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <hr></hr>
                    {/* Subtotal */}
                    <Form.Row className="row-spacing">
                        <Col md={2}>
                            <h5>Subtotal: </h5>
                        </Col>
                        <Col md="auto">
                            <h5>${props.subtotal}</h5>
                        </Col>
                    </Form.Row>
                    {/* Gratuity */}
                    <Form.Row className="row-spacing">
                        <Col md={2}>
                            <h5>Gratuity: </h5>
                        </Col>
                        <Col md="auto">
                            <h5>${props.gratuity}</h5>
                        </Col>
                    </Form.Row>
                    {/* Delivery Fee */}
                    <Form.Row className="row-spacing">
                        <Col md={2}>
                            <h5>Delivery Fee: </h5>
                        </Col>
                        <Col md={2}>
                            <Form.Control
                                type="text"
                                name="delivery"
                                value={props.delivery}
                                onChange={props.totalCalculation}
                            />
                        </Col>
                    </Form.Row>
                    {/* Sales Tax */}
                    <Form.Row className="row-spacing">
                        <Col md={2}>
                            <h5>Sales Tax: </h5>
                        </Col>
                        <Col md={2}>
                            <Form.Control
                                type="text"
                                name="salesTax"
                                value={props.salesTax}
                                onChange={props.totalCalculation}
                            />
                        </Col>
                    </Form.Row>
                    {/* Adjustment */}<Form.Row className="row-spacing">
                        <Col md={2}>
                            <h5>Adjustment: </h5>
                        </Col>
                        <Col md={2}>
                            <Form.Control
                                type="text"
                                name="adjustment"
                                value={props.adjustment}
                                onChange={props.totalCalculation}
                            />
                        </Col>
                        <Col md="auto">
                            <Form.Text>To subtact place a "-" in fron of the number e.g. -3.14</Form.Text>
                        </Col>
                    </Form.Row>
                    {/* Total */}
                    <Form.Row className="row-spacing">
                        <Col md={2}>
                            <h3>Total: </h3>
                        </Col>
                        <Col md="auto">
                            <h3>${props.total}</h3>
                        </Col>
                    </Form.Row>
                    {/* Notes */}
                    <Form.Row>
                        <h5>Notes</h5>
                    </Form.Row>
                    <Form.Row className="row-spacing">
                        <Col md={8}>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name="notes"
                                value={props.notes}
                                onChange={props.change}
                            /></Col>
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