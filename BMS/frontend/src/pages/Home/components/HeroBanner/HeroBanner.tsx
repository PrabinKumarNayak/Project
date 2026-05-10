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
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="absolute right-16 top-1/2 z-10 flex -translate-y-1/2 flex-col items-end">
          {/* Heading */}
          <p className="max-w-[600px] text-right text-[34px] font-semibold text-white">
            {heroBannerData.heading}
          </p>

          {/* Discount */}
          <h1 className="mt-2 text-right text-[90px] font-bold leading-none text-white">
            {heroBannerData.discount}
          </h1>

          {/* Design Names */}
          <div className="mt-6 flex flex-wrap justify-end gap-3">
            {heroBannerData.designs.map((design) => (
              <div
                key={design}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                • {design}
              </div>
            ))}
          </div>

          {/* Button */}
          <Button
            variant="outline"
            size="lg"
            className="mt-8 rounded-md border-white/70 bg-white/10 px-10 py-6 text-lg font-medium text-white backdrop-blur-md hover:bg-white hover:text-black"
          >
            {heroBannerData.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;