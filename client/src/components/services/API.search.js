import axios from 'axios';

// search for an organization
export function searchOrg(searchInfo) {
    return axios.post('/api/search/organization', searchInfo);
}

// search for an address
export function searchAdd(searchInfo) {
    return axios.post('/api/search/address', searchInfo)
}