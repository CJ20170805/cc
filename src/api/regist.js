import request from '../utils/request'

export function registApi (registInfo) {
  let un = registInfo.un;
  let pw = registInfo.pw;
  return request({
    url: '/api/regist',
    method: 'post',
    data: {
      un: un,
      pw: pw
    }
  })
}