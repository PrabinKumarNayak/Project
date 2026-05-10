import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface GoldPassProduct {
  id: number;
  title: string;
  image: string;
  category: string;
  piecesLeft: string;
  discountPercentage: number;
  price: number;
  originalPrice: number;
  isGoldPassAvailable: boolean;
}

export const goldPassData: GoldPassProduct[] = [
  {
    id: 1,
    title: "Premium Sambalpuri Shirt",
    image: APP_IMAGES.GoldPassShirt,
    category: "Custom",
    piecesLeft: "2 Pieces",
    discountPercentage: 20,
    price: 999,
    originalPrice: 1499,
    isGoldPassAvailable: true,
  },
  {
    id: 2,
    title: "Traditional Kurta Set",
    image: APP_IMAGES.GoldPassKurta,
    category: "Ethnic",
    piecesLeft: "3 Pieces",
    discountPercentage: 20,
    price: 1299,
    originalPrice: 1899,
    isGoldPassAvailable: true,
  },
  {
    id: 3,
    title: "Designer Sambalpuri Saree",
    image: APP_IMAGES.GoldPassSaree,
    category: "Premium",
    piecesLeft: "1 Piece",
    discountPercentage: 20,
    price: 2499,
    originalPrice: 3299,
    isGoldPassAvailable: true,
  },
  {
    id: 4,
    title: "Elegant Printed Kurti",
    image: APP_IMAGES.GoldPassKurti,
    category: "Custom",
    piecesLeft: "4 Pieces",
    discountPercentage: 20,
    price: 899,
    originalPrice: 1399,
    isGoldPassAvailable: true,
  }
];