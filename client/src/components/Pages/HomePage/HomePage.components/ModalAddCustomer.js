import React, { useContext, useReducer, useState } from "react";

// Bootstrao
import { Button, Col, Form, Modal } from 'react-bootstrap';

// Import contexts
import { StoreContext } from '../HomePage';

// Functions
import { reducer as modalReducer } from '../../../../services/functions/reducers';

// API Routes
import { addOrganization } from '../../../../services/api/API.organizations';
import { addContact } from '../../../../services/api/API.contacts';

export default function AddCustomerModal() {
    const { setUpdateInfo, storeId } = useContext(StoreContext);
    const [ showModal, setShowModal ] = useState(false);
    const [ modalInfo, setModalInfo ] = useReducer(modalReducer, {})
    const [ inputCheck, setInputCheck ] = useState(false)

    // show the Modal
    const handleShowModal = () => {
        if (showModal) {
            setModalInfo({ reset: true });
        }
        if (inputCheck) {
            setInputCheck(false);
        }
        setShowModal(!showModal)
    }

    // Handle get info 
    const handleModalInput = event => {
        setModalInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    // Handle submit info
    const handleSubmitInfo = () => {
        if (!modalInfo.orgName && !modalInfo.contactName) {
            setInputCheck(true);
            return
        }
        // check to see if the organization name is blank, if it is then set it to the contact name
        if (!modalInfo.orgName) {
            modalInfo.orgName = modalInfo.contactName
        }
        let orgInfo = {
            name: modalInfo.orgName,
            address: modalInfo.address,
            StoreId: storeId
        }
        addOrganization(orgInfo).then(data => {
            // set the information for the contact
            let contactInfo = {
                name: modalInfo.contactName,
                phone: modalInfo.phone,
                email: modalInfo.email,
                OrganizationId: data.data.id
            }
            // add the contact info
            addContact(contactInfo).then(() => {
                handleShowModal();
                setUpdateInfo(true);
            })
        })
    }

    return (
        <div style={{ marginBottom: '7px' }}>
            <Button variant='primary' onClick={handleShowModal}>Add Customer</Button>
            <Modal show={showModal} backdrop='static' onHide={handleShowModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Input for the new organization */}
                    <Form>
                        {/* Organization name */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Organization:</Form.Label>
                                <Form.Control name="orgName" value={modalInfo.orgName || '' } onChange={handleModalInput} />
                            </Form.Group>
                        </Form.Row>
                        {/* Organization address */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Address:</Form.Label>
                                <Form.Control name="address" value={modalInfo.address || '' }  onChange={handleModalInput} />
                            </Form.Group>
                        </Form.Row>
                        <h4>Contact Info</h4>
                        {/* Contact Name, phone number */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control name="contactName" value={modalInfo.contactName || '' } onChange={handleModalInput}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Phone Number:</Form.Label>
                                <Form.Control name="phone" type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" value={modalInfo.phone || '' } onChange={handleModalInput}/>
                            </Form.Group>
                        </Form.Row>
                        {/* Email */}
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control name="email" type='email' value={modalInfo.email || '' } onChange={handleModalInput}/>
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
                    <Button variant='primary' onClick={handleSubmitInfo} >Add</Button>
                    <Button variant='secondary' onClick={handleShowModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};