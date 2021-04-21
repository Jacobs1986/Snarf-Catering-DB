import React, { useContext } from "react";

// Bootstrap
import { Form, Col } from 'react-bootstrap';

// Context
import { InputContext } from '../InputOrder';

export default function DateInput() {
    const { input, setInput } = useContext(InputContext)

    // handle input change
    const handleInputChange = event => {
        setInput({
            name: event.target.name,
            value: event.target.value.toUpperCase()
        })
    }

    return (
        <Form.Row className='order-rows'>
            <Col>
                <Form.Label>Date:</Form.Label>
                <Form.Control name='date' type='date' value={input.date || '' } onChange={handleInputChange} />
            </Col>
            <Col>
                <Form.Label>Order/Reciept Number:</Form.Label>
                <Form.Control name='orderNum' value={input.orderNum || '' } onChange={handleInputChange} />
            </Col>
        </Form.Row>
    );
};