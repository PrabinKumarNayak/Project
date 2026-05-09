import { popularCategoriesData } from "@/data/PopularCategories/popularCategoriesData";

function PopularCategories() {
  return (
    <section className="w-full pt-[20px]">
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <h2 className="font-sans text-[24px] font-semibold text-(--color-text-main)">
            Popular Categories
          </h2>
        </div>

        {/* Categories */}
        <div className="flex items-start justify-between gap-4">
          {popularCategoriesData.map((item) => (
            <div
              key={item.id}
              className="flex w-full max-w-[160px] cursor-pointer flex-col items-center gap-3"
            >
              {/* Image */}
              <div className="h-[170px] w-full overflow-hidden rounded-[22px] bg-(--color-surface)">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="text-center font-sans text-[14px] font-medium text-(--color-text-main)">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
