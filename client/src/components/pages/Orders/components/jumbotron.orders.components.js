import React, { Component } from "react";

// Bootstrap
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

// API
import API from "../../../../utils/API.orders";

// moment.js
import moment from "moment";

class Jumbo extends Component {
    state = {
        contact: "",
        address: "",
        email: "",
        phone: "",
        orderList: [],
        lastOrder: "",
        frequentDay: "",
        customerId: "",
        organization: ""
    }

    componentDidMount() {
        // get the url from the window
        let url = window.location.search;
        // set the customerId
        let customerId = url.split("=")[1];
        // Get the customer information
        API.info(customerId).then(result => {
            // set the states
            this.setState({
                customerId: customerId,
                orderList: result.data.Orders,
                organization: result.data.organization,
                contact: result.data.contactname,
                address: result.data.address,
                email: result.data.email,
                phone: result.data.phone
            }) 
        })
    }

    // function to calculate which days of the week the customer usually orders on
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