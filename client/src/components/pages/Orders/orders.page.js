import React, { Component } from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// Components
import NewOrder from "./components/component.orders";

// Modals
import ViewOrder from "./Modals/Modal.vieworder";
import EditOrder from "./Modals/Modals.editorder";

// sytle sheet
import "./orders.page.css";

// API routes
import API from "../../../utils/API.orders";

// moment.js
import moment from "moment"

class Orders extends Component {
    state = {
        customerId: "",
        orderList: [],
        organization: "",
        contact: "",
        address: "",
        email: "",
        phone: "",
        lastOrder: "",
        frequentDay: "",
        showOrder: false,
        editOrder: false,
        orderId: "",
        modalOrderNum: "",
        modalDate: "",
        modalType: "",
        modalnumItems: "",
        modalTotal: "",
        modalChips: "",
        modalSalad: "",
        modalPick: "",
        modalCook: "",
        modaltotalChip: "",
        modaltotalSalad: "",
        modaltotalPick: "",
        modaltotalCook: "",
        modalNotes: ""
    }

    componentDidMount() {
        this.loadInfo();
    }

    // load customer info with orders
    loadInfo = () => {
        let url = window.location.search;
        let customerId = url.split("=")[1];
        // console.log(customerId);
        API.info(customerId).then(result => {
            console.log(result.data.Orders);
            this.setState({
                customerId: customerId,
                orderList: result.data.Orders,
                organization: result.data.organization,
                contact: result.data.contactname,
                address: result.data.address,
                email: result.data.email,
                phone: result.data.phone,
                newOrderDate: ""
            })
            if (!this.state.orderList[0]) {
                this.setState({
                    lastOrder: "0"
                })
            } else {
                this.setState({
                    lastOrder: this.state.orderList[0].date
                })
            }
            if (this.state.orderList.length === 0) {
                this.setState({ frequentDay: "NA" })
            } else {
                this.orderDay();
            }
        })
    }

    // get the order day frequency
    orderDay = () => {
        let daysoftheWeek = []
        let orders = this.state.orderList
        orders.forEach(info => {
            let convertedDate = moment(info.date).format("dddd");
            daysoftheWeek.push(convertedDate);
        })
        // The function now needs to count the number of instances of a day
        // Create a new array called dayOccurences
        let dayOccurences = [];
        // start the loop
        for (let i = 0; i < daysoftheWeek.length; i++) {
            // first get the day from daysoftheWeek
            let weekDay = daysoftheWeek[i];
            // search the dayOccurence for that day, set the variable to be searchFor
            let indexofDay = dayOccurences.findIndex(index => index.day === weekDay);
            if (indexofDay === -1) {
                // create filter
                let filter = daysoftheWeek.filter(days => days === weekDay);
                // create an object dayResults that will save the weekDay and occurences
                let dayResults = {
                    day: weekDay,
                    occurences: filter.length
                }
                // push into dayOccurences
                dayOccurences.push(dayResults);
            }
        }
        // sort the array from least to greatest of occurences
        let compare = (a, b) => {
            let comparison = 0
            if (a.occurences >= b.occurences) {
                comparison = 1;
            } else if (a.occurences <= b.occurences) {
                comparison = -1
            }
            return comparison
        }
        let sortedDays = dayOccurences.sort(compare);
        let frequentDay = sortedDays[sortedDays.length - 1].day;
        this.setState({ frequentDay: frequentDay })
    }

    // handle the changes
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    // Modal Functions

    // Show ViewOrder Modal
    handleViewOrderShow = event => {
        event.preventDefault();
        let arrayNum = event.target.id
        let orderLoc = this.state.orderList[arrayNum]
        this.setState({
            showOrder: true,
            orderId: orderLoc.id,
            modalOrderNum: orderLoc.orderNumber,
            modalDate: orderLoc.date,
            modalType: orderLoc.orderType,
            modalnumItems: orderLoc.numofItems,
            modalTotal: orderLoc.total,
            modalChips: orderLoc.numofChips,
            modalSalad: orderLoc.numofSalad,
            modalPick: orderLoc.numofPick,
            modalCook: orderLoc.numofCook,
            modaltotalChip: orderLoc.totalChips,
            modaltotalSalad: orderLoc.totalSalad,
            modaltotalPick: orderLoc.totalPick,
            modaltotalCook: orderLoc.totalCook,
            modalNotes: orderLoc.notes
        })
    }

