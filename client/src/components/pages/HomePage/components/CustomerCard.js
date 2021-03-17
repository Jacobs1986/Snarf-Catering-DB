import React, { createContext, useContext, useEffect, useState } from "react";

// Import context
import { StoreContext, ArrayContext } from '../HomePage';

// Bootstrap
import { Button, Card, Col, Row } from 'react-bootstrap';

// Modals
import ViewCustomerModal from './ViewCustomerModal'
import EditOrgModal from './EditOrgModal';

// API
import { deleteOrganization } from '../../../services/API.organizations';

// Contexts
export const CustomerContext = createContext();
export const EditOrgContext = createContext();

export default function CustomerCard() {
    const { storeArray, searchArray } = useContext(StoreContext)
    const { updateArray, setUpdateArray } = useContext(ArrayContext);
    const [organizations, setOrganizations] = useState([]);
    const [customerId, setCustomerId] = useState();
    const [editInfo, setEditInfo] = useState();
    const [showEdit, setShowEdit] = useState(false);

    // Get the customer
    useEffect(() => {
        if (searchArray.length === 0) {
            setOrganizations(storeArray.Organizations);
        } else {
            setOrganizations(searchArray);
        }
    }, [storeArray, searchArray])

    // Set updateArray to false
    useEffect(() => {
        if (updateArray) {
            setUpdateArray(false)
        }
    })

    // view customer modal
    const handleViewModal = (event) => {
        event.preventDefault()
        setCustomerId(event.target.id);
    }

    // view edit org modal
    const handleEditModal = event => {
        event.preventDefault()
        setEditInfo(organizations[event.target.id])
        setShowEdit(true);
    }

    // delete an organization
    const handleOrgDelete = event => {
        event.preventDefault();
        deleteOrganization(event.target.id).then(() => {
            setUpdateArray(true);
        })
    }

    return (
        <div className="overflow-auto" style={{ height: '500px' }}>
            {!organizations ?
                <Row>
                    <div>Loading</div>
                </Row> :
                <Row>
                    {organizations.map((customer, index) =>
                        <Col md="auto" key={customer.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title><Button variant="link" className="card-btn" style={{ fontWeight: '600' }}>{customer.name}</Button></Card.Title>
                                    <Card.Title>Address: {customer.address}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" onClick={handleViewModal} id={customer.id}>View</Button>
                                    <Button variant="primary" onClick={handleEditModal} id={index}>Edit</Button>
                                    <Button variant="danger" onClick={handleOrgDelete} id={customer.id}>Delete</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Row>
            }
            <CustomerContext.Provider value={{ customerId, setCustomerId }}>
                <ViewCustomerModal />
            </CustomerContext.Provider>
            <EditOrgContext.Provider value={{ editInfo, setEditInfo, setShowEdit, showEdit }}>
                {!editInfo ? <div></div> :
                    <EditOrgModal />
                }
            </EditOrgContext.Provider>
        </div>
    );
};