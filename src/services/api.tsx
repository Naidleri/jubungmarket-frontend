import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://juket-id-backend.vercel.app/',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use((config) => {
  if (config.url?.includes('/auth')) {
    return config;
  }

  const token = localStorage.getItem('token') || Cookies.get('token');
  
  if (token) {
    config.headers.Authorization = token; 
  }
  
  return config;
});

export default api;