import Image from 'next/image';
import { bannerServices } from '@/domain/services';
import { tv } from 'tailwind-variants';

export const bannerVariants = tv({
  base: 'relative aspect-[390/130] w-full overflow-hidden md:mt-2 md:rounded-lg',
  variants: {
    loading: {
      true: 'animate-pulse',
    },
  },
});

export async function Banner() {
  const activeBanner = await bannerServices.getActiveBanner();

  if (!activeBanner) {
    return null;
  }

  return (
    <div className={bannerVariants()}>
      <Image
        src={activeBanner.url}
        alt={activeBanner.alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
      />
    </div>
  );
}
