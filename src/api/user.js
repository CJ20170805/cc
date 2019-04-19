import request from '../utils/request'

export function userApi () {
  return request({
    url: '/api/users',
    method: 'get'
  })
}