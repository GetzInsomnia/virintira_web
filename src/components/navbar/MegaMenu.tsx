'use client'

import CustomLink from '@/components/CustomLink'
import { useTranslations } from 'next-intl'

export default function MegaMenu() {
  const t = useTranslations()

  const sections = [
    {
      title: t('megaMenu.registration.title'),
      items: [
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
      title: t('megaMenu.corporateChanges.title'),
      items: [
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
      title: t('megaMenu.accountingAudit.title'),
      items: [
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
      title: t('megaMenu.license.title'),
      items: [
        { label: t('megaMenu.license.items.tourism'), href: '/under-construction' },
        { label: t('megaMenu.license.items.fda'), href: '/under-construction' },
        { label: t('megaMenu.license.items.visaWorkPermit'), href: '/under-construction' },
      ],
    },
    {
      title: t('megaMenu.onlineMarketing.title'),
      items: [
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
]

  return (
    <>
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold text-[#A70909] mb-2">{section.title}</h4>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.label}>
                <CustomLink
                  href="/under-construction"
                  section={section.title}
                  item={item.label}
                  className="text-gray-700 hover:text-[#A70909] transition"
                >
                  {item.label}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
