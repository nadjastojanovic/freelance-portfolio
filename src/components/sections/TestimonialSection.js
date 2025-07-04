/* eslint-disable @next/next/no-img-element */
import { SectionHeading } from "#/SectionHeading";
import { TestimonialCard } from "#/cards";
import { Button } from "#/base";

export function TestimonialSection({
  title,
  description,
  badge,
  testimonials,
  button,
  ...rest
}) {
  return (
    <section
      className="bg-base-100 dark:bg-base-900 py-12 md:py-24 lg:py-24"
      {...rest}
    >
      <div className="px-48 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
          {testimonials &&
            testimonials.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
}
