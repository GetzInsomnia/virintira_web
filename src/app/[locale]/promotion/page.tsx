import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import PromotionSection from '@/components/PromotionSection';

export const metadata: Metadata = {
  alternates: { canonical: 'https://virintira.com/promotion' },
};

export default function PromotionPage() {
  const t = useTranslations('promotion');
  return (
    <main className="bg-[#FFFEFE]">
      <PromotionSection
        imagePosition="right"
        imageSrc="/promotion/promotion-1.webp"
        title={t('promotions.newClient.title')}
        features={[
          t('promotions.newClient.feature1'),
          t('promotions.newClient.feature2'),
          t('promotions.newClient.feature3'),
        ]}
      />
      <PromotionSection
        imagePosition="left"
        imageSrc="/promotion/promotion-2.webp"
        title={t('promotions.package.title')}
        features={[
          t('promotions.package.feature1'),
          t('promotions.package.feature2'),
          t('promotions.package.feature3'),
        ]}
      />
    </main>
  );
} 