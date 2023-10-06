import { useState, useEffect } from 'react'

export function useIsMacintosh(): { isMac: boolean} {
  const [isMac, setMac] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent
    const userAgentIsMac = Boolean(userAgent.match(/(Macintosh)/g))
    setMac(userAgentIsMac)
  }, [])

  return { isMac }
}