import {
  Crown,
  Heart,
} from "lucide-react";

import type { GoldPassProduct } from "@/data/GoldPass/goldPassData";

interface GoldPassCardProps {
  product: GoldPassProduct;
}

function GoldPassCard({
  product,
}: GoldPassCardProps) {
  return (
    <div
      className="
        overflow-hidden

        rounded-[22px]

        bg-white

        transition-all duration-300

        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Product Image */}
      <div className="relative h-[210px] w-full overflow-hidden">

        {/* Discount Badge */}
        <div
          className="
            absolute left-3 top-3 z-10

            flex items-center gap-1

            rounded-full

            bg-blue-600

            px-2.5 py-1
          "
        >
          <Crown className="size-3 text-white" />

          <span
            className="
              text-[11px]
              font-medium
              text-white
            "
          >
            20% OFF
          </span>

        </div>

        {/* Wishlist Button */}
        <button
          className="
            absolute right-3 top-3 z-10

            flex size-8 items-center justify-center

            rounded-full

            bg-white/90
          "
        >
          <Heart className="size-4 text-(--color-text-main)" />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover

            transition-transform duration-500

            hover:scale-105
          "
        />

      </div>

      {/* Content */}
      <div className="space-y-3 p-4">

        {/* Product Name */}
        <h3
          className="
            line-clamp-1

            text-[15px]
            font-semibold

            text-(--color-text-main)
          "
        >
          {product.title}
        </h3>

        {/* Tags */}
        <div className="flex items-center gap-2">

          <span
            className="
              rounded-full

              bg-blue-100

              px-2.5 py-1

              text-[10px]
              font-medium

              text-blue-700
            "
          >
            {product.category}
          </span>

          <span
            className="
              rounded-full

              bg-slate-100

              px-2.5 py-1

              text-[10px]
              font-medium

              text-slate-600
            "
          >
            {product.piecesLeft}
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center gap-2">

          <p
            className="
              text-[16px]
              font-semibold

              text-green-600
            "
          >
            ₹{product.price}
          </p>

          <p
            className="
              text-[13px]

              text-slate-400
              line-through
            "
          >
            ₹{product.originalPrice}
          </p>

        </div>

        {/* Gold Pass */}
        {product.isGoldPassAvailable && (

          <div
            className="
              inline-flex items-center gap-1.5

              rounded-full

              bg-blue-600

              px-3 py-1.5
            "
          >
            <Crown className="size-3 text-white" />

            <span
              className="
                text-[10px]
                font-medium
                text-white
              "
            >
              GOLD PASS
            </span>

          </div>

        )}

      </div>
    </div>
  );
}

export default GoldPassCard;