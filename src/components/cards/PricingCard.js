import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button } from "../base";

export const PricingCard = ({
  tenure = "monthly",
  name,
  korisnik,
  value,
  unit,
  features,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-start items-start p-6 rounded-xl bg-white dark:bg-base-950",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon icon={icon} className="size-5" />
        <h5 className="text-title font-medium text-xl">{name}</h5>
      </div>
      <p className="my-2">{korisnik}</p>
      <div className="w-full border-b border-base my-6"></div>
      <div className="inline-flex gap-1 items-baseline">
        <h2 className="text-5xl font-semibold leading-none text-title">
          {value[tenure]}
        </h2>
        <span className="text-2xl text-muted">€</span>
        <span className="text-sm text-muted">{unit}</span>
      </div>
      <ul className="flex flex-col gap-2 my-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Icon icon="tabler:check" className="size-5 text-primary-500 " />{" "}
            <span className="text-sm text-body">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
