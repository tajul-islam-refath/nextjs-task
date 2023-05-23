import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1", // API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    // Modify the request config here (add headers, authentication tokens)
    console.log("ok request", session);

    // ** If token is present add it to request's Authorization Header
    if (session.token) {
      if (config.headers) config.headers.token = session.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
