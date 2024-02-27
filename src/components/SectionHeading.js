import { cn } from "@/lib/utils";
import { Badge, Button } from "./base";

export function SectionHeading({
  align = "center",
  title,
  description,
  badge,
  buttons = [],
  ...rest
}) {
  const alignClass = {
    center: "items-center text-center mx-auto",
    left: "items-start text-left",
    right: "items-end text-right ml-auto",
  };
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 max-w-3xl",
        alignClass[align]
      )}
      {...rest}
    >
      {badge && <Badge {...badge} />}
      <h2 className="text-4xl lg:text-5xl font-display text-title font-semibold">
        {title}
      </h2>
      <p>{description}</p>
      {buttons.length > 0 && (
        <div
          className={cn("flex justify-center items-center gap-4 mt-8", {
            "justify-center": align === "center",
            "justify-start": align === "left",
            "justify-end": align === "right",
          })}
        >
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>
      )}
    </div>
  );
}
