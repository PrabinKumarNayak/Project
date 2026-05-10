import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface HeroBannerItem {
  id: number;
  image: string;
  heading: string;
  discount: string;
  buttonText: string;
}

export const heroBannerData: HeroBannerItem = {
  id: 1,
  image: APP_IMAGES.SummerBanner,
  heading: "Prices Crashing On Top Brands",
  discount: "50-80% OFF",
  buttonText: "Shop Now",
};
