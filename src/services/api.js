import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI5OTk3NDlmNTdlZTlhYTE1ZDZmZTkiLCJ1c2VybmFtZSI6ImxvcGV6b3NjYXIiLCJzdWIiOiI2NDI5OTk3NDlmNTdlZTlhYTE1ZDZmZTkiLCJpYXQiOjE2ODA2OTkzMzksImV4cCI6MTY4MDcwMjkzOX0.FriYHMgX5il6H-mXeNfZDNsbppZqezKnpuCfEF9xXtg'

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4000',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export default api
