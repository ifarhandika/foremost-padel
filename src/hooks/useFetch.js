import { useState, useEffect } from "react"

export function useFetch(fetchFn, dependencies = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetchFn()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, dependencies)

  return { data, loading, error }
}
