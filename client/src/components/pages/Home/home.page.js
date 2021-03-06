import React, { Component } from "react";

// API
import API from "../../../utils/API.customer";

// Bootstrap
import { Container, Row, Col, Jumbotron, Button, Form } from "react-bootstrap"

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
        customerId: "",
        sortBy: "organization",
        sortType: "",
        searchType: "organization",
        searchFor: ""
    }

    componentDidMount() {
        this.loadCustomers()
    }

    // load all customers
    loadCustomers = () => {
        API.all().then(res => {
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
        if (this.state.organization === "") {
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

    // sort customer list
    sortList = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ 
            [name]: value 
        }, () => {
            if (this.state.sortType === "") {
                return
            } else {
                let sortInfo = {
                    sortBy: this.state.sortBy,
                    sortType: this.state.sortType
                }
                API.sort(sortInfo).then(res => {
                    this.setState({ customerList: res.data })
                })
            }
        });
    }

    // Search for function
    searchCustomer = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ 
            [name]: value 
        }, () => {
            let searchInfo = {
                column: this.state.searchType,
                searchFor: this.state.searchFor
            }
            API.search(searchInfo).then(res => {
                this.setState({ customerList: res.data });
            })
        });
    }

    // Clear search
    clearSearch = event => {
        event.preventDefault();
        this.loadCustomers();
        this.setState({ searchFor: ""  });
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
                <Jumbotron id="jumboindex">
                    <h1>Snarf Catering DB</h1>
                    <p>This is the database that contains the information for catering.</p>
                    <Button variant="primary" onClick={this.handleShow}>Add Customer</Button>
                </Jumbotron>

                {/* Sort list */}
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="auto">
                            Sort list by:
                        </Form.Label>
                        <Col sm="auto">
                            <Form.Control as="select" onChange={this.sortList} name="sortBy" value={this.state.sortBy}>
                                <option value="organization">Organization Name</option>
                                <option value="contactname">Contact Name</option>
                                <option value="address">Address</option>
                                <option value="email">Email</option>
                            </Form.Control>
                        </Col>
                        <Col sm="auto" id="radio-col">
                            <Form.Check 
                                inline
                                type="radio"
                                name="sortType"
                                label="ASC"
                                value="ASC"
                                onClick={this.sortList}
                            />
                            <Form.Check 
                                inline
                                type="radio"
                                name="sortType"
                                label="DESC"
                                value="DESC"
                                onClick={this.sortList}
                            />
                        </Col>
                    </Form.Group>
                </Form>
                
                {/* Search Bar */}
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="auto">
                            Search for: 
                        </Form.Label>
                        <Col sm="auto">
                            <Form.Control as="select" name="searchType" value={this.state.searchType} onChange={this.handleInputChange}>
                                <option value="organization">Organization</option>
                                <option value="contactname">Contact</option>
                                <option value="address">Address</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </Form.Control>
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                                type="text"
                                name="searchFor"
                                value={this.state.searchFor}
                                onChange={this.searchCustomer}
                            />
                        </Col>
                        <Col sm="auto">
                            <Button variant="secondary" onClick={this.clearSearch}>Clear</Button>
                        </Col>
                    </Form.Group>
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