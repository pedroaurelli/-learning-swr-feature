import axios from 'axios'
import { useEffect, useState } from 'react'
import { Repository } from '../../pages'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    api.get(url)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [url])

  return { data, isFetching, error }
}
