import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutions_types'
import { loginApi } from '../api/login';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    [types.SET_LOGIN_TOKEN]: (state, token) => {
      state.token = token
    }
  },
  actions: {
    async login({commit}, userInfo) {

      let un = userInfo.un;
      let pw = userInfo.pw;

     return new Promise((resolve,reject)=>{

      loginApi(un,pw).then(res => {
          commit(types.SET_LOGIN_TOKEN, res.data.token);
          localStorage.setItem('USER_TOKEN', res.data.token);
          resolve(res.data);
        }).catch(err => {
          reject(err);
        })

     })
    }
  }
})
