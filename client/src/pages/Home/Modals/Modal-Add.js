import React from "react";

// Bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ModalAdd(props) {
    return (
        <Modal show={props.show} onHide={props.close} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Add New Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>
                            Contact Name:
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                name="contact"
                                value={props.contact}
                                onChange={props.change}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>
                            Organization:
                                </Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                name="organization"
                                value={props.organization}
                                onChange={props.change}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>
                            Address:
                                </Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                name="address"
                                value={props.address}
                                onChange={props.change}
                            /></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>
                            Email:
                                </Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="email"
                                name="email"
                                value={props.email}
                                onChange={props.change}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>
                            Phone:
                                </Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="tel"
                                name="phone"
                                value={props.phone}
                                onChange={props.change}
                            />
                            <Form.Text className="text-muted">Format: 123-456-7890</Form.Text>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Close
                        </Button>
                <Button variant="primary" onClick={props.add}>
                    Save Customer
                        </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAdd