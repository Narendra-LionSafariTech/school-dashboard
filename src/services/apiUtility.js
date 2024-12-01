import axios from "axios";
import { logout } from "../redux/slices/authSlice";
import { baseUrl } from "../utils/baseUrl";
import store from "../redux/store/store";


const api = axios.create({
    baseURL: baseUrl,
});

// Add a request interceptor to include the token in the headers
api.interceptors.request.use( 
    (config) => {
        const { token } = store.getState().auth;
        console.log(token);

        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        throw error;
    }
);

// Add a response interceptor to handle unauthorized requests
api.interceptors.response.use(
    (response) => {
        console.log("request success", response)
        return response;
    },
    (error) => {
        console.log("request error", error)

        if (error.response && error.response.status === 401) {
            // Unauthorized: clear the token and log the user out
            store.dispatch(logout());
        }
        throw error;
    }
);

export default api;
