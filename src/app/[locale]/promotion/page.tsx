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
        title={t('พิเศษสำหรับลูกค้าใหม่ 🔥')}
        features={[
          t('ฟรี! ค่าธรรมเนียมราชการจดบริษัท มูลค่า 5,200 บาท'),
          t('ฟรี! ค่าคัดหนังสือรับรองชุดใหญ่ มูลค่า 1,100 บาท'),
          t('ฟรี! บริการแถมต่างๆ รวมมูลค่ากว่า 7,900 บาท'),
        ]}
      />
      <PromotionSection
        imagePosition="left"
        imageSrc="/promotion/promotion-2.webp"
        title={t('พิเศษสำหรับลูกค้าบัญชี 💡')}
        features={[
          t('ฟรี! บริการบันทึกบัญชี มูลค่ากว่า 3,500 บาท'),
          t('ฟรี! บริการที่ปรึกษาธุรกิจไม่จำกัดจำนวนครั้ง'),
          t('ฟรี! บริการวางแผนภาษีที่เหมาะกับธุรกิจของคุณโดยเฉพาะ'),
        ]}
      />
    </main>
  );
} 