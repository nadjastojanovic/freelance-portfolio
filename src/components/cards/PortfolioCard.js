// src/components/cards/PortfolioCard.js
import { Icon } from "@iconify/react";
import { Button } from "../base";
import { cn } from "@/lib/utils";

export function PortfolioCard({
  tag,
  title,
  description,
  image,
  url,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col bg-white dark:bg-base-900 rounded-xl overflow-hidden shadow-lg",
        className
      )}
    >
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-medium text-primary-500 mb-2 uppercase">
          {tag}
        </span>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-sm text-muted flex-grow">{description}</p>
        <Button
          href={url}
          target="_blank"
          label="Pogledaj sajt"
          icon="tabler:external-link"
          variant="dark"
          className="mt-4 self-start"
        />
      </div>
    </div>
  );
}
