'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ScrollToHero() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const shouldScroll = searchParams.get('scrollToHero') === 'true'
    if (shouldScroll) {
      const timeout = setTimeout(() => {
        const target = document.getElementById('herosection')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })

          const url = new URL(window.location.href)
          url.searchParams.delete('scrollToHero')
          window.history.replaceState({}, '', url.toString())
        }
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [searchParams])

  return null
}
