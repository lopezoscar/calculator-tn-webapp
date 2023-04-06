import { useEffect, useState } from 'react'
import { getRecords } from 'src/services/records-service'

const BAD_REQUEST_HTTP_STATUS = 400
const UNAUTHORIZED_HTTP_STATUS = 401

const useRecords = ({ page, limit, sort, onDeleteRecord }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getRecords({ page: page + 1, limit, sort })
      .then(response => {
        console.log('response', response)
        setData(response?.data)
        setLoading(false)
      })
      .catch(err => {
        console.log('err', err)
        setLoading(false)
        if (err.response.status === BAD_REQUEST_HTTP_STATUS) {
          setError({ message: 'Please check your input' })
          return
        }
        if (err.response.status === UNAUTHORIZED_HTTP_STATUS) {
          setError({ message: 'Session expired' })
          return
        }
        setError({ message: 'Oops! There was an error getting records. Please try again or check logs' })
        setLoading(false)
      })
  }, [page, limit, sort, onDeleteRecord])

  return { data, loading, error }
}

export default useRecords
