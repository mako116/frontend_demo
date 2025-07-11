import axiosInstance from './AxiosInstance'
import { token, user } from './useAuthStorage'

export const login = async (email, password) => {
  const res = await axiosInstance.post('/auth/login', { email, password })
  token.value = res.data.token
  user.value = res.data.user
  return res.data
}

export const logout = async () => {
  token.value = ''
  user.value = null
}

export const getCurrentUser = () => user.value
