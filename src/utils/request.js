import axios from 'axios';
import { baseUrl } from '../config/base'
// import store from '../store'

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
    // let token = store.state.token;
    let token = localStorage.getItem('USER_TOKEN');

    let whiteList = ['/api/login', '/api/regist'];

    if(token && whiteList.indexOf(config.url) === -1){
      config.headers['Authorization'] = token;
    }
    // console.log(config,'lalala');
   
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instace.interceptors.response.use(
  res => {
    // console.log(res);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instace;
