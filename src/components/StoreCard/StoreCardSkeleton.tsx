import { Skeleton } from '../Skeleton/Skeleton';
import { storeCardVariants } from './StoreCard';

export function StoreCardSkeleton() {
  const { container, imageWrapper, content, deliveryInfo } =
    storeCardVariants();

  return (
    <div className={container()}>
      <div className={imageWrapper()}>
        <Skeleton className="h-full w-full" />
      </div>

      <div className={content()}>
        <Skeleton className="h-5 w-3/4" />
        <div className={deliveryInfo()}>
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}
