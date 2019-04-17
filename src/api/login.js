import request from '@/utils/request'

export function loginApi(username, password) {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      un: username,
      pw: password
    }
  })
}


