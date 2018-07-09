import axios from 'axios'

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * 请求ajax请求
 * @param url 路径
 * @param data 数据 如果是false则为get请求
 * @param type 返回数据格式
 * @returns {Promise}
 */
export default function api (url, data = false, type = 'bhj') {
  return new Promise((reslove, reject) => {
    let obj = {
      url,
      method: data ? 'post' : 'get',
    }
    data ? obj.data = data : ''
    axios(obj).then(res => {
      res = res.data
      if (type == 'bhj') {
        if (res.result_code == 'success') {
          reslove(res.data)
        } else {
          reject(res.result_msg)
        }
        return
      }
      if (type == 'xxz') {
        if (res.code == 0) {
          reslove(res.data)
        } else {
          reject(res.msg)
        }
      }
      if (type == 'order') {
        if (res.code == 0) {
          reslove(res.data)
        } else {
          reject({
            msg: res.msg,
            data: res.data
          })
        }
      }
      if (type == 'wx') {
        if (res.data && res.data.is_pay) {
          reslove(res.data.is_pay)
        } else {
          reslove(false)
        }
      }
    }).catch(e => {
      reject(e)
    })
  })
}






