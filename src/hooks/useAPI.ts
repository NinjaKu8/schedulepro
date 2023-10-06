import { useEffect, useState } from 'react'
import has from 'lodash/has'

type Response<T> = [
  (T | null), 
  boolean,
  (string | undefined), 
]

export function useAPI<T>(url: string, init?: RequestInit): Response<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(()=>{
    const request = async () => {
      setLoading(true)
      try {
        const response = await fetch(url, init)
        if(response) {
          if(!response.ok) throw new Error(response.statusText)
          const data = await response.json()
          setData(data)
        }
      } catch(e: any) {
        if(has(e,'message')) setError(e.message)
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    let ignore = false
    if(!ignore) request()
    return () => {
      ignore = true;
    }
  },[url, init])

  return [ data, loading, error ]
}