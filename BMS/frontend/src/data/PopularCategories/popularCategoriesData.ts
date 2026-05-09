import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface PopularCategoryItem {
  id: number;
  title: string;
  image: string;
}

export const popularCategoriesData: PopularCategoryItem[] = [
  {
    id: 1,
    title: "Shirt",
    image: APP_IMAGES.ShirtImage,
  },

  {
    id: 2,
    title: "Handkerchief",
    image: APP_IMAGES.HandkerchiefImage,
  },

  {
    id: 3,
    title: "Saree",
    image: APP_IMAGES.SareeImage,
  },

  {
    id: 4,
    title: "Kurti",
    image: APP_IMAGES.KurtiImage,
  },

  {
    id: 5,
    title: "Kurta For Men",
    image: APP_IMAGES.KurtaMenImage,
  },

  {
    id: 6,
    title: "Ethnic Dresses",
    image: APP_IMAGES.EthnicDressImage,
  },

  {
    id: 7,
    title: "Bags",
    image: APP_IMAGES.BagsImage,
  },
];