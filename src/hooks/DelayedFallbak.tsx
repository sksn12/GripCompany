import { useState, useEffect } from 'react'

const DelayedFallback = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <div>{show && <h3>Loading ...</h3>}</div>
}
export default DelayedFallback
