'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaGlobe } from 'react-icons/fa'
// Use the navigation helpers from next-intl
// https://next-intl.js.org/docs/routing/navigation
import {useRouter, usePathname, useLocale} from 'next-intl/navigation'

export default function LanguageSwitcher() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleDropdown = () => setDropdownOpen((prev) => !prev)

  const selectLang = (lang: 'th' | 'en') => {
    router.push(pathname, { locale: lang })
    setDropdownOpen(false)
  }

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

  return (
    <div ref={dropdownRef} className="relative">
      {/* Mobile */}
      <div className="relative lg:hidden text-[#A70909]">
        <button onClick={toggleDropdown} className="text-xl flex items-center">
          <FaGlobe className="text-[#A70909]" />
        </button>
        {dropdownOpen && (
          <div className="absolute -left-4.5 mt-4 bg-white border border-gray-300 rounded shadow-md py-1 text-sm w-14 z-50">
            <button
              onClick={() => selectLang('th')}
              className={`w-full px-2 py-1 text-center hover:bg-gray-100 ${locale === 'th' ? 'bg-[#A70909] text-white' : ''}`}
            >
              TH
            </button>
            <button
              onClick={() => selectLang('en')}
              className={`w-full px-2 py-1 text-center hover:bg-gray-100 ${locale === 'en' ? 'bg-[#A70909] text-white' : ''}`}
            >
              EN
            </button>
          </div>
        )}
      </div>

      {/* PC */}
      <div className="hidden lg:flex items-center space-x-2">
        <button onClick={() => selectLang('th')} className={`flex items-center space-x-1 hover:opacity-80 ${locale === 'th' ? 'opacity-100' : 'opacity-50'}`}>
          <Image src="/flags/th.png" alt="Thai" width={24} height={16} />
          <span className="text-sm text-black">TH</span>
        </button>
        <span className="text-gray-400">|</span>
        <button onClick={() => selectLang('en')} className={`flex items-center space-x-1 hover:opacity-80 ${locale === 'en' ? 'opacity-100' : 'opacity-50'}`}>
          <Image src="/flags/en.png" alt="English" width={24} height={16} />
          <span className="text-sm text-black">EN</span>
        </button>
      </div>
    </div>
  )
}
