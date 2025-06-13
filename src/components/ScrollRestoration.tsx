'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollRestoration() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    const main = document.getElementById('main')
    if (main) {
      main.scrollTo(0, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
