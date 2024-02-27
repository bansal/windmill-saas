/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

export const Brands = ({ clients, className, ...rest }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-wrap justify-center items-center gap-px",
        className
      )}
      {...rest}
    >
      {clients.map((client, index) => (
        <img
          key={index}
          src={client.src}
          alt={client.name}
          className="h-7 filter grayscale opacity-70 hover:opacity-100 hover:filter-none m-4 md:m-8"
        />
      ))}
    </div>
  );
};
