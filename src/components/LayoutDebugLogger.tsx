'use client';

import { useMessages } from 'next-intl';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';

export default function LayoutDebugLogger() {
  const messages = useMessages();
  const locale = useLocale();

  useEffect(() => {
    console.log('🏗️ Layout Debug:', {
      currentLocale: locale,
      messagesKeys: Object.keys(messages),
      messagesCount: Object.keys(messages).length,
      hasHeroMessages: 'hero' in messages,
      heroKeys: 'hero' in messages ? Object.keys(messages.hero) : [],
      timestamp: new Date().toISOString()
    });
  }, [locale, messages]);

  return null;
} 