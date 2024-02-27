import { SectionHeading } from "#/SectionHeading";
import { FeatureCard } from "../cards/FeatureCard";

export function FeatureSection({
  title,
  description,
  badge,
  features,
  ...rest
}) {
  return (
    <section className="bg-base-100 dark:bg-base-900 py-24" {...rest}>
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
      </div>
    </section>
  );
}
