import axios from 'axios';
import { baseUrl } from '../config/base'

const instace = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers:{
    'Content-Type':'application/x-www-form-urlencoded'
  },
  withCredentials: true
});

instace.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instace.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instace;
