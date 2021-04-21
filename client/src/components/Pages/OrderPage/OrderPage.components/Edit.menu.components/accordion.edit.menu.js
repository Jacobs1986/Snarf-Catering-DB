import React from "react";

// Bootstrap
import { Accordion, Card } from 'react-bootstrap';

// Components
import SaladMenu from './salad.edit.menu';
import SideMenu from './side.edit.menu';
import DrinkMenu from './drink.edit.menu';
import DessertMenu from './dessert.edit.menu';
import ExtraMenu from './extra.edit.menu';

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