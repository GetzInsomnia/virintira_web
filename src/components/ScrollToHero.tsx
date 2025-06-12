'use client'

import { useEffect } from 'react'

export default function ScrollToHero({ shouldScroll }: { shouldScroll: boolean }) {
  useEffect(() => {
    if (!shouldScroll) return
    const timeout = setTimeout(() => {
      document.getElementById('herosection')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
    return () => clearTimeout(timeout)
  }, [shouldScroll])

  return null
}
