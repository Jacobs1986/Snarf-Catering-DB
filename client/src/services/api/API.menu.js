import axios from "axios";

// Get all the menu items
export function getAll() {
    return axios.get("/api/menu/get");
}