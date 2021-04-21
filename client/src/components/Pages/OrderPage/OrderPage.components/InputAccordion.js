import React from "react";

// Bootstrap
import { Accordion, Card } from 'react-bootstrap';

// Components
import SaladMenu from './Menu.components/salad.input.menu';
import SideMenu from './Menu.components/side.input.menu';
import DrinkMenu from './Menu.components/drink.input.menu';
import DessertMenu from './Menu.components/dessert.input.menu';
import ExtraMenu from './Menu.components/extra.input.menu';

export default function MenuAccordion() {
    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="menu-accordion">Salads</Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><SaladMenu /></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="menu-accordion">Sides</Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><SideMenu /></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="menu-accordion">Drinks</Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body><DrinkMenu /></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" className="menu-accordion">Desserts</Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body><DessertMenu /></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4" className="menu-accordion">Extras</Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                    <Card.Body><ExtraMenu /></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};