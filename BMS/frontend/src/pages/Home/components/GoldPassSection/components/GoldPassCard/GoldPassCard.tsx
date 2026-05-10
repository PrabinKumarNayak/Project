import { Crown, Heart } from "lucide-react";

import type { GoldPassProduct } from "@/data/GoldPass/goldPassData";

interface GoldPassCardProps {
  product: GoldPassProduct;
}

const renderGoldBadge = (product: GoldPassProduct) => {
  if (!product.isGoldPassAvailable) {
    return null;
  }

  return (
    <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-3 py-1.5">
      <Crown className="size-3 text-white" />

      <span className="text-[10px] font-semibold tracking-wide text-white">
        {product.goldPassLabel}
      </span>
    </div>
  );
};

const renderWishlistButton = () => {
  return (
    <button className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-md">
      <Heart className="size-4 text-(--color-text-main)" />
    </button>
  );
};

const renderProductImage = (product: GoldPassProduct) => {
  return (
    <img
      src={product.image}
      alt={product.title}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
};

const renderOverlay = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
  );
};

const renderCategory = (product: GoldPassProduct) => {
  return (
    <div className="absolute bottom-4 left-4">
      <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#F5D77A]">
        {product.category}
      </p>
    </div>
  );
};

const renderImageSection = (product: GoldPassProduct) => {
  return (
    <div className="group relative h-[220px] w-full overflow-hidden">
      {renderGoldBadge(product)}

      {renderWishlistButton()}

      {renderProductImage(product)}

      {renderOverlay()}

      {renderCategory(product)}
    </div>
  );
};

const renderProductTitle = (product: GoldPassProduct) => {
  return (
    <h3 className="text-[15px] font-semibold leading-6 text-(--color-text-main)">
      {product.title}
    </h3>
  );
};

const renderPricing = (product: GoldPassProduct) => {
  return (
    <div className="flex items-center gap-3">
      <p className="text-[24px] font-semibold tracking-tight text-(--color-text-main)">
        ₹{product.price}
      </p>

      <p className="text-[15px] text-slate-400 line-through">
        ₹{product.originalPrice}
      </p>
    </div>
  );
};

const renderDiscountBadge = (product: GoldPassProduct) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1.5">
      <Crown className="size-3 text-[#D4AF37]" />

      <span className="text-[11px] font-medium tracking-wide text-[#B8860B]">
        {product.discountLabel}
      </span>
    </div>
  );
};

const renderBottomContent = (product: GoldPassProduct) => {
  return (
    <div className="space-y-4 p-5">
      {renderProductTitle(product)}

      {renderPricing(product)}

      {renderDiscountBadge(product)}
    </div>
  );
};

function GoldPassCard({ product }: GoldPassCardProps) {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white">
      {renderImageSection(product)}

      {renderBottomContent(product)}
    </div>
  );
}

export default GoldPassCard;
