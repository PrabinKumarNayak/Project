export interface FooterLinkItem {
  id: number;
  label: string;
  path: string;
}

export const businessLinks: FooterLinkItem[] = [
  {
    id: 1,
    label: "Terms and Conditions",
    path: "/terms-and-conditions",
  },

  {
    id: 2,
    label: "Privacy Policy",
    path: "/privacy-policy",
  },

  {
    id: 3,
    label: "Refund Policy",
    path: "/refund-policy",
  },

  {
    id: 4,
    label: "Shipping Policy",
    path: "/shipping-policy",
  },
];

export const categoryLinks: FooterLinkItem[] = [
  {
    id: 1,
    label: "Saree",
    path: "/saree",
  },

  {
    id: 2,
    label: "Shirt",
    path: "/shirt",
  },

  {
    id: 3,
    label: "Handkerchief",
    path: "/handkerchief",
  },

  {
    id: 4,
    label: "Kurti",
    path: "/kurti",
  },
];