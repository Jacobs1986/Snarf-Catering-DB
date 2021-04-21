import axios from 'axios';

// Add a new order
export function addOrder(orderInfo) {
    return axios.post("/api/order/add", orderInfo);
}

// Edit an order
export function editOrder(orderInfo) {
    return axios.put('/api/order/edit', orderInfo);
}

// delete an organization
export function deleteOrder(orderId) {
    return axios.delete(`/api/order/delete/${orderId}`);
}