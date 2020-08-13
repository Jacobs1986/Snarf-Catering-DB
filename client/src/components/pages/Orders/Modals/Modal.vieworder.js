import React from "react";

// Bootstrap
import { Modal, Container, Row, Col, Button } from "react-bootstrap"

function ViewOrder(props) {
    return (
        <Modal show={props.show} onHide={props.close} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Order #{props.orderNum}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col sm={2}>
                            Date:
                        </Col>
                        <Col sm={4}>
                            Type of Order:
                        </Col>
                        <Col sm={3}>
                            Number of Items:
                        </Col>
                        <Col sm={3}>
                            Total:
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            {props.date}
                        </Col>
                        <Col sm={4}>
                            {props.type}
                        </Col>
                        <Col sm={3}>
                            {props.numItems}
                        </Col>
                        <Col sm={3}>
                            {props.total}
                        </Col>
                    </Row>
                    <Row>
                        <h5>Order Details</h5>
                    </Row>
                    {/* Chips */}
                    <Row>
                        <Col sm={3}>
                            Number of Chips:
                        </Col>
                        <Col sm={1}>
                            {props.chips}
                        </Col>
                        <Col sm={2}>
                            Total Cost:
                        </Col>
                        <Col sm={3}>
                            ${props.totalChip}
                        </Col>
                    </Row>
                    {/* Salad */}
                    <Row>
                        <Col sm={3}>
                            Number of Salads:
                        </Col>
                        <Col sm={1}>
                            {props.salad}
                        </Col>
                        <Col sm={2}>
                            Total Cost:
                        </Col>
                        <Col sm={3}>
                            ${props.totalSalad}
                        </Col>
                    </Row>
                    {/* Pickles */}
                    <Row>
                        <Col sm={3}>
                            Number of Pickles:
                        </Col>
                        <Col sm={1}>
                            {props.pickles}
                        </Col>
                        <Col sm={2}>
                            Total Cost:
                        </Col>
                        <Col sm={3}>
                            ${props.totalPickle}
                        </Col>
                    </Row>
                    {/* Cookies */}
                    <Row>
                        <Col sm={3}>
                            Number of Cookies:
                        </Col>
                        <Col sm={1}>
                            {props.cookies}
                        </Col>
                        <Col sm={2}>
                            Total Cost:
                        </Col>
                        <Col sm={3}>
                            ${props.totalCookie}
                        </Col>
                    </Row>
                    {/* Notes */}
                    <Row>
                        <h5>Notes:</h5>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            {props.notes}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.editOrder}>Edit</Button>
                <Button variant="primary" onClick={props.deleteOrder} id={props.id}>Delete</Button>
                <Button variant="secondary" onClick={props.close}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ViewOrder 