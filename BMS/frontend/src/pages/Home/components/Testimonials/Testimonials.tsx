import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import {
  testimonialsData,
  testimonialsSectionData,
} from "@/data/Testimonials/testimonialsData";

import TestimonialCard from "./components/TestimonialCard/TestimonialCard";

const renderHeading = () => {
  return (
    <div>
      <h2 className="text-[38px] font-semibold text-(--color-text-main)">
        {testimonialsSectionData.sectionTitle}
      </h2>

      <p className="mt-4 max-w-[700px] text-[15px] leading-[30px] text-(--color-text-secondary)">
        {testimonialsSectionData.sectionDescription}
      </p>
    </div>
  );
};

const renderNavigationButtons = ({
  scrollLeft,
  scrollRight,
}: {
  scrollLeft: () => void;
  scrollRight: () => void;
}) => {
  return (
    <div className="mt-2 flex items-center gap-3">
      <button
        onClick={scrollLeft}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-(--color-border-light) bg-white transition-all duration-300 hover:bg-(--color-brand-light)"
      >
        <ChevronLeft className="size-5 text-(--color-text-main)" />
      </button>

      <button
        onClick={scrollRight}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-(--color-border-light) bg-white transition-all duration-300 hover:bg-(--color-brand-light)"
      >
        <ChevronRight className="size-5 text-(--color-text-main)" />
      </button>
    </div>
  );
};

const renderCards = (
  scrollRef: React.RefObject<HTMLDivElement | null>,
) => {
  return (
    <div className="mt-5 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonialsData.map((item) => (
          <TestimonialCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-[50px] w-full overflow-hidden">
      <div className="flex items-start justify-between">
        {renderHeading()}

        {renderNavigationButtons({
          scrollLeft,
          scrollRight,
        })}
      </div>

      {renderCards(scrollRef)}
    </section>
  );
};

export default Testimonials;