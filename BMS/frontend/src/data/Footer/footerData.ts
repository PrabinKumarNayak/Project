import { brandConfig } from "@/data/Navbar/navbarData";

export interface FooterContactItem {
  id: number;
  type: "phone" | "email" | "address";
  value: string;
}

export const footerBrandData = {
  logo: brandConfig.logo,
  title: brandConfig.title,
  description:
    "Authentic Sambalpuri handloom collections crafted with Odisha’s timeless weaving heritage.",
};

export const footerSectionHeadings = {
  business: "Business",
  categories: "Popular Categories",
  contact: "Contact Info",
};

export const footerContactInfo: FooterContactItem[] = [
  {
    id: 1,
    type: "phone",
    value: "+91 98765 43210",
  },

  {
    id: 2,
    type: "email",
    value: "support@sambalpurithreads.com",
  },

  {
    id: 3,
    type: "address",
    value: "Budharaja, Sambalpur, Odisha",
  },
];

export const footerBottomText =
  "© 2026 All Rights Reserved | Powered by Prabin Kumar Nayak";