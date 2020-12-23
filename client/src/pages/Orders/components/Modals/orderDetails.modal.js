import React, { Component } from "react";

// Bootstrap
import { Modal, Container, Row, Col, Button } from "react-bootstrap"

// styling
import "../../orders.page.css";

class OrderModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false, 
            info: ""
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.info !== this.props.info) {
            this.setState({
                showModal: true,
                info: this.props.info
            })
        }
    }

    // close the modal
    handleModelClose = () => {
        this.setState({ showModal: false })
    };

    render() {
        return (
            <Modal show={this.state.showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Order #{this.state.info.orderNumber}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md="auto">
                                <h5>Date:</h5>
                                <h6 className="modal-h6">{this.state.info.date}</h6>
                            </Col>
                            <Col md="auto">
                                <h5>Number of Items:</h5>
                                <h6>{this.state.info.numofItems}</h6>
                            </Col>
                            <Col md="auto">
                                <h5>Total:</h5>
                                <h6>${this.state.info.total}</h6>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleModelClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default OrderModal;