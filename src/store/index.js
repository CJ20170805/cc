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
    login({commit}, userInfo) {

      let un = userInfo.username;
      let pw = userInfo.password;

      loginApi(un,pw).then(res => {
        if(res.data.code == 200){
          commit(types.SET_LOGIN_TOKEN, res.data.token);
          localStorage.setItem('USER_TOKEN', res.data.token);
        } else {
          console.log('LoginError:', res.data);
        }
      })
    }
  }
})
