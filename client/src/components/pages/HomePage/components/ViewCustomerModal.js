import React, { createContext, useContext, useEffect, useState } from "react";

// Bootstrap
import { Modal, Row, Col, Table, Button } from 'react-bootstrap';

// Import Contexts
import { CustomerContext } from './CustomerCard';

// Import Components
import AddContact from './AddContact';
import EditContact from './EditContact';

// API
import { getOrganization } from '../../../services/API.organizations';
import { deleteContact } from '../../../services/API.contacts';

// Create context
export const ModalContext = createContext();

export default function ViewCustomerModal() {
    const { customerId, setCustomerId } = useContext(CustomerContext);
    const [ customerInfo, setCustomerInfo ] = useState();
    const [ showAdd, setShowAdd ] = useState(false);
    const [ showEdit, setShowEdit ] = useState(false);
    const [ modalHide, setModalHide ] = useState(false);
    const [ editInfo, setEditInfo]  = useState({});
    const [ update, setUpdate ] = useState(false);

    // set the customerInfo
    useEffect(() => {
        if (customerId) {
            getOrganization(customerId).then(data => {
                setCustomerInfo(data.data);
                setModalHide(true);
                if (update) {
                    setUpdate(false)
                }
            })
        }
        // setCustomerInfo(organizations[0]);
    }, [customerId, update])

    // hide the modal
    const handleHide = () => {
        setModalHide(false)
        setShowAdd(false)
        setCustomerId()
    }

    // Show the add Contact form
    const handleShowAdd = () => { setShowAdd(true) }

    // handle editing a contact
    const handleShowEdit = event => {
        setEditInfo(customerInfo.Contacts[event.target.id])
        setShowEdit(true);
    }

    // delete a contact
    const handleDeleteContact = event => {
        event.preventDefault()
        deleteContact(event.target.id).then(() => {
            setUpdate(true);
        })

    }

    return (
        <div>
            {!customerInfo ? <div></div> :
                <Modal show={modalHide} dialogClassName="viewer-modal" backdrop="static" onHide={handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{customerInfo.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md="auto">
                                <h5>Address: {customerInfo.address}</h5>
                            </Col>
                            <Col md="auto">
                                <h5>Number of Orders: {customerInfo.Orders.length}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="auto">
                                <h5>Contacts:</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="auto">
                                <Button variant="primary" onClick={handleShowAdd}>Add Contact</Button>
                            </Col>
                        </Row>
                        <ModalContext.Provider value={{ customerInfo, editInfo, setShowAdd, setShowEdit, setUpdate }}>
                            {!showAdd ? <div></div> :
                                <AddContact />
                            }
                            {!showEdit ? <div></div> :
                                <EditContact />
                            }
                        </ModalContext.Provider>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th width="10">Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerInfo.Contacts.map((contact, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{contact.name}</td>
                                            <td>{contact.phone}</td>
                                            <td>{contact.email}</td>
                                            <td>
                                                <Button style={{ marginRight: '1rem' }} id={index} onClick={handleShowEdit} className="table-btn">Edit</Button>
                                                <Button className="table-btn" id={contact.id} onClick={handleDeleteContact}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            }
        </div>
    );
};