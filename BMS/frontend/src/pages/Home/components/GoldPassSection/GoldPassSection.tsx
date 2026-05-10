import { goldPassData } from "@/data/GoldPass/goldPassData";

import GoldPassCard from "./components/GoldPassCard/GoldPassCard";

function GoldPassSection() {
  return (
    <section
      className="
        overflow-hidden

        rounded-[40px]

        bg-gradient-to-br
        from-sky-100
        via-blue-50
        to-cyan-100

        px-8 py-10
      "
    >
      {/* Heading */}
      <div className="text-center">

        <h2
          className="
            text-[42px]
            font-bold

            leading-tight

            text-(--color-text-main)
          "
        >
          Get Additional 20% OFF
          <br />
          with GOLD PASS
        </h2>

        <p
          className="
            mx-auto mt-4

            max-w-2xl

            text-[15px]
            font-medium

            leading-7

            text-(--color-text-secondary)
          "
        >
          Premium handcrafted Sambalpuri collections with exclusive
          member discounts and early access benefits.
        </p>

      </div>

      {/* Cards */}
      <div
        className="
          mt-10

          flex flex-wrap items-start justify-center gap-5
        "
      >
        {goldPassData.map((product) => (
          <div
            key={product.id}
            className="w-[235px]"
          >
            <GoldPassCard product={product} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default GoldPassSection;