import { Crown } from "lucide-react";

import {
  goldPassData,
  goldPassSectionContent,
} from "@/data/GoldPass/goldPassData";

import GoldPassCard from "./components/GoldPassCard/GoldPassCard";

const renderPremiumBadge = () => {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5">
      <Crown className="size-4 text-[#D4AF37]" />

      <span className="text-sm font-medium tracking-wide text-[#D4AF37]">
        {goldPassSectionContent.premiumBadge}
      </span>
    </div>
  );
};

const renderHeading = () => {
  return (
    <h2 className="text-5xl font-semibold leading-[1.1] tracking-tight text-(--color-text-main)">
      {goldPassSectionContent.heading}
    </h2>
  );
};

const renderDescription = () => {
  return (
    <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-(--color-text-secondary)">
      {goldPassSectionContent.description}
    </p>
  );
};

const renderHeader = () => {
  return (
    <div className="text-center">
      {renderPremiumBadge()}

      {renderHeading()}

      {renderDescription()}
    </div>
  );
};

const renderCards = () => {
  return (
    <div className="mt-12 flex flex-wrap items-start justify-center gap-6">
      {goldPassData.map((product) => (
        <div key={product.id} className="w-[290px]">
          <GoldPassCard product={product} />
        </div>
      ))}
    </div>
  );
};

function GoldPassSection() {
  return (
    <section className="mt-[50px] overflow-hidden rounded-[40px] ">
      {renderHeader()}

      {renderCards()}
    </section>
  );
}

export default GoldPassSection;
