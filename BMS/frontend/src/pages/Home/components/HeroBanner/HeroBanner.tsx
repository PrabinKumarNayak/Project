import { useEffect, useState } from "react";

import { heroBannerData } from "@/data/HeroBanner/heroBannerData";

function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) =>
        prevBanner === heroBannerData.length - 1 ? 0 : prevBanner + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-[420px] w-full overflow-hidden rounded-[28px]">
        <img
          src={heroBannerData[currentBanner].image}
          alt="Hero Banner"
          className="h-full w-full object-cover transition-all duration-700"
        />

        {/* Slider Indicators */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {heroBannerData.map((_, index) => (
            <button
              key={index}
              className={`
                h-2 rounded-full transition-all duration-300

                ${currentBanner === index ? "w-6 bg-white" : "w-2 bg-white/50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
