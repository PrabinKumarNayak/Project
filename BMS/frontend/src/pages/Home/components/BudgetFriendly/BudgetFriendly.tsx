import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { budgetFriendlyData } from "@/data/BudgetFriendly/budgetFriendlyData";

function BudgetFriendly() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -260,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-[50px] w-full">
      <div className="space-y-6">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          {/* Heading */}
          <h2 className="font-sans text-[24px] font-semibold text-(--color-text-main)">
            Budget-Friendly Picks
          </h2>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-border-light) bg-white transition-all duration-200 hover:bg-(--color-surface)"
            >
              <ChevronLeft className="size-4 text-(--color-text-main)" />
            </button>

            <button
              onClick={scrollRight}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-border-light) bg-white transition-all duration-200 hover:bg-(--color-surface)"
            >
              <ChevronRight className="size-4 text-(--color-text-main)" />
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div
          ref={scrollRef}
          className="flex items-start gap-4 overflow-x-auto scroll-smooth scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {budgetFriendlyData.map((item) => (
            <div
              key={item.id}
              className="min-w-[220px] max-w-[220px] overflow-hidden rounded-[18px] bg-white"
            >
              {/* Product Image */}
              <div className="relative h-[260px] w-full overflow-hidden bg-(--color-surface)">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Discount Badge */}
                <div className="absolute left-3 top-3 rounded-[8px] bg-white px-2.5 py-1 font-sans text-[11px] font-semibold text-red-500">
                  {item.discountPercentage}% OFF
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-2 px-3 py-3">
                {/* Product Title */}
                <h3 className="line-clamp-1 font-sans text-[14px] font-medium text-(--color-text-main)">
                  {item.title}
                </h3>

                {/* Pricing */}
                <div className="flex items-center gap-2">
                  <p className="font-sans text-[16px] font-medium">
                    ₹{item.price}
                  </p>

                  <p className="font-sans text-[13px] font-medium text-(--color-text-muted) line-through">
                    ₹{item.originalPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BudgetFriendly;