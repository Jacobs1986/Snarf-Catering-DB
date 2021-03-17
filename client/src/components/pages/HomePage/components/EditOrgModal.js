import React, { useContext, useReducer } from "react";

// Bootstrap
import { Modal, Col, Form, Button } from 'react-bootstrap';

// Context
import { EditOrgContext } from './CustomerCard';
import { ArrayContext } from '../HomePage';

// API
import { editOrganization } from '../../../services/API.organizations';

// Reducer
const editReducer = (state, event) => {
    if (event.reset) {
        return {
            name: '',
            address: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function EditOrgModal() {
    const { setUpdateArray } = useContext(ArrayContext);
    const { editInfo, setEditInfo, showEdit, setShowEdit } = useContext(EditOrgContext);
    const [info, setInfo] = useReducer(editReducer, editInfo);

    // Hide the modal
    const modalHide = () => {
        setEditInfo();
        setShowEdit(false);
    }

    // Edit the information
    const handleEditChange = event => {
        setInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    // Submit the new information
    const handleEditSubmit = event => {
        event.preventDefault();
        editOrganization(info).then(() => {
            setUpdateArray(true);
            setShowEdit(false);
        })
    }

    return (
        <div>
            <Modal show={showEdit} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Organization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control name="name" value={info.name || ''} onChange={handleEditChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Address:</Form.Label>
                                <Form.Control name="address" value={info.address || ''} onChange={handleEditChange} />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEditSubmit}>Edit</Button>
                    <Button variant="secondary" onClick={modalHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};