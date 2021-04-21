import React, { useContext, useReducer } from "react";

// Bootstrap
import { Form, Col, Button } from 'react-bootstrap';

// Import Contexts
import { ModalContext } from './ModalViewCustomer';

// Functions
import { reducer as addReducer } from '../../../../services/functions/reducers';

// API Routes
import { addContact } from '../../../../services/api/API.contacts';

export default function AddContactForm({ id }) {
    const { setShowAddForm, setUpdateModal } = useContext(ModalContext);
    const [ addInfo, setAddInfo ] = useReducer(addReducer, {})

    // Hide the add form
    const handleHideAddForm = () => {
        setShowAddForm(false);
        setAddInfo({ reset: true });
    }

    // Input new information
    const handleAddInput = event => {
        setAddInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    // Subnmit the new contact info
    const handleSubmit = () => {
        let newContact = {...addInfo, OrganizationId: id}
        addContact(newContact).then(() => {
            setUpdateModal(true);
            handleHideAddForm();
        });
    }

    return (
        <div>
            <Form>
                <Form.Row>
                    {/* Contact Name */}
                    <Form.Group as={Col}>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control name="name" value={addInfo.name || ''} onChange={handleAddInput} />
                    </Form.Group>
                    {/* Contact Phone */}
                    <Form.Group as={Col}>
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" name="phone" value={addInfo.phone || ''} onChange={handleAddInput} />
                    </Form.Group>
                    {/* Contact email */}
                    <Form.Group as={Col}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" value={addInfo.email || ''} onChange={handleAddInput} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    {/* Buttons */}
                    <Form.Group as={Col}>
                        <Button variant="primary" style={{ marginRight: '1rem' }} onClick={handleSubmit}>Submit</Button>
                        <Button variant="secondary" onClick={handleHideAddForm}>Close</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};