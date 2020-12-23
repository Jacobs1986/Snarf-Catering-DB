import React, { Component } from "react";

// Bootstrap
import { Modal } from "react-bootstrap"

class OrderModal extends Component {
   constructor(props) {
       super(props);
       this.state = {
       }
   }

    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>This is a test.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This modal is ready for information.
                </Modal.Body>
            </Modal>
        )
    }
}

export default OrderModal;