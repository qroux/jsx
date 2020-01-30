import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 59cdfd72c3e30e1c7a36a4d7bbbfeb29e2374518d9356ad25758e5ef41fbee5d'
  }
});
