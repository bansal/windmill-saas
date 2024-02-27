import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Tabs = React.forwardRef(
  ({ size = "small", value, options = [], onChange }, forwardedRef) => {
    return (
      <div
        className="inline-flex bg-base-200 dark:bg-base-800 rounded-full p-1"
        ref={forwardedRef}
      >
        <div className="inline-flex items-center relative isolate">
          <div
            className="absolute h-full bg-white dark:bg-base-950  rounded-full duration-200 ease-linear shadow"
            style={{
              width: `${100 / options.length}%`,
              left: `calc(${options.indexOf(value) * (100 / options.length)}%)`,
              zIndex: -1,
            }}
          ></div>
          {options.map((option, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-2 bg-transparent font-medium text-center  dark:text-base-400",
                {
                  "text-sm px-6 py-4": size === "base",
                  "text-sm px-4 py-2": size === "small",
                }
              )}
              onClick={() => {
                onChange && onChange(option);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
);
Tabs.displayName = "Tabs";
