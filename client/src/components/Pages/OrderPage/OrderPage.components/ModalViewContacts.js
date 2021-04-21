import React, { createContext, useContext, useState } from "react";

// Styling
import { Button, Col, Modal, Row, Table } from 'react-bootstrap';

// Context
import { CustomerContext } from '../OrderPage';
import { JumboContext } from './Jumbo';

// Components
import AddContact from './AddContact';
import EditContact from './EditContact';

// API
import { deleteContact } from '../../../../services/api/API.contacts';

// Export contexts
export const ModalContext = createContext();

export default function ViewContactModal() {
    const { customerInfo, setUpdateArray } = useContext(CustomerContext);
    const { showContactModal, setShowContactModal } = useContext(JumboContext);
    const [ showAdd, setShowAdd ] = useState(false);
    const [ showEdit, setShowEdit ] = useState(false);
    const [ editInfo, setEditInfo ] = useState({})

    const handleHideModal = () => {
        setShowContactModal(false);
        setShowAdd(false);
        setShowEdit(false);
    }

    // Show the Add Contact form
    const handleShowAdd = event => {
        event.preventDefault();
        setShowAdd(true);
    }

    // Show the Edit Contact form
    const handleShowEdit = event => {
        setEditInfo(customerInfo.Contacts[event.target.id])
        setShowEdit(true);
    }

    // Delete a contact
    const handleDeleteContact = event => {
        event.preventDefault()
        deleteContact(event.target.id).then(() => {
            setUpdateArray(true);
        })
    }

    return (
        <div>
            {!customerInfo ? <div></div> :
                <Modal show={showContactModal} dialogClassName="contact-modal" onHide={handleHideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md="auto">
                                <Button variant="primary" onClick={handleShowAdd}>Add Contact</Button>
                            </Col>
                        </Row>
                        <ModalContext.Provider value={{ editInfo, setShowAdd, setShowEdit }}>
                            {!showAdd ? <div></div> : <AddContact />}
                            {!showEdit ? <div></div> : <EditContact />}
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
                                            <span role='img' className='emoji-btn' id={index} onClick={handleShowEdit} >🗒️</span><span role='img' id={contact.id} className='emoji-btn' onClick={handleDeleteContact}>❌</span>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleHideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>}
        </div>
    );
};