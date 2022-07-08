import axios from 'axios';

const api = axios.create({
  baseURL: 'https://judgecode-api.mrootx.xyz/',
});
export default api;
