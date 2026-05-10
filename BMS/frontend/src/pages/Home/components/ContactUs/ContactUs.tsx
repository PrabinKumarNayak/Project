import { Mail, MapPin, Phone } from "lucide-react";

import { contactUsData } from "@/data/ContactUs/contactUsData";

const renderSectionTag = () => {
  return (
    <p className="text-[14px] font-medium uppercase tracking-[3px] text-(--color-brand-primary)">
      {contactUsData.sectionTag}
    </p>
  );
};

const renderHeading = () => {
  return (
    <h2 className="mt-3 font-sans text-[42px] font-semibold leading-[52px] text-(--color-text-main)">
      {contactUsData.heading}
    </h2>
  );
};

const renderSubHeading = () => {
  return (
    <p className="mt-5 text-[15px] leading-[30px] text-(--color-text-secondary)">
      {contactUsData.subHeading}
    </p>
  );
};

const renderContactItem = ({
  icon,
  label,
  value,
  isAddress = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isAddress?: boolean;
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--color-brand-light)">
        {icon}
      </div>

      <div>
        <p className="text-[13px] text-(--color-text-muted)">
          {label}
        </p>

        <h4
          className={`mt-1 text-[17px] font-medium text-(--color-text-main) ${
            isAddress ? "leading-[28px]" : ""
          }`}
        >
          {value}
        </h4>
      </div>
    </div>
  );
};

const renderContactDetails = () => {
  return (
    <div className="mt-10 space-y-6">
      {renderContactItem({
        icon: (
          <Phone className="size-5 text-(--color-brand-primary)" />
        ),
        label: contactUsData.phoneLabel,
        value: contactUsData.phone,
      })}

      {renderContactItem({
        icon: (
          <Mail className="size-5 text-(--color-brand-primary)" />
        ),
        label: contactUsData.emailLabel,
        value: contactUsData.email,
      })}

      {renderContactItem({
        icon: (
          <MapPin className="size-5 text-(--color-brand-primary)" />
        ),
        label: contactUsData.addressLabel,
        value: contactUsData.address,
        isAddress: true,
      })}
    </div>
  );
};

const renderLeftContent = () => {
  return (
    <div className="max-w-[520px]">
      {renderSectionTag()}
      {renderHeading()}
      {renderSubHeading()}
      {renderContactDetails()}
    </div>
  );
};

const renderMap = () => {
  return (
    <div className="h-[420px] w-full max-w-[520px] overflow-hidden">
      <iframe
        src={contactUsData.mapLink}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>
  );
};

const ContactUs = () => {
  return (
    <section className="my-[50px] w-full">
      <div className="flex items-center justify-between gap-10 rounded-[32px] bg-white/70 backdrop-blur-md">
        {renderLeftContent()}
        {renderMap()}
      </div>
    </section>
  );
};

export default ContactUs;