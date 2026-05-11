import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { faqData, faqSectionData } from "@/data/Faq/faqData";

const renderHeading = () => {
  return (
    <div className="text-center">
      <h2 className="text-[40px] font-semibold text-(--color-text-main)">
        {faqSectionData.heading}
      </h2>

      <p className="mt-3 text-[15px] text-(--color-text-secondary)">
        {faqSectionData.subHeading}
      </p>
    </div>
  );
};

const renderQuestionButton = ({
  item,
  activeFaq,
  onToggle,
}: {
  item: (typeof faqData)[0];
  activeFaq: number | null;
  onToggle: (id: number) => void;
}) => {
  return (
    <button
      onClick={() => onToggle(item.id)}
      className="flex w-full items-center justify-between px-7 py-6 text-left"
    >
      <h3 className="text-[17px] font-medium text-(--color-text-main)">
        {item.question}
      </h3>

      <ChevronDown
        className={`size-5 transition-transform duration-300 ${
          activeFaq === item.id ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const renderAnswer = ({
  item,
  activeFaq,
}: {
  item: (typeof faqData)[0];
  activeFaq: number | null;
}) => {
  return (
    <div
      className={`grid transition-all duration-300 ${
        activeFaq === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <p className="border-t border-(--color-border-light) px-7 py-5 text-[15px] leading-[30px] text-(--color-text-secondary)">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const renderFaqItem = ({
  item,
  activeFaq,
  onToggle,
}: {
  item: (typeof faqData)[0];
  activeFaq: number | null;
  onToggle: (id: number) => void;
}) => {
  return (
    <div className="overflow-hidden rounded-[24px] border border-(--color-border-light) bg-white transition-all duration-300">
      {renderQuestionButton({
        item,
        activeFaq,
        onToggle,
      })}

      {renderAnswer({
        item,
        activeFaq,
      })}
    </div>
  );
};

const renderFaqItems = ({
  activeFaq,
  onToggle,
}: {
  activeFaq: number | null;
  onToggle: (id: number) => void;
}) => {
  return (
    <div className="space-y-4">
      {faqData.map((item) => (
        <div key={item.id}>
          {renderFaqItem({
            item,
            activeFaq,
            onToggle,
          })}
        </div>
      ))}
    </div>
  );
};

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setActiveFaq((prevFaq) => (prevFaq === id ? null : id));
  };

  return (
    <section className="mt-[50px] w-full">
      <div className="space-y-8">
        {renderHeading()}

        {renderFaqItems({
          activeFaq,
          onToggle: handleToggle,
        })}
      </div>
    </section>
  );
};

export default Faq;
