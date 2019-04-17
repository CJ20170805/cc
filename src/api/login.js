import request from '@/utils/request'

export function loginRequest (username, password) {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      un: username,
      pw: password
    }
  })
}


