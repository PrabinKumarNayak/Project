import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface HeroBannerItem {
  id: number;
  image: string;
}

export const heroBannerData: HeroBannerItem[] = [
  {
    id: 1,
    image: APP_IMAGES.BannerOne,
  },

  {
    id: 2,
    image: APP_IMAGES.BannerTwo,
  },
];
