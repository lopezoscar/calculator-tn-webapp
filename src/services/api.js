import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4000',
  withCredentials: true
})

api.interceptors.request.use(function (config) {
  const token = window.localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default api
