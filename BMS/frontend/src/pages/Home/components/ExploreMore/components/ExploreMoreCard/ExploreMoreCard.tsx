import { Heart } from "lucide-react";

import type { ExploreMoreProduct } from "@/data/ExploreMore/exploreMoreData";

interface ExploreMoreCardProps {
  product: ExploreMoreProduct;
}

const renderProductImage = (product: ExploreMoreProduct) => {
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-[22px] bg-(--color-surface)">
      <img
        src={product.image}
        alt={product.title}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
        loading="lazy"
      />

      {renderWishlistButton()}
    </div>
  );
};

const renderWishlistButton = () => {
  return (
    <button className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 transition-all duration-200 hover:bg-white">
      <Heart className="size-5 text-(--color-text-main)" />
    </button>
  );
};

const renderProductTitle = (product: ExploreMoreProduct) => {
  return (
    <h3 className="line-clamp-1 font-sans text-[14px] font-medium text-(--color-text-main)">
      {product.title}
    </h3>
  );
};

const renderProductMeta = (product: ExploreMoreProduct) => {
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-full bg-(--color-surface) px-2.5 py-1 text-[12px] font-medium text-(--color-brand-primary)">
        {product.variant}
      </span>

      <span className="rounded-full bg-(--color-surface) px-2.5 py-1 text-[12px] font-medium text-(--color-text-muted)">
        {product.piecesLeft}
      </span>
    </div>
  );
};

const renderPrice = (product: ExploreMoreProduct) => {
  return (
    <p className="text-[16px] font-semibold">
      ₹{product.price}
    </p>
  );
};

const renderProductDetails = (product: ExploreMoreProduct) => {
  return (
    <div className="mt-3 space-y-3">
      {renderProductTitle(product)}
      {renderProductMeta(product)}
      {renderPrice(product)}
    </div>
  );
};

const ExploreMoreCard = ({
  product,
}: ExploreMoreCardProps) => {
  return (
    <div className="w-[210px]">
      {renderProductImage(product)}
      {renderProductDetails(product)}
    </div>
  );
};

export default ExploreMoreCard;