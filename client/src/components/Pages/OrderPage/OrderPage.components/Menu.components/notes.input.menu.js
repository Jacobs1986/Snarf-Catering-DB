import React, { useContext } from "react";

// Bootstrap
import { Form, Col } from 'react-bootstrap';

// Context
import { InputContext } from '../InputOrder';

export default function Notes() {
    const { input, setInput } = useContext(InputContext);

    // handle input change
    const handleInputChange = event => {
        setInput({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <Form.Row>
            <Col md={6}>
                <Form.Control 
                    as='textarea'
                    name='notes'
                    rows='3'
                    value={input.notes || ''}
                    onChange={handleInputChange}
                />
            </Col>
        </Form.Row>
    );
};