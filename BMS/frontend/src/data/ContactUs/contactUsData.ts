export interface ContactUsData {
  sectionTag: string;
  heading: string;
  subHeading: string;

  phoneLabel: string;
  phone: string;

  emailLabel: string;
  email: string;

  addressLabel: string;
  address: string;

  mapLink: string;
}

export const contactUsData: ContactUsData = {
  sectionTag: "Contact Us",
  heading: "Get In Touch",

  subHeading:
    "Have questions about Sambalpuri collections, orders, or collaborations? Feel free to contact us anytime.",

  phoneLabel: "Phone Number",
  phone: "+91 98765 43210",

  emailLabel: "Email Address",
  email: "support@sambalpurithreads.com",

  addressLabel: "Address",
  address: "Budharaja, Sambalpur, Odisha, India",

  mapLink:
    "https://www.google.com/maps?q=Budharaja,Sambalpur,Odisha&output=embed",
};