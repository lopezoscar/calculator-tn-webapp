import api from './api'
import jwtDecode from 'jwt-decode'

export const login = async ({ username, password }) => {
  const response = await api.post('/v1/auth', { username, password })
  if (response?.data) {
    try {
      const decodedToken = jwtDecode(response.data)
      return {
        userId: decodedToken.userId,
        username: decodedToken.username,
        accessToken: response.data
      }
    } catch (error) {
      console.log('login error', error)
    }
  }
  return null
}

export const logout = () => {
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('user')
}
