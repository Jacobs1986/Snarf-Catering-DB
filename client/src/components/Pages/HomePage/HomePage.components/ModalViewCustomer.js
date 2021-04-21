import React, { createContext, useContext, useEffect, useState } from "react";

// Import Contexts
import { CustomerInfoContext } from './CustomerCard';

// Bootstrap
import { Button, Col, Modal, Row, Table } from 'react-bootstrap';

// Components
import AddContactForm from './AddContactForm';
import EditContactForm from './EditContactForm';

// API
import { getOrganization } from '../../../../services/api/API.organizations';
import { deleteContact } from '../../../../services/api/API.contacts';

// Create a context for the Modals
export const ModalContext = createContext();

export default function ViewCustomerModal() {
    const { organizationId, setOrganizationId } = useContext(CustomerInfoContext);
    const [ viewInfo, setViewInfo ] = useState();
    const [ showAddForm, setShowAddForm ] = useState(false);
    const [ showEditForm, setShowEditForm ] = useState(false);
    const [ updateModal, setUpdateModal ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);
    const [ editFormInfo, setEditFormInfo ] = useState(false);

    // Get the information for the organization
    useEffect(() => {
        // Check to see if organizationId has a value
        if (organizationId) {
            // Pull from API
            getOrganization(organizationId).then(data => {
                // set the API to viewInfo
                // console.log(data.data);
                setViewInfo(data.data);
                // show the Modal
                setShowModal(true);
                if (updateModal) {
                    setUpdateModal(false);
                }
            })
        }
        else {
            return
        }
    }, [organizationId, updateModal]);

    // Handle hiding the modal
    const handleHide = () => {
        setShowModal(!showModal);
        setOrganizationId();
    }

    // Show the add form
    const handleShowAddForm = () => {
        setShowAddForm(true);
    }

    // Show the edit contact form
    const handleShowEditForm = (event) => {
        setEditFormInfo(viewInfo.Contacts[event.target.id]);
        setShowEditForm(true);
    }

    // Delete an existing contact
    const handleDeleteContact = event => {
        deleteContact(event.target.id).then(() => {
            setUpdateModal(true);
        })
    }

    return (
        <div>
            {!viewInfo ? <div></div> :
                <Modal show={showModal} dialogClassName="viewer-modal" backdrop="static" onHide={handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{viewInfo.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md="auto">
                                <h5>Address: {viewInfo.address}</h5>
                            </Col>
                            <Col md="auto">
                                <h5>Number of Orders: {viewInfo.Orders.length}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="auto">
                                <h5>Contacts:</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="auto">
                                <Button variant="primary" onClick={handleShowAddForm}>Add Contact</Button>
                            </Col>
                        </Row>
                        <ModalContext.Provider value={{ setShowAddForm, setUpdateModal, setShowEditForm, editFormInfo }}>
                            {/* Add contact form */}
                            {!showAddForm ? <></> : <AddContactForm id={viewInfo.id}/>}
                            {!showEditForm ? <></> : <EditContactForm /> }
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
                                {viewInfo.Contacts.map((contact, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{contact.name}</td>
                                            <td>{contact.phone}</td>
                                            <td>{contact.email}</td>
                                            <td>
                                                <span role='img' className='emoji-btn' id={index} onClick={handleShowEditForm}>🗒️</span><span role='img' id={contact.id} className='emoji-btn' onClick={handleDeleteContact}>❌</span>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>}
        </div>
    );
};