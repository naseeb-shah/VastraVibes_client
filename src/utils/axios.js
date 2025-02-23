// src/utils/axiosConfig.js
import axios from "axios";

// Set the base URL
axios.defaults.baseURL = "https://vastra-server-drab.vercel.app/"

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // Add authorization token to every request
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response.status === 401) {
      // Redirect to login if unauthorized
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;