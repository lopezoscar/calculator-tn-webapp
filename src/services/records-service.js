import api from './api'

export const getRecords = ({ page = 1, limit = 5, sort = '', search = '' }) => {
  console.log('getRecords', page, limit, sort)
  return api.get('/v1/records', { params: { page, limit, sort, search } })
}

export const deleteRecord = ({ recordId }) => {
  if (!recordId) {
    return null
  }
  console.log('deleteRecord', recordId)
  return api.delete('/v1/records', { data: { recordId } })
}
