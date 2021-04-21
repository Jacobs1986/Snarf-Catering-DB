import axios from 'axios';

// add a contact
export function addContact(contactInfo) {
    return axios.post('/api/contact/add', contactInfo);
}

// edit a contact
export function editContact(contactInfo) {
    return axios.put('/api/contact/edit', contactInfo)
}

// delete a contact
export function deleteContact(contactId) {
    return axios.delete(`/api/contact/delete/${contactId}`)
}