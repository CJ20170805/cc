import Vue from 'vue'
import Vuex from 'vuex'
import { loginRequest } from '@/api/login'
import * as types from './mutions_types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginData: ''
  },
  mutations: {
    [types.SET_LOGIN_DATA]: (state, data) => {
      state.loginData = data
    }
  },
  actions: {
    getLoginData({commit},userInfo) {
      let un = userInfo.username;
      let pw = userInfo.password;
      loginRequest(un,pw).then(res => {
        commit(types.SET_LOGIN_DATA, res.data)
      })
    }
  }
})
