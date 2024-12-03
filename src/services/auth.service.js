import api from "./apiUtility";
import { baseUrl } from "../utils/baseUrl";

export const authenticate = async (payload) => {
    try {
        const response = await api.post(`/api/users/authenticate`, payload);
        return response.data;
    } catch (error) {
        console.error("Error authenticating user:", error);
        throw error;
    }
};
