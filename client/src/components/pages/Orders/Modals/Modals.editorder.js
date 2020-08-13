import React from "react";

// Bootstrap
import { Modal, Container, Row, Col, Button, Form } from "react-bootstrap"

function EditOrder(props) {
    return (
        <Modal show={props.show} onHide={props.close} size="lg" backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    <Form inline id="edit-form">
                        <Form.Label id="edit-form-label">Order #</Form.Label>
                        <Form.Control 
                            type="text"
                            name="modalOrderNum"
                            value={props.orderNum.toUpperCase()}
                            onChange={props.change}
                        />
                    </Form>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form>
                        <Form.Row>
                            <Col sm={3}>
                                <Form.Group>
                                    <Form.Label>Date:</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="modalDate"
                                        value={props.date}
                                        onChange={props.change}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group>
                                    <Form.Label>Type of Order:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="modalType"
                                        value={props.type}
                                        onChange={props.change}
                                    >
                                        <option value="Platter">Platter</option>
                                        <option value="Box Lunch">Box Lunch</option>
                                        <option value="Combo">Combo</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group>
                                    <Form.Label>Number of Items:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="modalnumItems"
                                        value={props.numItems}
                                        onChange={props.change}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group>
                                    <Form.Label>Total:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="modalTotal"
                                        value={props.total}
                                        onChange={props.change}
                                    />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <h5>Order Details</h5>
                        </Form.Row>
                        {/* Chips */}
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Number of Chips:</Form.Label>
                            <Col sm={2}>
                                <Form.Control 
                                    type="number"
                                    name="modalChips"
                                    value={props.chips}
                                    onChange={props.change}
                                />
                            </Col>
                            <Form.Label column sm={2}>Total Cost:</Form.Label>
                            <Col sm={2}>
                                <Form.Control 
                                    type="text"
                                    name="modaltotalChip"
                                    value={props.totalChip}
                                    onChange={props.change}
                                />
                            </Col>
                        </Form.Group>
                        {/* Salad */}
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Number of Salads:</Form.Label>
                            <Col sm={2}>
                                <Form.Control 
                                    type="number"
                                    name="modalSalad"
                                    value={props.salad}
                                    onChange={props.change}
                                />
                            </Col>
                            <Form.Label column sm={2}>Total Cost:</Form.Label>
                            <Col sm={2}>
                                <Form.Control 
                                    type="text"
                                    name="modaltotalSalad"
                                    value={props.totalSalad}
                                    onChange={props.change}
                                />
                            </Col>
                        </Form.Group>
                        {/* Pickles */}
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Number of Pickles:</Form.Label>
                            <Col sm={2}>
                                <Form.Control 
                                    type="number"
                                    name="modalPick"
                                    value={props.pickles}
                                    onChange={props.change}
                                />
                            </Col>
                            <Form.Label column sm={2}>Total Cost:</Form.Label>
                            <Col sm={2}>
                                <Form.Control 
                                    type="text"
                                    name="modaltotalPick"
                                    value={props.totalPickle}
                                    onChange={props.change}
                                />
                            </Col>
                        </Form.Group>
                        {/* Cookies */}
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Number of Cookies:</Form.Label>
                            <Col sm={2}>
                                <Form.Control 
                                    type="number"
                                    name="modalCook"
                                    value={props.cookies}
                                    onChange={props.change}
                                />
                            </Col>
                            <Form.Label column sm={2}>Total Cost:</Form.Label>
                            <Col sm={2}>
                                <Form.Control 
                                    type="text"
                                    name="modaltotalCook"
                                    value={props.totalCookie}
                                    onChange={props.change}
                                />
                            </Col>
                        </Form.Group>
                        {/* Notes */}
                        <Form.Row>
                            <h5>Notes:</h5>
                        </Form.Row>
                        <Form.Row>
                            <Col sm={12}>
                                <Form.Group>
                                    <Form.Control 
                                        as="textarea"
                                        rows="3"
                                        name="modalNotes"
                                        value={props.notes}
                                        onChange={props.change}
                                    />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" id={props.id} onClick={props.editBtn}>Submit</Button>
                <Button variant="secondary" onClick={props.close}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditOrder