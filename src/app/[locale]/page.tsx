import { useTranslations } from 'next-intl';
import { Text } from '@chakra-ui/react';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className='flex flex-col items-center m-12 gap-4'>
      <Text>{t('hello')} -- 00</Text>
    </div>
  );
}
