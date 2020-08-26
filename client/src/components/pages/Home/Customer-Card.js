import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CustomerCard(props) {
    return (
        <Card className="customer-card">
            <Card.Body>
                <a href={props.link}><Card.Title className="text-center">{props.org}</Card.Title></a>
                <Card.Subtitle className="text-center">{props.phone}</Card.Subtitle>
                <Card.Text>Contact: {props.contact}</Card.Text>
                <Card.Text>Address: {props.address}</Card.Text>
                <Card.Text>Email: {props.email}</Card.Text>
                <Button variant="primary" className="card-editbtn" onClick={props.edit} id={props.id}>Edit</Button>
                <Button variant="secondary" onClick={props.delete} id={props.id}>Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default CustomerCard;