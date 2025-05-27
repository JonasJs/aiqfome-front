import { Banner } from './banner.types';
import * as bannerResources from './banner.resources';

export async function getActiveBanner(): Promise<Banner | null> {
  try {
    const banners = await bannerResources.fetchBanners();
    return banners.find((banner) => banner.isActive) || null;
  } catch {
    return null;
  }
}
