import axios from 'axios'
 import router from '../router'
import { clearAuth, token } from './useAuthStorage'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
})

// Add Authorization header to every request
axiosInstance.interceptors.request.use(config => {
  if (token.value) {
    config.headers.Authorization = `Bearer ${token.value}`
  }
  return config
})

 axiosInstance.interceptors.response.use(
  res => res,
  err => {
    if (err.response && err.response.status === 401) {
      clearAuth()
      router.push('/')
    }
    return Promise.reject(err)
  }
)

export default axiosInstance
