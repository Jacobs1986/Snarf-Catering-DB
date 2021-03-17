import React, { useContext, useReducer, useState } from "react";

// Bootstrap
import { Button, Col, Form, Modal } from "react-bootstrap";

// Import context
import { StoreContext, ArrayContext } from '../HomePage';

// API
import { addOrganization } from '../../../services/API.organizations';
import { addContact } from '../../../services/API.contacts';

// reducers
const orgReducer = (state, event) => {
    if (event.reset) {
        return {
            name: '',
            address: '',
        }
    }
    return {
        ...state,
        [event.name]: event.value,
    }
}

const conReducer = (state, event) => {
    if (event.reset) {
        return {
            name: '',
            phone: '',
            email: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function CustomerModal() {
    const { storeId } = useContext(StoreContext);
    const { setUpdateArray } = useContext(ArrayContext);
    const [ show, setShow ] = useState(false);
    const [ inputCheck, setInputCheck ] = useState(false)
    const [ organizationData, setOrganizationData] = useReducer(orgReducer, {});
    const [ contactData, setContactData ] = useReducer(conReducer, {});

    // Show the Modal
    const handleShow = () => setShow(true);

    // Hide the Modal
    const handleHide = () => {
        setShow(false);
        setInputCheck(false);
        setOrganizationData({
            reset: true
        });
        setContactData({
            reset: true
        })
    };

    const handleSubmit = event => {
        event.preventDefault()
        if (!organizationData.name && !contactData.name) {
            setInputCheck(true);
            return
        } else {
            // Check to see if the organization name is still blank
            if (!organizationData.name) {
                organizationData.name = contactData.name
            }
            // set variable for the organization data
            let orgInfo = {
                ...organizationData,
                StoreId: storeId
            }
            addOrganization(orgInfo).then(data => {
                // set the information for the contact
                let contactInfo = {
                    ...contactData,
                    OrganizationId: data.data.id
                }
                // add the contact info
                addContact(contactInfo).then(() => {
                    setShow(false);
                    setInputCheck(false);
                    setUpdateArray(true);
                    setOrganizationData({
                        reset: true
                    })
                    setContactData({
                        reset: true
                    })
                })
            })
        }
    }

    // Handle Change functions

    const handleOrgChange = event => {
        setOrganizationData({
            name: event.target.name,
            value: event.target.value,
        })
    }

    const handleConChange = event => {
        setContactData({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <div style={{ marginBottom: '7px' }}>
            <Button variant="primary" onClick={handleShow}>Add Customer</Button>
            <Modal show={show} backdrop="static" onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Organization:</Form.Label>
                                <Form.Control name="name" onChange={handleOrgChange} value={organizationData.name || ''} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Address:</Form.Label>
                                <Form.Control name="address" onChange={handleOrgChange} value={organizationData.address || ''} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <h4>Contact Info:</h4>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control name="name" onChange={handleConChange} value={contactData.name || ''} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Phone Number:</Form.Label>
                                <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" name="phone" onChange={handleConChange} value={contactData.phone || ''} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleConChange} value={contactData.email || ''} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Col xs="auto">
                                {inputCheck &&
                                    <Form.Text className="input-needed">Please enter a contact and/or organization. Both cannot be blank.</Form.Text>
                                }
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>Add</Button>
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};