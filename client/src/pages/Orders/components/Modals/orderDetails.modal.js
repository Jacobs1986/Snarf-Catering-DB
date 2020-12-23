import React, { Component } from "react";

// Bootstrap
import { Modal } from "react-bootstrap"

class OrderModal extends Component {
   constructor(props) {
       super(props);
       this.state = {
           info: ""
       }
   }

   componentDidUpdate(prevProps) {
       if (prevProps.show !== this.props.show) {
           this.setState({
               info: this.props.info
           }, () => {
               console.log(this.state.info)
           })
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