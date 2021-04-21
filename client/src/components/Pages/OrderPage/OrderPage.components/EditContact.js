import React, { useContext, useReducer } from "react";

// Bootstrap
import { Form, Col, Button } from 'react-bootstrap';

// Context
import { CustomerContext } from '../OrderPage';
import { ModalContext } from './ModalViewContacts';

// API 
import { editContact } from '../../../../services/api/API.contacts';

// Functions
import { reducer as editReducer } from '../../../../services/functions/reducers';

export default function EditContact() {
    const { setUpdateArray } = useContext(CustomerContext)
    const { editInfo, setShowEdit } = useContext(ModalContext)
    const [ editReduc, setEditReduc ] = useReducer(editReducer, editInfo)

    // Hide the edit Form
    const handleHideForm = () => { setShowEdit(false) }

    // Handle edit contact changes
    const handleEditForm = event => {
        setEditReduc({
            name: event.target.name,
            value: event.target.value
        })
    }

    const handleEditSubmit = event => {
        event.preventDefault()
        editContact(editReduc).then(() => {
            setShowEdit(false);
            setUpdateArray(true);
        })
    }

    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control name="name" value={editReduc.name || ''} onChange={handleEditForm} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" name="phone" value={editReduc.phone || ''} onChange={handleEditForm} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" value={editReduc.email || ''} onChange={handleEditForm} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Button variant="primary" style={{ marginRight: '1rem' }} onClick={handleEditSubmit}>Edit</Button>
                        <Button variant="secondary" onClick={handleHideForm}>Close</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};