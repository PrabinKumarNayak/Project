import { Button } from "@/components/ui/button";

import { heroBannerData } from "@/data/HeroBanner/heroBannerData";

function HeroBanner() {
  return (
    <section className="my-5 w-full">
      <div className="relative h-[500px] w-full overflow-hidden rounded-[30px]">
        {/* Banner Image */}
        <img
          src={heroBannerData.image}
          alt="Hero Banner"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Content */}
        <div className="absolute right-16 top-1/2 z-10 flex -translate-y-1/2 flex-col items-end">
          <p
            className="
              text-right

              text-[34px]
              font-semibold

              text-white
            "
          >
            {heroBannerData.heading}
          </p>

          <h1
            className="
              mt-2

              text-right

              text-[90px]
              font-bold

              leading-none

              text-white
            "
          >
            {heroBannerData.discount}
          </h1>

          <Button
            variant="outline"
            size="lg"
            className="
              mt-8

              rounded-full

              border-white/70

              bg-white/10

              px-10 py-6

              text-lg
              font-medium

              text-white

              backdrop-blur-md

              hover:bg-white
              hover:text-black
            "
          >
            {heroBannerData.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
