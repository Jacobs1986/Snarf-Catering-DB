import React, { Component } from "react";

// Bootstrap
import { Modal, Container, Row, Col } from "react-bootstrap"

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

    componentDidUpdate(prevProps) {
        if (prevProps.show !== this.props.show) {
            this.setState({
                showModal: this.props.show,
                info: this.props.info
            }, () => {
                console.log(this.state.info)
            })
        }
    }

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
            </Modal>
        )
    }
}

export default OrderModal;