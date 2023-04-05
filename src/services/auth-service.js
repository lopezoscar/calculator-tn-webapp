import api from './api'
import jwtDecode from 'jwt-decode'

export const login = async ({ username, password }) => {
  try {
    const response = await api.post('/v1/auth', { username, password })
    if (response?.data) {
      const decodedToken = jwtDecode(response.data)
      return {
        userId: decodedToken.userId,
        username: decodedToken.username,
        accessToken: response.data
      }
    }
  } catch (error) {
    console.log('login error', error)
  }
  return null
}

export const logout = () => {
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('user')
}

export const register = async ({ username, password }) => {
  try {
    const response = await api.post('/v1/register', { username, password })
    if (response?.data) {
      const decodedToken = jwtDecode(response.data.accessToken)
      return {
        userId: decodedToken.userId,
        username: decodedToken.username,
        accessToken: response.data.accessToken
      }
    }
  } catch (error) {
    console.log('login error', error)
  }
  return null
}
