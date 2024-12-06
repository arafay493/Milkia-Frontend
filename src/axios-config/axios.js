/***** Note: Axios Configuration File *****/
import axios from "axios";

const urls = {
    hostedUrl: "http://103.125.240.77:3000/api"
};


// Default config options
const defaultOptions = {
    baseURL: urls.hostedUrl,
    headers: {
        "Content-Type": "application/json",
        "DeviceId": typeof window !== 'undefined' ? window.navigator.userAgent : "server",
    }
};

// Create axios instance
const instance = axios.create(defaultOptions);

// Function to refresh token
const refreshToken = async () => {
    const fetchToken = localStorage.getItem("AuthToken");
    const refreshToken = localStorage.getItem("RefreshToken");

    let data = {
        refreshToken: refreshToken
    }
    const response = await instance.post(`/user/refreshToken`, data);
    const newToken = response.data?.data?.jwToken;
    localStorage.setItem("AuthToken", newToken);
    return newToken;
};


// Set the AUTH token for any request
instance.interceptors.request.use((config) => {
    const fetchToken = localStorage.getItem("AuthToken");
    config.headers.Authorization = fetchToken ? `Token ${fetchToken}` : "";
    return config;
});

// Intercept the response to handle token expiration
instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.error("Request error:", error);
        const originalRequest = error.config;

        // Handle 403 Unauthorized response
        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            localStorage.removeItem("AuthToken");
            localStorage.removeItem("RefreshToken");
            localStorage.clear();

            // Clear cookies
            document.cookie.split(";").forEach((c) => {
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            });
            router.push("/").then(() => {
                window.location.reload();
            });

            // Optionally, redirect to login page or any other action
            return Promise.reject(error);
        } else if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newToken = await refreshToken();
            originalRequest.headers.Authorization = `Token ${newToken}`;
            return instance(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default instance;
