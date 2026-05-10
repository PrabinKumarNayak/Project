import { APP_IMAGES } from "@/lib/constants/AppImages";

export interface TestimonialItem {
  id: number;

  name: string;
  role: string;

  review: string;
  image: string;
}

export interface TestimonialsSectionData {
  sectionTitle: string;
  sectionDescription: string;
}

export const testimonialsSectionData: TestimonialsSectionData = {
  sectionTitle: "What Our Customers Say",

  sectionDescription:
    "Hear from people across Odisha who love our authentic Sambalpuri collections and traditional handloom craftsmanship.",
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,

    name: "Prabin Kumar Nayak",
    role: "Handloom Enthusiast",

    review:
      "The kurta quality was premium and the traditional weaving looked absolutely authentic. The fabric feels very comfortable and elegant.",

    image: APP_IMAGES.testimonial1,
  },

  {
    id: 2,

    name: "Priti Nayak",
    role: "BCA Student",

    review:
      "I loved the ethnic collection and the designs feel modern while still keeping the Odisha handloom identity alive beautifully.",

    image: APP_IMAGES.testimonial2,
  },

  {
    id: 3,

    name: "Harish Nayak",
    role: "Working Professional",

    review:
      "The product delivery experience was smooth and the Sambalpuri shirt looked exactly like the website images.",

    image: APP_IMAGES.testimonial3,
  },

  {
    id: 4,

    name: "Kholana Nayak",
    role: "Housewife",

    review:
      "The saree quality exceeded my expectations. Everyone in our family appreciated the beautiful traditional patterns.",

    image: APP_IMAGES.testimonial4,
  },

  {
    id: 5,

    name: "Raj Nayak",
    role: "Entrepreneur",

    review:
      "Finally found a trusted website for authentic Sambalpuri products with premium quality and reasonable pricing.",

    image: APP_IMAGES.testimonial5,
  },
];