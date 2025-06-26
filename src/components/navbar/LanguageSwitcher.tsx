'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaGlobe } from 'react-icons/fa'
import { Link, usePathname, useRouter } from '../../../i18n/navigation'
import { useSearchParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import { locales, localeInfo } from '../../../i18n'

export default function LanguageSwitcher() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const locale = useLocale()
  const router = useRouter()

  const toggleDropdown = () => setDropdownOpen((prev) => !prev)

  // ปิด dropdown เมื่อคลิกนอกเมนู
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const pathWithoutLocale = pathname.replace(/^\/(th|en)/, '') || '/'
  const query = searchParams.toString()
  const href = `${pathWithoutLocale}${query ? `?${query}` : ''}`


  return (
    <div ref={dropdownRef} className="relative">
      {/* Mobile */}
      <div className="relative lg:hidden text-[#A70909]">
        <button onClick={toggleDropdown} className="text-xl flex items-center">
          <FaGlobe className="text-[#A70909]" />
        </button>
        {dropdownOpen && (
          <div className="absolute -left-4.5 mt-4 bg-white border border-gray-300 rounded shadow-md py-1 text-sm w-14 z-50">
            {locales.map((lang) => (
              <Link
                key={lang}
                href={href}
                locale={lang}
                className={`w-full px-2 py-1 text-center hover:bg-gray-100 block ${
                  locale === lang ? 'bg-[#A70909] text-white' : ''
                }`}
                onClick={() => {
                  setDropdownOpen(false)
                  router.refresh()
                }}
              >
                {lang.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* PC */}
      <div className="hidden lg:flex items-center space-x-2">
        {locales.map((lang) => (
          <Link
            key={lang}
            href={href}
            locale={lang}
            className={`flex items-center space-x-1 hover:opacity-80 transition-opacity ${
              locale === lang ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => router.refresh()}
          >
            <Image
              src={localeInfo[lang as keyof typeof localeInfo]?.flag || `/flags/${lang}.png`}
              alt={localeInfo[lang as keyof typeof localeInfo]?.name || lang.toUpperCase()}
              width={24}
              height={16}
            />
            <span className="text-sm text-black">{lang.toUpperCase()}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
