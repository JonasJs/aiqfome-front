import Image from 'next/image';
import { bannerVariants } from './Banner';

export function BannerSkeleton() {
  return (
    <div aria-hidden="true" className={bannerVariants({ loading: true })}>
      <Image
        src="/assets/images/fallback-banner.svg"
        alt=""
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
