import React, { Component } from "react";

// Bootstrap
import { Container, Table, Button } from "react-bootstrap";

// API
import API from "../../../utils/API.orders";

class orderTable extends Component {
    state = {
        customerId: "",
        orderList: []
    }

    componentDidMount() {
        // get customerId
        let url = window.location.search;
        let customerId = url.split("=")[1];
        // Get the info
        API.info(customerId).then(result => {
            this.setState({
                customerId: customerId,
                orderList: result.data.Orders
            })
        })
    }

    // display the order
    displayOrder = event => {
        let info = this.state.orderList[event.target.id];
        console.log(info);
    }

    render() {
        return (
            <Container id="history-row">
                <h3>Order History</h3>
                <Table striped>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Order Number</th>
                                    <th>Number of Items</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orderList.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.date}</td>
                                            <td><Button variant="link" className="table-button" id={index} onClick={this.displayOrder}>{info.orderNumber}</Button></td>
                                            <td>{info.numofItems}</td>
                                            <td>{info.total}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
            </Container>
        )
    }
}

export default orderTable;