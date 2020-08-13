import React from "react";

// Bootstrap
import { Container, Table } from "react-bootstrap"

function History(props) {
    return (
        <Container>
            <h3>Order History</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Order Number</th>
                        <th>Type of Order</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.date}</td>
                        <td>{props.num}</td>
                        <td>{props.type}</td>
                        <td>{props.total}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default History