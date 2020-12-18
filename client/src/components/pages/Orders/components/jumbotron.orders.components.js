import React, { Component } from "react";

// Bootstrap
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

class Jumbo extends Component {
    state = {
        contact: "",
        address: "",
        email: "",
        phone: "",
        orderList: [],
        lastOrder: "",
        frequentDay: ""
    }

    render() {
        return (
            <Jumbotron fluid>
            <Container fluid>
                <a href="/">Back</a>
                <h1>{this.state.organization}</h1>
                <Row>
                    <Col md={5}>
                        <h4>Contact: <span>{this.state.contact}</span></h4>
                        <h4>Address: <span>{this.state.address}</span></h4>
                        <h4>Email: <span>{this.state.email}</span></h4>
                        <h4>Phone: <span>{this.state.phone}</span></h4>
                    </Col>
                    <Col md={6}>
                        <h4>Number of Orders: <span>{this.state.orderList.length}</span></h4>
                        <h4>Last Order: <span>{this.state.lastOrder}</span></h4>
                        <h4>Frequently Orders On: <span>{this.state.frequentDay}</span></h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        )
    }
}

export default Jumbo;