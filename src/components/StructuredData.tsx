import React from 'react'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  url: "https://virintira.com/",
  name: "Virintira Accounting Office",
}

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
