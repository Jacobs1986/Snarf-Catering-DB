import React, { useContext } from "react";

// Bootstrap
import { Form, Col } from 'react-bootstrap';

// Context
import { EditContext } from '../ModalEditOrder';

export default function DateInput() {
    const { editInput, setEditInput } = useContext(EditContext);

    // handle input change
    const handleInputChange = event => {
        setEditInput({
            name: event.target.name,
            value: event.target.value.toUpperCase()
        })
    }

    return (
        <Form.Row className='order-rows'>
            <Col>
                <Form.Label>Date:</Form.Label>
                <Form.Control name='date' type='date' value={editInput.date || ''} onChange={handleInputChange} />
            </Col>
            <Col>
                <Form.Label>Order/Reciept Number:</Form.Label>
                <Form.Control name='orderNum' value={editInput.orderNum || '' } onChange={handleInputChange} />
            </Col>
        </Form.Row>
    );
};