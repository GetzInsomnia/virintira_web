import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import PromotionSection from '@/components/PromotionSection';

export const metadata: Metadata = {
  alternates: { canonical: 'https://virintira.com/promotion' },
};

export default function PromotionPage() {
  const t = useTranslations();
  return (
    <main className="bg-[#FFFEFE]">
      <PromotionSection
        imagePosition="right"
        imageSrc="/promotion/promotion-1.webp"
        title={t('promo.newClient.title')}
        features={[
          t('promo.newClient.f1'),
          t('promo.newClient.f2'),
          t('promo.newClient.f3'),
        ]}
      />
      <PromotionSection
        imagePosition="left"
        imageSrc="/promotion/promotion-2.webp"
        title={t('promo.accounting.title')}
        features={[
          t('promo.accounting.f1'),
          t('promo.accounting.f2'),
          t('promo.accounting.f3'),
        ]}
      />
    </main>
  );
} 