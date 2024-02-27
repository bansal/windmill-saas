/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "#/base";
import { ThemeSwitch } from "#/ThemeSwitch";

export function Header({ logo, links, buttons, className, ...rest }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full bg-base-50/50 dark:bg-base-950/50 backdrop-blur-xl z-10">
      <nav
        className={cn(
          "relative h-14 container px-0 mx-auto border-b border-base flex flex-wrap justify-start  items-center gap-4 lg:gap-8",
          className
        )}
        {...rest}
      >
        <a href={logo.href}>
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto hover:animate-spin dark:invert"
          />
        </a>
        <div
          className={cn(
            "hidden md:block md:w-auto",
            open &&
              "block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl"
          )}
        >
          <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={
                  open
                    ? "text-sm font-normal text-base-600 dark:text-base-400 hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md"
                    : "text-sm font-normal text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300"
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 ml-auto">
          <ThemeSwitch />
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>
        <Button
          icon={open ? "tabler:x" : "tabler:menu-2"}
          color="transparent"
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
        />
      </nav>
    </header>
  );
}
