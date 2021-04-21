import React, { useContext } from "react";

// Bootstrap
import { Form, Col } from 'react-bootstrap';

// Context
import { EditContext } from '../ModalEditOrder';

export default function Notes() {
    const { editInput, setEditInput } = useContext(EditContext);

    // handle input change
    const handleInputChange = event => {
        setEditInput({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <Form.Row>
            <Col md={12}>
                <Form.Control 
                    as='textarea'
                    name='notes'
                    rows='3'
                    value={editInput.notes || ''}
                    onChange={handleInputChange}
                />
            </Col>
        </Form.Row>
    );
};