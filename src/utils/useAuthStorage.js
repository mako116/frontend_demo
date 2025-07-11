import { useStorage } from '@vueuse/core'

export const token = useStorage('auth_token', '')
export const user = useStorage('auth_user', null)

export const isLoggedIn = () => !!token.value
export const clearAuth = () => {
  token.value = ''
  user.value = null
}