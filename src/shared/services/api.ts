import axios from 'axios';

const api = axios.create({
  baseURL: 'https://judgecode-api.mrootx.xyz/',
  headers: {
    Authorization:
      'Bearer YzEwYjEyMjEtMDE1Ni00M2VlLThjMTQtZjkyNDVjY2FmZmVk.rNcE2mm0ml3sKZvgEvUos-32QnzPnap7yVeABPAtxmj38XHgPzAUNUkpYASD',
  },
});
export default api;
