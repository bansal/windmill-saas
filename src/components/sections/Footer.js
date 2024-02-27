/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { cn } from "@/lib/utils";

export function Footer({ copyright, logo, links, social, ...rest }) {
  return (
    <footer className="bg-base-100 dark:bg-base-900 pt-6" {...rest}>
      <div className="container px-4 mx-auto">
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-center gap-4 py-6"
          )}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 dark:invert"
          />
          <div className="flex flex-row gap-4 text-sm">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                {link.label}
              </Link>
            ))}
          </div>
          <SocialLinks links={social} />
        </div>
        <div className="border-t border-base py-4 text-center flex justify-between">
          <p className="text-sm">&copy; {copyright}</p>
          <a href="https://bansal.io" className="text-sm text-muted italic">
            Themed by Bansal
          </a>
        </div>
      </div>
    </footer>
  );
}