    // Show EditOrder Modal
    handleViewEditOrder = event => {
        event.preventDefault()
        this.setState({
            showOrder: false,
            editOrder: true
        })
    }

    handleViewOrderClose = () => {
        this.setState({ showOrder: false })
    }

    handleEditOrderClose = () => {
        this.setState({ editOrder: false })
    }

    submitEdit = event => {
        event.preventDefault()
        let newEdit = {
            id: this.state.orderId,
            date: this.state.modalDate,
            orderNumber: this.state.modalOrderNum,
            numofItem: this.state.modalnumItems,
            numofChips: this.state.modalChips,
            totalChips: this.state.modaltotalChip,
            numofSalad: this.state.modalSalad,
            totalSalad: this.state.modaltotalSalad,
            numofPick: this.state.modalPick,
            totalPick: this.state.modaltotalPick,
            numofCook: this.state.modalCook,
            totalCook: this.state.modaltotalCook,
            total: this.state.modalTotal,
            notes: this.state.modalNotes
        }
        API.edit(newEdit).then(() => {
            this.handleEditOrderClose();
            this.loadInfo();
        })
    }

    deleteOrder = event => {
        event.preventDefault()
        API.delete(event.target.id).then(() => {
            this.handleViewOrderClose();
            this.loadInfo();
        })
    }

    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1>{this.state.organization}</h1>
                        <Row>
                            <Col md={6}>
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
                <Container>
                    <Row>
                        <NewOrder />
                    </Row>
                    <Row id="history-row">
                        <h3>Order History</h3>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Order Number</th>
                                    <th>Type of Order</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.orderList.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{info.date}</td>
                                            <td><Button variant="link" className="table-button" id={index} onClick={this.handleViewOrderShow}>{info.orderNumber}</Button></td>
                                            <td>{info.orderType}</td>
                                            <td>{info.total}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
                {/* Modals */}
                <ViewOrder
                    id={this.state.orderId} 
                    show={this.state.showOrder}
                    close={this.handleViewOrderClose}
                    orderNum={this.state.modalOrderNum}
                    date={this.state.modalDate}
                    type={this.state.modalType}
                    numItems={this.state.modalnumItems}
                    total={this.state.modalTotal}
                    chips={this.state.modalChips}
                    salad={this.state.modalSalad}
                    pickles={this.state.modalPick}
                    cookies={this.state.modalCook}
                    totalChip={this.state.modaltotalChip}
                    totalSalad={this.state.modaltotalSalad}
                    totalPickle={this.state.modaltotalPick}
                    totalCookie={this.state.modaltotalCook}
                    notes={this.state.modalNotes}
                    editOrder={this.handleViewEditOrder}
                    deleteOrder={this.deleteOrder}
                />
                <EditOrder 
                    show={this.state.editOrder}
                    close={this.handleEditOrderClose}
                    change={this.handleInputChange}
                    id={this.state.orderId}
                    orderNum={this.state.modalOrderNum}
                    date={this.state.modalDate}
                    type={this.state.modalType}
                    numItems={this.state.modalnumItems}
                    total={this.state.modalTotal}
                    chips={this.state.modalChips}
                    salad={this.state.modalSalad}
                    pickles={this.state.modalPick}
                    cookies={this.state.modalCook}
                    totalChip={this.state.modaltotalChip}
                    totalSalad={this.state.modaltotalSalad}
                    totalPickle={this.state.modaltotalPick}
                    totalCookie={this.state.modaltotalCook}
                    notes={this.state.modalNotes}
                    editBtn={this.submitEdit}
                />
            </>
        );
    };
}

export default Orders