import axios from 'axios';
import { baseUrl } from '../config/base'

const instace = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers:{
    // 'Content-Type':'application/x-www-form-urlencoded'
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

instace.interceptors.request.use(
  config => {
    console.log(config);
   
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instace.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instace;
