import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export function Badge({
  label,
  href,
  icon,
  leading = false,
  className,
  children,
  ...rest
}) {
  const Tag = href ? "a" : "span";
  return (
    <Tag
      href={href}
      className={cn(
        "group inline-flex gap-2 items-center rounded-2xl bg-primary-100 dark:bg-primary-950 text-primary-500 dark:text-primary-300 text-md px-4 py-2 leading-none ",
        href &&
          "cursor-pointer hover:bg-primary-200 dark:hover:bg-primary-800 transition duration-200 ease-in-out",
        className
      )}
      {...rest}
    >
      {leading && <Icon icon={icon} className="size-5" />}
      {label}
      {children}
      {!leading && <Icon icon={icon} className="size-5" />}
    </Tag>
  );
}
