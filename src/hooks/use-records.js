import { useEffect, useState } from 'react'
import { getRecords } from 'src/services/records-service'

const useRecords = ({ page, limit, sort, onDeleteRecord }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState({})

  useEffect(() => {
    getRecords({ page: page + 1, limit, sort })
      .then(response => {
        console.log('response', response)
        setData(response?.data)
      })
      .catch(err => {
        setError(err)
      })
  }, [page, limit, sort, onDeleteRecord])

  return { data, error }
}

export default useRecords
