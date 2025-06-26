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
            src="./logo-full.png"
            alt="logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 dark:invert"
          />
          <SocialLinks links={social} />
        </div>
        
        <div className="border-t border-base py-4 text-center flex justify-between">
          <p className="text-sm">&copy; {copyright}</p>
        </div>
      </div>
    </footer>
  );
}
