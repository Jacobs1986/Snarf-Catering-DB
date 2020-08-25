import React, { Component } from "react";

// API
import API from "../../../utils/API.customer";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbo from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Modal
import AddModal from "./Modals/Modal-Add";
import EditModal from "./Modals/Modal-Edit";

// Styling
import "./home.page.css"

// Customer card
import Customer from "./Customer-Card";

class Home extends Component {
    state = {
        customerList: [],
        editCustomer: [],
        show: false,
        editShow: false,
        contact: "",
        organization: "",
        address: "",
        email: "",
        phone: "",
        customerId: ""
    }

    componentDidMount() {
        this.loadCustomers()
    }

    // load all customers
    loadCustomers = () => {
        API.all().then(res => {
            console.log(res.data);
            this.setState({ customerList: res.data });
        })
    }

    // Show the modal
    handleShow = event => {
        event.preventDefault()
        this.setState({ show: true });
    }

    // Close the modal
    handleClose = () => {
        this.setState({
            show: false,
            contact: "",
            organization: "",
            address: "",
            email: "",
            phone: ""
        });
    }

    // handle the changes
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    // add customer function
    addCustomer = event => {
        event.preventDefault()
        var organization;
        if (this.state.organization === "" ) {
            organization = this.state.contact;
        } else {
            organization = this.state.organization;
        }
        let customerInfo = {
            contactname: this.state.contact,
            organization: organization,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone
        }
        console.log(customerInfo);
        API.add(customerInfo).then(() => {
            this.handleClose()
            this.loadCustomers()
        })
    }

    // edit existing customer
    editCustomerModal = event => {
        event.preventDefault()
        API.editModal(event.target.id).then(result => {
            this.setState({
                contact: result.data.contactname,
                organization: result.data.organization,
                address: result.data.address,
                email: result.data.email,
                phone: result.data.phone,
                customerId: result.data.id,
                editShow: true
            });
        });
    }

    // close edit modal
    handleEditClose = () => {
        this.setState({
            editShow: false,
            contact: "",
            organization: "",
            address: "",
            email: "",
            phone: "",
            customerId: ""
        })
    }

    // edit customer informatiom
    editCustomer = event => {
        event.preventDefault()
        let editInfo = {
            contactname: this.state.contact,
            organization: this.state.organization,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone,
            id: this.state.customerId
        }
        API.edit(editInfo).then(() => {
            this.handleEditClose();
            this.loadCustomers();
        })
    }

    // delete customer
    deleteCustomer = event => {
        event.preventDefault()
        API.delete(event.target.id).then(() => {
            this.loadCustomers();
        })
    }

    render() {
        return (
            <Container>
                {/* Modals */}
                <AddModal
                    show={this.state.show}
                    close={this.handleClose}
                    change={this.handleInputChange}
                    contact={this.state.contact}
                    organization={this.state.organization}
                    address={this.state.address}
                    email={this.state.email}
                    phone={this.state.phone}
                    add={this.addCustomer}
                />

                <EditModal
                    show={this.state.editShow}
                    close={this.handleEditClose}
                    change={this.handleInputChange}
                    contact={this.state.contact}
                    organization={this.state.organization}
                    address={this.state.address}
                    email={this.state.email}
                    phone={this.state.phone}
                    edit={this.editCustomer}
                />

                {/* Jumbotron */}
                <Jumbo id="jumboindex">
                    <h1>Snarf Catering DB</h1>
                    <p>This is the database that contains the information for catering.</p>
                    <Button variant="primary" onClick={this.handleShow}>Add Customer</Button>
                </Jumbo>

                {/* Search bar */}
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Search Database</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group as={Col} id="button-col">
                            <Button variant="primary" type="submit">Search</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>

                <hr className="my-4"></hr>

                {/* div containing the lists */}
                <Row className="overflow-auto" id="customer-list">
                    {this.state.customerList.map((info, index) => {
                        return info.phone !== "" ?
                            <Customer
                                key={index}
                                id={info.id}
                                link={`/orders?customer_id=${info.id}`}
                                org={info.organization}
                                phone={info.phone}
                                contact={info.contactname}
                                address={info.address}
                                email={info.email}
                                edit={this.editCustomerModal}
                                delete={this.deleteCustomer}
                            />
                            : <Customer
                                key={index}
                                id={info.id}
                                link={`/orders?customer_id=${info.id}`}
                                org={info.organization}
                                phone="NA"
                                contact={info.contactname}
                                address={info.address}
                                email={info.email}
                                edit={this.editCustomerModal}
                                delete={this.deleteCustomer}
                            />
                    })}
                </Row>
            </Container>
        );
    };
}

export default Home