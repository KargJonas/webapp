import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

export const setToken = (token) => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('auth', JSON.stringify(jwtDecode(token)))
  Cookie.set('jwt', token)
}

export const unsetToken = () => {
  if (process.SERVER_BUILD) return
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('auth')
  Cookie.remove('jwt')
}

export const getUserFromLocalStorage = () => {
  const token = window.localStorage.token
  return token ? token : undefined
}
