'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useLocale } from 'next-intl'

interface CustomLinkProps extends React.ComponentProps<typeof Link> {
  query?: Record<string, string>
  section?: string
  item?: string
  onClick?: () => void
}

export default function CustomLink({
  href,
  query,
  section,
  item,
  onClick,
  children,
  ...rest
}: CustomLinkProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onClick) onClick()

    const path = typeof href === 'string' ? href : href.pathname || '/'

    const localePath = path.startsWith('/') ? `/${locale}${path}` : `/${locale}/${path}`

    if (path === '/under-construction') {
      const finalQuery = {
        ...(query || {}),
        ...(section && { section }),
        ...(item && { item }),
      }

      const qs =
        Object.keys(finalQuery).length > 0
          ? '?' + new URLSearchParams(finalQuery).toString()
          : ''

      window.dispatchEvent(new CustomEvent('custom:navigate'))

      startTransition(() => {
        router.push(localePath + qs)
      })
    } else {
      const finalQuery = {
        ...(query || {}),
        ...(section && { section }),
        ...(item && { item }),
      }

      const qs =
        Object.keys(finalQuery).length > 0
          ? '?' + new URLSearchParams(finalQuery).toString()
          : ''

      window.dispatchEvent(new CustomEvent('custom:navigate'))

      startTransition(() => {
        router.push(localePath + qs)
      })
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-disabled={isPending}
      {...rest}
    >
      {children}
    </Link>
  )
}
