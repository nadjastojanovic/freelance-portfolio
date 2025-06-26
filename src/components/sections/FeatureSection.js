import { SectionHeading } from "#/SectionHeading";
import { Brands } from "#/Brands";
import { FeatureCard } from "../cards/FeatureCard";

export function FeatureSection({
  title,
  description,
  badge,
  features,
  cmsLabel,
  cms,
  ...rest
}) {
  return (
    <section className="bg-base-100 dark:bg-base-900 pt-24 pb-6" {...rest}>
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="text-md text-center">{cmsLabel}</div>
        <Brands cms={cms} />
      </div>
    </section>
  );
}
