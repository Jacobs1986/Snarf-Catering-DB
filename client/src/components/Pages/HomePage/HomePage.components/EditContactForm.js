import React, { useContext, useReducer } from "react";

// Bootstrap
import { Form, Col, Button } from 'react-bootstrap';

// Functions
import { reducer as editReducer } from '../../../../services/functions/reducers';

// Import Contexts
import { ModalContext } from './ModalViewCustomer';

// API
import { editContact } from '../../../../services/api/API.contacts';

export default function EditContactForm() {
    const { editFormInfo, setShowEditForm, setUpdateModal } = useContext(ModalContext);
    const [ editInfo, setEditInfo ] = useReducer(editReducer, editFormInfo);

    // handle in the input changes
    const handleEditInput = event => {
        setEditInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    // Hide the edit form
    const handleHideEditForm = () => {
        setEditInfo({ reset: true } )
        setShowEditForm(false);
    }

    // Hanlde submit the edits
    const handleSubmitEdit = () => {
        editContact(editInfo).then(() => {
            setUpdateModal(true);
            handleHideEditForm();
        })
    }

    return (
        <div>
            <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control name="name" value={editInfo.name || ''} onChange={handleEditInput} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" name="phone" value={editInfo.phone || ''} onChange={handleEditInput} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control name="email" value={editInfo.email || ''} onChange={handleEditInput} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Button variant="primary" style={{ marginRight: '1rem' }} onClick={handleSubmitEdit}>Edit</Button>
                    <Button variant="secondary" onClick={handleHideEditForm}>Close</Button>
                </Form.Group>
            </Form.Row>
            </Form>
        </div >
    );
};