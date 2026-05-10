import { Link } from "react-router-dom";

import { collectionBarData } from "@/data/CollectionBar/collectionBarData";

function CollectionBar() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex items-center justify-between py-2">
        {collectionBarData.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="
              whitespace-nowrap
              text-[15px]
              font-medium
              uppercase
              tracking-wide
              text-(--color-text-main)
              transition-all
              duration-200
              hover:text-(--color-brand-primary)
            "
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CollectionBar;