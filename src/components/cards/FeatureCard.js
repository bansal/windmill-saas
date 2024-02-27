import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClass,
}) => {
  return (
    <div
      className={cn(
        "flex flex-row justify-start items-start gap-4 p-6 rounded-lg",
        className
      )}
    >
      <Icon
        icon={icon}
        className={cn(
          "size-12 rounded-full p-2 text-primary-500 bg-primary-100 dark:bg-primary-950",
          iconClass
        )}
      />
      <div>
        <h6 className="text-md text-title font-title font-medium">{title}</h6>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
};
