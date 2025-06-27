'use client'

import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

interface TranslationKey {
  key: string
  value: string
  status: 'found' | 'missing' | 'empty'
}

export default function TranslationDebugger() {
  const t = useTranslations()
  const locale = useLocale()
  const [translationKeys, setTranslationKeys] = useState<TranslationKey[]>([])
  const [isVisible, setIsVisible] = useState(false)

  // Define all required translation keys
  const requiredKeys = [
    'hero.title',
    'hero.subtitle',
    'hero.description',
    'hero.cta',
    'services.title',
    'services.subtitle',
    'popularServices.title',
    'about.title',
    'about.subtitle',
    'about.description',
    'whyChooseUs.title',
    'whyChooseUs.subtitle',
    'howItWorks.title',
    'howItWorks.subtitle',
    'nav.promotion',
    'nav.services',
    'nav.download',
    'nav.contact',
    'buttons.learnMore',
    'buttons.contactUs',
    'meta.title',
    'meta.description'
  ]

  useEffect(() => {
    const checkTranslations = () => {
      const keys: TranslationKey[] = requiredKeys.map(key => {
        try {
          const value = t(key)
          return {
            key,
            value,
            status: value ? 'found' : 'empty'
          }
        } catch (error) {
          return {
            key,
            value: 'NOT_FOUND',
            status: 'missing'
          }
        }
      })

      setTranslationKeys(keys)
    }

    checkTranslations()
  }, [t, locale])

  const missingKeys = translationKeys.filter(k => k.status === 'missing')
  const emptyKeys = translationKeys.filter(k => k.status === 'empty')
  const foundKeys = translationKeys.filter(k => k.status === 'found')

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg text-sm z-50 hover:bg-red-600"
      >
        🔍 Debug Translations
      </button>
    )
  }

  return (
    <div className="fixed inset-4 bg-black bg-opacity-75 text-white p-6 overflow-auto z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Translation Debugger</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-600 p-4 rounded">
            <h3 className="font-bold">✅ Found ({foundKeys.length})</h3>
            <p className="text-sm">Translation keys that are working correctly</p>
          </div>
          <div className="bg-yellow-600 p-4 rounded">
            <h3 className="font-bold">⚠️ Empty ({emptyKeys.length})</h3>
            <p className="text-sm">Translation keys that exist but are empty</p>
          </div>
          <div className="bg-red-600 p-4 rounded">
            <h3 className="font-bold">❌ Missing ({missingKeys.length})</h3>
            <p className="text-sm">Translation keys that don't exist</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Current Locale: {locale}</h3>
          <p className="text-sm text-gray-300">Timestamp: {new Date().toISOString()}</p>
        </div>

        {missingKeys.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-red-400 mb-2">❌ Missing Keys:</h3>
            <div className="bg-red-900 p-4 rounded">
              {missingKeys.map(key => (
                <div key={key.key} className="text-sm font-mono">
                  {key.key}
                </div>
              ))}
            </div>
          </div>
        )}

        {emptyKeys.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">⚠️ Empty Keys:</h3>
            <div className="bg-yellow-900 p-4 rounded">
              {emptyKeys.map(key => (
                <div key={key.key} className="text-sm font-mono">
                  {key.key}: "{key.value}"
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-lg font-bold text-green-400 mb-2">✅ Working Keys:</h3>
          <div className="bg-green-900 p-4 rounded max-h-64 overflow-auto">
            {foundKeys.map(key => (
              <div key={key.key} className="text-sm mb-2">
                <div className="font-mono text-green-300">{key.key}</div>
                <div className="text-gray-300 ml-4">"{key.value}"</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 