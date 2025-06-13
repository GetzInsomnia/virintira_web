'use client'

import { useLayoutEffect } from 'react'

export default function ScrollRestoration() {
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}
