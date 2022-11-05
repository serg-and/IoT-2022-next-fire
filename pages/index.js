import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    location.href = '/portfolio'
  }, [])

  return (
    null
  )
}
