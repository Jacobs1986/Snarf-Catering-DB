import React, { useContext } from "react";

// Bootstrap
import { Col, Form } from 'react-bootstrap';

// Context
import { InputContext } from '../InputOrder';

export default function EndCalc() {
    const { endCalculations, setEndCalculations } = useContext(InputContext);

    // info function
    const handleInfoChange = event => {
        var newValue;
        if (event.target.value === '') {
            newValue = 0
        } else {
            newValue = event.target.value
        }
        setEndCalculations({
            name: event.target.name,
            value: newValue
        })
    }

    return (
        <Form.Row className='order-rows'>
            <Col xs="auto">
                <h4>Gratuity:</h4>
            </Col>
            <Col xs={1}>
                <Form.Control name='gratuity' value={endCalculations.gratuity || ''} onChange={handleInfoChange} />
            </Col>
            <Col xs="auto">
                <h4>Delivery:</h4>
            </Col>
            <Col xs={1}>
                <Form.Control name='delivery' value={endCalculations.delivery || ''} onChange={handleInfoChange} />
            </Col>
            <Col xs="auto">
                <h4>Sales Tax:</h4>
            </Col>
            <Col xs={1}>
                <Form.Control name='salesTax' value={endCalculations.salesTax || ''} onChange={handleInfoChange} />
            </Col>
            <Col xs="auto">
                <h4>Adjustment:</h4>
            </Col>
            <Col xs={1}>
                <Form.Control name='adjustment' value={endCalculations.adjustment || ''} onChange={handleInfoChange} />
            </Col>
        </Form.Row>
    );
};