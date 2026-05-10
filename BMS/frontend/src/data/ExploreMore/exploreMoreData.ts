import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface ExploreMoreProduct {
  id: number;
  title: string;
  image: string;
  variant: string;
  piecesLeft: string;
  price: number;
}

export const exploreMoreData: ExploreMoreProduct[] = [
  {
    id: 1,
    title: "Authentic Sambalpuri Shirt",
    image: APP_IMAGES.ExploreShirt1,
    variant: "Custom",
    piecesLeft: "2 Pieces",
    price: 999,
  },

  {
    id: 2,
    title: "Traditional Sambalpuri Kurta",
    image: APP_IMAGES.ExploreKurta1,
    variant: "Ethnic",
    piecesLeft: "3 Pieces",
    price: 1499,
  },

  {
    id: 3,
    title: "Handwoven Ikat Shirt",
    image: APP_IMAGES.ExploreShirt2,
    variant: "Premium",
    piecesLeft: "1 Piece",
    price: 1299,
  },

  {
    id: 4,
    title: "Beautiful Sambalpuri Dress",
    image: APP_IMAGES.ExploreDress1,
    variant: "Handmade",
    piecesLeft: "2 Pieces",
    price: 899,
  },

  {
    id: 5,
    title: "Classic Cotton Kurta",
    image: APP_IMAGES.ExploreKurta2,
    variant: "Traditional",
    piecesLeft: "4 Pieces",
    price: 1199,
  },

  {
    id: 6,
    title: "Kids Ethnic Wear",
    image: APP_IMAGES.ExploreKids1,
    variant: "Premium",
    piecesLeft: "2 Pieces",
    price: 799,
  },

  {
    id: 7,
    title: "Elegant Sambalpuri Saree",
    image: APP_IMAGES.ExploreSaree1,
    variant: "Handwoven",
    piecesLeft: "1 Piece",
    price: 2499,
  },

  {
    id: 8,
    title: "Handcrafted Ladies Bag",
    image: APP_IMAGES.ExploreBag1,
    variant: "Custom",
    piecesLeft: "3 Pieces",
    price: 699,
  },

  {
    id: 9,
    title: "Traditional Ikat Fabric",
    image: APP_IMAGES.ExploreFabric1,
    variant: "Premium",
    piecesLeft: "5 Pieces",
    price: 599,
  },

  {
    id: 10,
    title: "Designer Cotton Shirt",
    image: APP_IMAGES.ExploreShirt3,
    variant: "Modern",
    piecesLeft: "2 Pieces",
    price: 1099,
  },
];