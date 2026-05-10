import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface HeroBannerItem {
  id: number;
  image: string;
  heading: string;
  discount: string;
  buttonText: string;
  designs: string[];
}

export const heroBannerData: HeroBannerItem = {
  id: 1,
  image: APP_IMAGES.SummerBanner,
  heading: "Best Selling Sambalpuri Designs",
  discount: "Save Up to 50%",
  buttonText: "Shop Now",
  designs: [
    "Chakra Design",
    "Pasapalli Design",
    "Hati Design",
    "Shankha Design",
    "Mayura Design",
    "Phula Design",
  ],
};