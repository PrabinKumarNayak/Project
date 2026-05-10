import { Quote } from "lucide-react";

import type { TestimonialItem } from "@/data/Testimonials/testimonialsData";

interface TestimonialCardProps {
  item: TestimonialItem;
}

const renderQuoteIcon = () => {
  return (
    <div className="absolute right-5 top-5 text-(--color-brand-light)">
      <Quote className="size-12" />
    </div>
  );
};

const renderUserImage = (item: TestimonialItem) => {
  return (
    <div className="h-16 w-16 overflow-hidden rounded-full">
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

const renderUserInfo = (item: TestimonialItem) => {
  return (
    <div>
      <h3 className="text-[18px] font-semibold text-(--color-text-main)">
        {item.name}
      </h3>

      <p className="mt-1 text-[14px] text-(--color-text-secondary)">
        {item.role}
      </p>
    </div>
  );
};

const renderUser = (item: TestimonialItem) => {
  return (
    <div className="flex items-center gap-4">
      {renderUserImage(item)}
      {renderUserInfo(item)}
    </div>
  );
};

const renderReview = (item: TestimonialItem) => {
  return (
    <p className="mt-6 text-[15px] leading-[30px] text-(--color-text-secondary)">
      {item.review}
    </p>
  );
};

const TestimonialCard = ({
  item,
}: TestimonialCardProps) => {
  /* it means : const item = props.item;*/
  return (
    <div className="relative h-full min-w-[360px] rounded-[28px] bg-white p-6 shadow-sm">
      {renderQuoteIcon()}
      {renderUser(item)}
      {renderReview(item)}
    </div>
  );
};

export default TestimonialCard;