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
      className="bg-base-100 dark:bg-base-900 py-24 min-h-screen"
      {...rest}
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {testimonials &&
            testimonials.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
        </div>
        <div className="text-center mt-12">
          <Button {...button} />
        </div>
      </div>
    </section>
  );
}
