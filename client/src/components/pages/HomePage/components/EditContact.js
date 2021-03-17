import React, { useContext, useReducer } from "react";

// Bootstrap
import { Form, Col, Button } from 'react-bootstrap';

// Context
import { ModalContext } from './ViewCustomerModal';

// API 
import { editContact } from '../../../services/API.contacts';

// Reducer
const editReducer = (state, event) => {
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

export default function EditContact() {
    const { editInfo, setShowEdit, setUpdate } = useContext(ModalContext)
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
            setUpdate(true);
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