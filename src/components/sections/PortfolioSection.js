// src/components/sections/PortfolioSection.js
import { SectionHeading } from "../SectionHeading";
import { PortfolioCard } from "../cards/PortfolioCard";

export function PortfolioSection({
  title,
  description,
  badge,
  items,
  ...rest
}) {
  return (
    <section
      className="bg-base-100 dark:bg-base-900 py-12 md:py-24 lg:py-24"
      {...rest}
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {items.map((item, i) => (
            <PortfolioCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
