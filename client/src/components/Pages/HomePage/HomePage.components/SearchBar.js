import React, { useContext, useEffect, useReducer, useState } from "react";

// Bootstrap
import { Col, Container, Form, Row } from 'react-bootstrap';

// Contexts
import { StoreContext } from '../HomePage';

// Functions
import { reducer as searchReducer } from '../../../../services/functions/reducers';

// API 
import { searchOrg, searchAdd } from '../../../../services/api/API.search';

export default function SearchBar() {
    const { storeId, setSearchArray, setUpdateInfo } = useContext(StoreContext);
    const [ selectValue, setSelectValue ] = useState('organization');
    const [ searchText, setSearchText ] = useReducer(searchReducer, {});

    useEffect(() => {
        if (Object.keys(searchText).length === 0) {
            return
        } else {
            let search = {
                ...searchText,
                storeId: storeId
            }
            switch (selectValue) {
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
    }, [searchText, selectValue, setSearchArray, storeId, setUpdateInfo])

    // Change the select value
    const handleSelectChange = event => {
        setSelectValue(event.target.value);
    }

    // Handle search text input
    const handleSearchText = event => {
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
                                    <Form.Control as='select' name='searchFor' value={selectValue} onChange={handleSelectChange}>
                                        <option value="organization">Organization</option>
                                        <option value="address">Address</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Control name="searchFor" value={searchText.searchFor || ''} onChange={handleSearchText} />
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