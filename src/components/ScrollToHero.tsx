'use client'

import { useEffect } from 'react'

export default function ScrollToHero() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const shouldScroll = params.get('scrollToHero') === 'true'
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
  }, [])

  return null
}
