import React, { useContext } from "react";

// Bootstrap
import { Col, Form } from 'react-bootstrap';

// Context
import { CustomerContext } from '../../OrderPage';
import { InputContext } from '../InputOrder';

export default function SaladMenu() {
    const { menu } = useContext(CustomerContext);
    const { quantity, quantityTotal, handleCalculation } = useContext(InputContext);
    return (
        <div>
            {!menu ? <div></div> : menu.filter(item => item.itemType === 'salad').map((product, index) => {
                return (
                    <Form.Row key={index} className='order-rows' style={{ marginLeft: '1rem' }}>
                        <Col xs={2}>
                            <Form.Label>{product.item}</Form.Label>
                        </Col>
                        <Col xs="auto">
                            <Form.Label>Quantity:</Form.Label>
                        </Col>
                        <Col xs={2}>
                            <Form.Control name={product.item} type='number' value={quantity[product.item] || ''} onChange={handleCalculation} />
                        </Col>
                        <Col xs={2}>
                            <Form.Label>Price: ${product.price}</Form.Label>
                        </Col>
                        <Col xs="auto">
                            <Form.Label>Total: ${quantityTotal[product.item] || '0.00'}</Form.Label>
                        </Col>
                    </Form.Row>
                )
            })}
        </div>
    );
};