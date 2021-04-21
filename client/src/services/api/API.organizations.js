import axios from 'axios';

// Add an organization to the list
export function addOrganization(orgInfo) {
    return axios.post('/api/organization/add', orgInfo);
}

// Get an organizations information by the id
export function getOrganization(orgId) {
    return axios.get(`/api/organization/${orgId}`);
}

// edit the organization
export function editOrganization(orgInfo) {
    return axios.put('/api/organization/edit', orgInfo);
}

// delete an organization
export function deleteOrganization(orgId) {
    return axios.delete(`/api/organization/delete/${orgId}`);
}