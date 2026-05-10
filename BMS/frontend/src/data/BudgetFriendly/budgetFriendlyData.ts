import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface BudgetFriendlyItem {
  id: number;
  image: string;
  title: string;
  discountPercentage: number;
  price: number;
  originalPrice: number;
}

export const budgetFriendlyData: BudgetFriendlyItem[] = [
  {
    id: 1,
    image: APP_IMAGES.BudgetShirt,
    title: "Cotton Shirt",
    discountPercentage: 30,
    price: 799,
    originalPrice: 1234,
  },
  {
    id: 2,
    image: APP_IMAGES.BudgetKurta,
    title: "Ethnic Kurta",
    discountPercentage: 30,
    price: 999,
    originalPrice: 1599,
  },
  {
    id: 3,
    image: APP_IMAGES.BudgetSaree,
    title: "Silk Saree",
    discountPercentage: 30,
    price: 1499,
    originalPrice: 2399,
  },
  {
    id: 4,
    image: APP_IMAGES.BudgetBag,
    title: "Handcrafted Bag",
    discountPercentage: 30,
    price: 699,
    originalPrice: 1099,
  },
  {
    id: 5,
    image: APP_IMAGES.BudgetPant,
    title: "Casual Pant",
    discountPercentage: 30,
    price: 899,
    originalPrice: 1399,
  },
  {
    id: 6,
    image: APP_IMAGES.BudgetPant,
    title: "Casual Pant",
    discountPercentage: 30,
    price: 899,
    originalPrice: 1399,
  },
  {
    id: 7,
    image: APP_IMAGES.BudgetPant,
    title: "Casual Pant",
    discountPercentage: 30,
    price: 899,
    originalPrice: 1399,
  },
];