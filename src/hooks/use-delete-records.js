import { useEffect, useState } from 'react'
import { deleteRecord } from 'src/services/records-service'

const useRecords = ({ recordId }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState({})

  useEffect(() => {
    deleteRecord({ recordId })
      .then(response => {
        console.log('response', response)
        setData(response?.data)
      })
      .catch(err => {
        setError(err)
      })
  }, [recordId])

  return { data, error }
}

export default useRecords
