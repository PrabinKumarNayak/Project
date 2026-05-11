export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqSectionData {
  heading: string;
  subHeading: string;
}

export const faqSectionData: FaqSectionData = {
  heading: "Frequently Asked Questions",
  subHeading:
    "Everything you need to know about our Sambalpuri collections.",
};

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is Sambalpuri handloom?",
    answer:
      "Sambalpuri handloom is a traditional weaving art from Odisha known for its unique ikat patterns, vibrant colors, and handcrafted detailing.",
  },

  {
    id: 2,
    question: "Are your products handmade?",
    answer:
      "Yes, most of our collections are handcrafted by skilled local weavers and artisans from Sambalpur and nearby regions.",
  },

  {
    id: 3,
    question: "Do you provide cash on delivery?",
    answer:
      "Yes, cash on delivery is available for selected locations across India.",
  },

  {
    id: 4,
    question: "How long does shipping take?",
    answer:
      "Orders are usually delivered within 5 to 7 business days depending on your location.",
  },

  {
    id: 5,
    question: "Can I exchange a product?",
    answer:
      "Yes, we provide easy exchange support for unused products within 7 days of delivery.",
  },
];