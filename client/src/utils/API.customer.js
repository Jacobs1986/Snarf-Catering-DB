import axios from "axios";

export default {
    // Get all the customers
    all: function() {
        return axios.get("/api/customer/all");
    },

    // Sort customer list
    sort: function(sortInfo) {
        return axios.post("/api/customer/sort", sortInfo);
    },

    // Search
    search: function(searchInfo) {
        return axios.post("/api/customer/search", searchInfo);
    },

    // Add customer
    add: function(newCustomer) {
        return axios.post("/api/customer/add", newCustomer);
    },

    // edit customer modal
    editModal: function(customerId) {
        return axios.get(`/api/customer/${customerId}`);
    },

    // edit customer information
    edit: function(editCustomer) {
        return axios.put("/api/customer/edit", editCustomer);
    },

    // delete customer
    delete: function(deleteCustomer) {
        return axios.delete(`/api/customer/delete/${deleteCustomer}`);
    }
}