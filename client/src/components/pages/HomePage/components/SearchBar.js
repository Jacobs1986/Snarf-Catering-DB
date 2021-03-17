import React, { useContext, useEffect, useReducer, useState } from "react";

// Bootstrap
import { Col, Container, Form, Row } from 'react-bootstrap';

// Contexts
import { StoreContext } from '../HomePage';

// API
import { searchOrg, searchAdd } from '../../../services/API.search';

// Search Reducer
const searchReducer = (state, event) => {
    if (event.reset) {
        return {
            searchFor: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function SearchBar() {
    const { setSearchArray, storeId } = useContext(StoreContext)
    const [searchSelect, setSearchSelect] = useState('organization');
    const [searchText, setSearchText] = useReducer(searchReducer, {})

    useEffect(() => {
        if (Object.keys(searchText).length === 0) {
            return
        } else {
            let search = {
                ...searchText,
                storeId: storeId
            }
            switch (searchSelect) {
                case "organization":
                    searchOrg(search).then(results => {
                        setSearchArray(results.data);
                    });
                    break
                case 'address':
                    searchAdd(search).then(results => {
                        setSearchArray(results.data);
                    });
                    break
                default:
            }
        }
    }, [searchText, storeId, setSearchArray, searchSelect])

    // Handle when the select value changes
    const handleSelectChange = event => {
        setSearchSelect(event.target.value)
    }

    // Handle search text input
    const handleSearch = event => {
        setSearchText({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <div>
            <Container id="searchBar">
                <Row>
                    <Col md={6}>
                        <h6>Search for:</h6>
                        <Form>
                            <Form.Row>
                                <Col xs={4}>
                                    <Form.Control as='select' name='searchFor' value={searchSelect} onChange={handleSelectChange}>
                                        <option value="organization">Organization</option>
                                        <option value="address">Address</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Control name="searchFor" value={searchText.searchFor || ''} onChange={handleSearch} />
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};