import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://juket-id-backend.vercel.app/', 
  timeout: 15000, 
  headers: { 'Content-Type': 'application/json' } 
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token") || localStorage.getItem("token")

    if (token && ["post","put","delete"].includes(config.method || "")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default api;
