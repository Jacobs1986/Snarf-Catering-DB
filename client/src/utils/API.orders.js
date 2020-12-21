import axios from "axios";

export default {
    // Get all customer info
    info: function(customerId) {
        return axios.get(`/api/customer/${customerId}`);
    },

    // add a new order
    add: function(newOrder) {
        return axios.post("/api/order/add", newOrder);
    },

    // edit an order
    edit: function(editOrder) {
        return axios.put("/api/order/edit", editOrder);
    },

    // delete customer
    delete: function(deleteOrder) {
        return axios.delete(`/api/order/delete/${deleteOrder}`);
    }
}