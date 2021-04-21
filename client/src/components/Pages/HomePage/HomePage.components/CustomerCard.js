import React, { createContext, useEffect, useContext, useState} from "react";

// Import Context
import { StoreContext } from '../HomePage';

// Bootstrap
import { Button, Card, Col, Row } from 'react-bootstrap';

// Modals
import ViewCustomerModal from './ModalViewCustomer';
import EditOrgModal from './ModalEditOrg';

// API routes
import { deleteOrganization } from "../../../../services/api/API.organizations";

// Create context
export const CustomerInfoContext = createContext();

export default function CustomerCard() {
    const { storeInfo, searchArray, setUpdateInfo } = useContext(StoreContext);
    const [ organization, setOrganization ] = useState([]);
    const [ organizationId, setOrganizationId ] = useState();
    const [ editOrg, setEditOrg ] = useState();

    // Get the customer
    useEffect(() => {
        if (searchArray.length === 0) {
            setOrganization(storeInfo.Organizations);
        } else {
            setOrganization(searchArray);
        }
    }, [storeInfo, searchArray])

    // handle showing the customer modal
    const handleShowCustomerModal = (event) => {
        setOrganizationId(event.target.id);
        // setShowCustomerModal(true);
    }

    // handle set the information to be editied
    const handleEditOrg = event => {
        setEditOrg(organization[event.target.id]);
    }

    // Delete an organization
    const handleDeleteOrg = event => {
        deleteOrganization(event.target.id).then(() => {
            setUpdateInfo(true);
        })
    }

    return (
        <div className="overflow-auto" style={{ height: '563px' }}>
            {!organization ?
                <Row>
                    <div>Loading</div>
                </Row> :
                <Row>
                    {organization.map((customer, index) =>
                        <Col md="auto" key={customer.id}>
                            <Card className="customer-card">
                                <Card.Body>
                                    <a href={`/orders?organization_id=${customer.id}`}><Card.Title>{customer.name}</Card.Title></a>
                                    <Card.Title>Address: {customer.address}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" id={customer.id} onClick={handleShowCustomerModal}>View</Button>
                                    <Button variant="primary" id={index} onClick={handleEditOrg} >Edit</Button>
                                    <Button variant="danger" id={customer.id} onClick={handleDeleteOrg}>Delete</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Row>
            }
            {/* Modals */}
            <CustomerInfoContext.Provider value={{ editOrg, setEditOrg, organizationId, setOrganizationId }}>
                <ViewCustomerModal />
                {!editOrg ? <></> : <EditOrgModal />}
            </CustomerInfoContext.Provider>
        </div>
    );
};