import React, { useContext, useReducer } from "react";

// Bootstrap
import { Form, Col, Button } from 'react-bootstrap';

// Context
import { ModalContext } from './ViewCustomerModal';

// API
import { addContact } from '../../../services/API.contacts';

// Add Reducer
const conReducer = (state, event) => {
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

export default function AddContact() {
    const { customerInfo, setShowAdd, setUpdate } = useContext(ModalContext);
    const [ addInfo, setAddInfo ] = useReducer(conReducer, {});

    // Hide the add Contact form
    const handleHideAdd = () => {
        setShowAdd(false)
        setAddInfo({ reset: true })
    }

     // Handle add contact changes
     const handleAddForm = event => {
        setAddInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    // Add new customer to the organization
    const handleSubmitAdd = (event) => {
        event.preventDefault()
        let info = {
            ...addInfo,
            OrganizationId: customerInfo.id
        }
        addContact(info).then(() => {
            setUpdate(true);
            setAddInfo({ reset: true });
            setShowAdd(false);
        })
    }

    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control name="name" onChange={handleAddForm} value={addInfo.name || ''} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" name="phone" onChange={handleAddForm} value={addInfo.phone || ''} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control name="email" onChange={handleAddForm} value={addInfo.email || ''} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Button variant="primary" style={{ marginRight: '1rem' }} onClick={handleSubmitAdd}>Submit</Button>
                        <Button variant="secondary" onClick={handleHideAdd}>Close</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};