'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import MobileMenuView from './MobileMenuView'

interface MenuItem {
  label: string
  href?: string
  subItems?: MenuItem[]
}


export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const t = useTranslations()

  const mainMenu = useMemo<MenuItem[]>(
    () => [
      {
        label: t('mobileMenu.promotion'),
        href: '/promotion',
      },
      {
        label: t('mobileMenu.services'),
        href: '/under-construction',
      subItems: [
        {
          label: t('megaMenu.registration.title'),
          href: '/under-construction',
          subItems: [
            { label: t('megaMenu.registration.items.limitedCompany'), href: '/under-construction' },
            { label: t('megaMenu.registration.items.limitedPartnership'), href: '/under-construction' },
            { label: t('megaMenu.registration.items.foundation'), href: '/under-construction' },
            { label: t('megaMenu.registration.items.association'), href: '/under-construction' },
            { label: t('megaMenu.registration.items.commercialRegistration'), href: '/under-construction' },
            { label: t('megaMenu.registration.items.employerRegistration'), href: '/under-construction' },
            { label: t('megaMenu.registration.items.vat'), href: '/under-construction' },
          ],
        },
        {
          label: t('megaMenu.corporateChanges.title'),
          href: '/under-construction',
          subItems: [
            { label: t('megaMenu.corporateChanges.items.name'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.seal'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.directorInfo'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.signAuthority'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.shareholders'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.shareRatio'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.capitalChange'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.relocation'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.objective'), href: '/under-construction' },
            { label: t('megaMenu.corporateChanges.items.dissolution'), href: '/under-construction' },
          ],
        },
        {
          label: t('megaMenu.accountingAudit.title'),
          href: '/under-construction',
          subItems: [
            { label: t('megaMenu.accountingAudit.items.corporateAccounting'), href: '/under-construction' },
            { label: t('megaMenu.accountingAudit.items.monthlyTax'), href: '/under-construction' },
            { label: t('megaMenu.accountingAudit.items.annualFinancial'), href: '/under-construction' },
            { label: t('megaMenu.accountingAudit.items.personalAccounting'), href: '/under-construction' },
            { label: t('megaMenu.accountingAudit.items.audit'), href: '/under-construction' },
            { label: t('megaMenu.accountingAudit.items.taxPlanning'), href: '/under-construction' },
            { label: t('megaMenu.accountingAudit.items.foreignerTaxId'), href: '/under-construction' },
          ],
        },
        {
          label: t('megaMenu.license.title'),
          href: '/under-construction',
          subItems: [
            { label: t('megaMenu.license.items.tourism'), href: '/under-construction' },
            { label: t('megaMenu.license.items.fda'), href: '/under-construction' },
            { label: t('megaMenu.license.items.visaWorkPermit'), href: '/under-construction' },
          ],
        },
        {
          label: t('megaMenu.onlineMarketing.title'),
          href: '/under-construction',
          subItems: [
            { label: t('megaMenu.onlineMarketing.items.website'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.facebookPage'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.lineOA'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.tiktok'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.youtube'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.videoProduction'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.ads'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.aiSystems'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.odooERP'), href: '/under-construction' },
            { label: t('megaMenu.onlineMarketing.items.softwareDevelopment'), href: '/under-construction' },
          ],
        },
      ],
    },
    {
      label: t('mobileMenu.download'),
      href: '/under-construction',
    },
    {
      label: t('mobileMenu.contact'),
      href: '/under-construction',
    },
  ],
    [t]
  )

  const [stack, setStack] = useState<{ title: string; items: MenuItem[] }[]>([
    { title: 'ViRINTIRA', items: mainMenu },
  ])

  const menuRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  const handleBack = () => {
    setStack((prev) => prev.slice(0, -1))
  }

  const handleSelectSubMenu = (items: MenuItem[], title: string) => {
    setStack((prev) => [...prev, { title, items }])
  }

  useEffect(() => {
    if (!isOpen) {
      setStack([{ title: 'ViRINTIRA', items: mainMenu }])
    }
  }, [isOpen, mainMenu])

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="relative w-full h-full overflow-hidden">
        {stack.map((view, index) => (
          <MobileMenuView
            key={`${index}-${view.title}`}
            title={view.title}
            items={view.items}
            index={index}
            current={stack.length - 1}
            onBack={index > 0 ? handleBack : undefined}
            onSelectSubMenu={handleSelectSubMenu}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  )
}
