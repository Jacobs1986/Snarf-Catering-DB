import React, { Component } from "react";

// Bootstrap
import { Modal } from "react-bootstrap"

class OrderModal extends Component {
   constructor(props) {
       super(props);

       this.state = {
           show: props.show
       }
   }

    render() {
        return (
            <div>This component is ready to be made</div>
        )
    }
}

export default OrderModal;