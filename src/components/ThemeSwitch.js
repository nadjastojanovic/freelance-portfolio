"use client";
import { useTheme } from "next-themes";
import { Button } from "#/base";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      icon={theme === "dark" ? "tabler:moon" : "tabler:sun"}
      color="transparent"
      aria-label={
        theme === "dark"
          ? "Promijenite dezen sajta u svijetlo"
          : "Promijenite dezen sajta u tamno"
      }
      className="p-1"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};
