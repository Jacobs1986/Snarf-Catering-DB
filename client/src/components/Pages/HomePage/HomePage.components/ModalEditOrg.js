import React, { useContext, useEffect, useReducer, useState } from "react";

// Bootstrap
import { Button, Col, Form, Modal } from 'react-bootstrap';

// Contexts
import { CustomerInfoContext } from './CustomerCard';
import { StoreContext } from '../HomePage';

// Functions
import { reducer as editReducer } from '../../../../services/functions/reducers';

// API routes
import { editOrganization } from '../../../../services/api/API.organizations';

export default function EditOrgModal() {
    const { editOrg, setEditOrg } = useContext(CustomerInfoContext);
    const { setUpdateInfo } = useContext(StoreContext);
    const [editInfo, setEditInfo] = useReducer(editReducer, editOrg);
    const [showModal, setShowModal] = useState(false);

    // Show the modal when editInfo is not unknown
    useEffect(() => {
        if (editOrg) {
            setShowModal(true);
        }
    }, [editOrg])

    // Hide the modal
    const handleHide = () => {
        setShowModal(false);
        setEditOrg();
    }

    // Handle the changing of information
    const handleChange = event => {
        setEditInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    // Submit changes to the organization
    const handleSubmitEdit = () => {
        editOrganization(editInfo).then(() => {
            setUpdateInfo(true);
            setShowModal(false);
        });
    }

    return (
        <div>
            <Modal show={showModal} backdrop='static' onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Organization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control name="name" value={editInfo.name || ''} onChange={handleChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Address:</Form.Label>
                                <Form.Control name="address" value={editInfo.address || ''} onChange={handleChange} />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmitEdit} >Edit</Button>
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};