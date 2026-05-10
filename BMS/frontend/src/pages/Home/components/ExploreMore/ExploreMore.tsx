import { exploreMoreData } from "@/data/ExploreMore/exploreMoreData";

import ExploreMoreCard from "./components/ExploreMoreCard/ExploreMoreCard";

const renderHeading = () => {
  return (
    <div>
      <h2 className="font-sans text-[24px] font-semibold text-(--color-text-main)">
        Explore More
      </h2>
    </div>
  );
};

const renderProducts = () => {
  return (
    <div className="flex flex-wrap items-start gap-x-6 gap-y-8">
      {exploreMoreData.map((item) => (
        <ExploreMoreCard
          key={item.id}
          product={item}
        />
      ))}
    </div>
  );
};

const ExploreMore = () => {
  return (
    <section className="mt-[50px] w-full">
      <div className="space-y-6">
        {renderHeading()}
        {renderProducts()}
      </div>
    </section>
  );
};

export default ExploreMore;