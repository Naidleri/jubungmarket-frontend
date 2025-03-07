import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://juket-id-backend.vercel.app/', 
  timeout: 15000, 
  headers: { 'Content-Type': 'application/json' } 
});

export default api;
