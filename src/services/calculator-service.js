import api from './api'

export const calculateBasic = ({ operationType, firstParam, secondParam }) => {
  return api.post('/v1/calculate/basic', { operationType, firstParam, secondParam })
}

export const calculateRandom = ({ length = 1 }) => {
  return api.post('/v1/calculate/random', { length })
}
