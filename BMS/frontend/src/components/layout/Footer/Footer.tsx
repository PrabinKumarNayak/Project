import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { businessLinks, categoryLinks } from "./footerConfig";

import {
  footerBottomText,
  footerBrandData,
  footerContactInfo,
  footerSectionHeadings,
} from "@/data/Footer/footerData";

const renderBrand = () => {
  return (
    <div className="max-w-[320px]">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-(--color-border-light) bg-(--color-brand-light)">
          <span className="text-[30px] font-bold text-(--color-brand-primary)">
            {footerBrandData.logo}
          </span>
        </div>

        <h2 className="text-[38px] text-section-heading text-(--color-text-main)">
          {footerBrandData.title}
        </h2>
      </Link>

      <p className="mt-5 text-[15px] leading-[30px] text-(--color-text-secondary)">
        {footerBrandData.description}
      </p>
    </div>
  );
};

const renderLinks = ({
  heading,
  links,
}: {
  heading: string;
  links: {
    id: number;
    label: string;
    path: string;
  }[];
}) => {
  return (
    <div>
      <h3 className="text-[20px] font-semibold text-(--color-text-main)">
        {heading}
      </h3>

      <div className="mt-7 space-y-5">
        {links.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="block text-[16px] text-(--color-text-secondary) transition-colors duration-200 hover:text-(--color-brand-primary)"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const renderContactIcon = (type: string) => {
  if (type === "phone") {
    return <Phone className="size-4 text-(--color-brand-primary)" />;
  }

  if (type === "email") {
    return <Mail className="size-4 text-(--color-brand-primary)" />;
  }

  return <MapPin className="size-4 text-(--color-brand-primary)" />;
};

const renderContact = () => {
  return (
    <div className="min-w-0">
      <h3 className="text-[20px] font-semibold text-(--color-text-main)">
        {footerSectionHeadings.contact}
      </h3>

      <div className="mt-7 space-y-6">
        {footerContactInfo.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-brand-light)">
              {renderContactIcon(item.type)}
            </div>

            <p className="w-full break-words text-[15px] leading-[28px] text-(--color-text-secondary)">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderBottom = () => {
  return (
    <div className="border-t border-(--color-border-light) py-5 text-center">
      <p className="text-[14px] text-(--color-text-secondary)">
        {footerBottomText}
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="mt-[50px] border-t border-(--color-border-light) bg-white">
      <div className="mx-auto flex items-start justify-between gap-10 px-6 py-10">
        {renderBrand()}

        {renderLinks({
          heading: footerSectionHeadings.business,
          links: businessLinks,
        })}

        {renderLinks({
          heading: footerSectionHeadings.categories,
          links: categoryLinks,
        })}

        {renderContact()}
      </div>

      {renderBottom()}
    </footer>
  );
};

export default Footer;
