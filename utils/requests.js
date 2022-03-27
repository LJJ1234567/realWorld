import axios from "axios";

const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 请求拦截器
request.interceptors.request.use(config => {
  
  return config
},error => {
  // 请求还没有发出去
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  return response
},error => {
  return Promise.reject(error)
})

export default request