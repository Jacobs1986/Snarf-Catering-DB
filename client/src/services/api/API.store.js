import axios from "axios";

export function getAll() {
    return axios.get("/api/store/all");
}

export function getStoreInfo(storeId) {
    return axios.get(`/api/store/${storeId}`);
}