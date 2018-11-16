import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  //baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000// request timeout
  /*headers: {
     'Access-Control-Allow-Origin': 'http://t.weather.sojson.com'
  }*/
})

// request interceptor 请求拦截器
/*service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)*/

export default service