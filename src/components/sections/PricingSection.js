/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeading } from "#/SectionHeading";
import { PricingCard } from "#/cards";

export function PricingSection({ title, description, badge, paketi, ...rest }) {
  const [tenure, setTenure] = React.useState("yearly");
  return (
    <section
      className="bg-base-100 dark:bg-base-900 pt-12 md:pt-24 lg:pt-24"
      {...rest}
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="max-w-5xl mx-auto grid mt-5 grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {paketi.map((price, index) => (
            <PricingCard key={index} {...price} tenure={tenure} />
          ))}
        </div>
      </div>
    </section>
  );
}
