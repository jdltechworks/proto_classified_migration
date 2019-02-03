import axios from 'axios';
import Cookies from 'js-cookie';

const authToken = Cookies.get('user_token');

const api = axios.create({
  baseURL: process.env.MIX_API_URL,
  headers: authToken && ({ Authorization: `Bearer ${authToken}` }),
});

export default api;
