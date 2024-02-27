/* eslint-disable @next/next/no-img-element */
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";
import { cn } from "@/lib/utils";

export function HeroSection({
  badge,
  title,
  description,
  buttons,
  image,
  clientsLabel,
  clients,
  ...rest
}) {
  return (
    <section {...rest}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-32 pb-12">
            <Badge {...badge} />
            <h1 className="text-6xl font-display font-semibold title-gradient">
              {title}
            </h1>
            <p className="text-xl">{description}</p>
            {buttons.length > 0 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} />
                ))}
              </div>
            )}
          </div>
          <div>
            <img
              src={image.src}
              alt={image.alt}
              className={cn("w-full h-auto", image.className)}
            />
          </div>
          <div className="text-sm">{clientsLabel}</div>
          <Brands clients={clients} />
        </div>
      </div>
    </section>
  );
}
