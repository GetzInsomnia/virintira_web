import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://virintira.com/promotion' },
};

function PromotionPageContent() {
  const t = useTranslations('promotion');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#A70909] mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          {t('subtitle')}
        </p>
        <p className="text-gray-500">
          {t('description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* New Client Promotion */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#A70909]">
          <h3 className="text-2xl font-bold text-[#A70909] mb-3">
            {t('promotions.newClient.title')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('promotions.newClient.description')}
          </p>
          <p className="text-sm text-gray-500">
            {t('promotions.newClient.validUntil')}
          </p>
        </div>

        {/* Package Promotion */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#A70909]">
          <h3 className="text-2xl font-bold text-[#A70909] mb-3">
            {t('promotions.package.title')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('promotions.package.description')}
          </p>
          <p className="text-sm text-gray-500">
            {t('promotions.package.validUntil')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function PromotionPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  await params; // รอ params เพื่อให้ Next.js 15 ทำงานได้
  return <PromotionPageContent />;
} 