import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface GoldPassSectionContent {
  premiumBadge: string;
  heading: string;
  description: string;
}

export interface GoldPassProduct {
  id: number;
  title: string;
  image: string;
  category: string;
  goldPassLabel: string;
  discountLabel: string;
  price: number;
  originalPrice: number;
  isGoldPassAvailable: boolean;
}

export const goldPassSectionContent: GoldPassSectionContent = {
  premiumBadge: "Premium Membership",
  heading: "Exclusive Gold Pass Collection",
  description:
    "Unlock member-only pricing, priority access, and curated handcrafted Sambalpuri collections designed for premium elegance.",
};

export const goldPassData: GoldPassProduct[] = [
  {
    id: 1,
    title: "Premium Sambalpuri Shirt",
    image: APP_IMAGES.GoldPassShirt,
    category: "Custom",
    goldPassLabel: "GOLD PASS",
    discountLabel: "Extra 20% OFF",
    price: 999,
    originalPrice: 1499,
    isGoldPassAvailable: true,
  },
  {
    id: 2,
    title: "Traditional Kurta Set",
    image: APP_IMAGES.GoldPassKurta,
    category: "Ethnic",
    goldPassLabel: "GOLD PASS",
    discountLabel: "Extra 20% OFF",
    price: 1299,
    originalPrice: 1899,
    isGoldPassAvailable: true,
  },
  {
    id: 3,
    title: "Designer Sambalpuri Saree",
    image: APP_IMAGES.GoldPassSaree,
    category: "Premium",
    goldPassLabel: "GOLD PASS",
    discountLabel: "Extra 20% OFF",
    price: 2499,
    originalPrice: 3299,
    isGoldPassAvailable: true,
  },
];