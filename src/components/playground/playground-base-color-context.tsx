"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

export const playgroundBaseColors = [
  "default",
  "blue",
  "green",
  "amber",
  "red",
  "violet",
] as const;

export type PlaygroundBaseColor = (typeof playgroundBaseColors)[number];

export const baseColorLabels: Record<PlaygroundBaseColor, string> = {
  default: "Neutral",
  blue: "Blue",
  green: "Green",
  amber: "Amber",
  red: "Red",
  violet: "Violet",
};

export const baseColorDots: Record<PlaygroundBaseColor, string> = {
  default: "bg-muted-foreground/60",
  blue: "bg-blue-500",
  green: "bg-green-500",
  amber: "bg-amber-500",
  red: "bg-red-500",
  violet: "bg-violet-500",
};

const STORAGE_KEY = "playground-base-color";
const RADIUS_STORAGE_KEY = "playground-radius";

export const playgroundRadiusOptions = [
  "default",
  "none",
  "small",
  "medium",
  "large",
] as const;

export type PlaygroundRadius = (typeof playgroundRadiusOptions)[number];

export const radiusLabels: Record<PlaygroundRadius, string> = {
  default: "Default",
  none: "None",
  small: "Small",
  medium: "Medium",
  large: "Large",
};

function getBaseColorStyle(
  baseColor: PlaygroundBaseColor,
): CSSProperties | undefined {
  if (baseColor === "default") return undefined;

  return {
    "--primary": `var(--${baseColor}-primary)`,
    "--primary-foreground": `var(--${baseColor}-primary-foreground)`,
    "--secondary": `var(--${baseColor}-secondary)`,
    "--secondary-foreground": `var(--${baseColor}-secondary-foreground)`,
    "--border": `var(--${baseColor}-border)`,
    "--ring": `var(--${baseColor}-ring)`,
    "--accent": `var(--${baseColor}-secondary)`,
    "--accent-foreground": `var(--${baseColor}-secondary-foreground)`,
  } as CSSProperties;
}

function getRadiusStyle(radius: PlaygroundRadius): CSSProperties | undefined {
  if (radius === "default") return undefined;

  if (radius === "none") {
    return {
      "--radius": "0rem",
      "--radius-xs": "0rem",
      "--radius-sm": "0rem",
      "--radius-md": "0rem",
      "--radius-md-plus": "0rem",
      "--radius-lg": "0rem",
      "--radius-lg-plus": "0rem",
      "--radius-xl": "0rem",
      "--radius-2xl": "0rem",
      "--radius-3xl": "0rem",
      "--radius-4xl": "0rem",
      "--radius-5xl": "0rem",
      "--radius-6xl": "0rem",
    } as CSSProperties;
  }

  if (radius === "small") {
    return {
      "--radius": "0.25rem",
      "--radius-xs": "0.125rem",
      "--radius-sm": "0.1875rem",
      "--radius-md": "0.25rem",
      "--radius-md-plus": "0.3125rem",
      "--radius-lg": "0.375rem",
      "--radius-lg-plus": "0.4375rem",
      "--radius-xl": "0.5rem",
      "--radius-2xl": "0.625rem",
      "--radius-3xl": "0.75rem",
      "--radius-4xl": "0.875rem",
      "--radius-5xl": "1rem",
      "--radius-6xl": "3rem",
    } as CSSProperties;
  }

  if (radius === "medium") {
    return {
      "--radius": "0.5rem",
      "--radius-xs": "0.25rem",
      "--radius-sm": "0.3125rem",
      "--radius-md": "0.375rem",
      "--radius-md-plus": "0.4375rem",
      "--radius-lg": "0.5rem",
      "--radius-lg-plus": "0.625rem",
      "--radius-xl": "0.75rem",
      "--radius-2xl": "0.875rem",
      "--radius-3xl": "1rem",
      "--radius-4xl": "1.125rem",
      "--radius-5xl": "1.25rem",
      "--radius-6xl": "4rem",
    } as CSSProperties;
  }

  return {
    "--radius": "0.75rem",
    "--radius-xs": "0.375rem",
    "--radius-sm": "0.5rem",
    "--radius-md": "0.625rem",
    "--radius-md-plus": "0.75rem",
    "--radius-lg": "0.875rem",
    "--radius-lg-plus": "1rem",
    "--radius-xl": "1.125rem",
    "--radius-2xl": "1.25rem",
    "--radius-3xl": "1.375rem",
    "--radius-4xl": "1.5rem",
    "--radius-5xl": "1.75rem",
    "--radius-6xl": "6rem",
  } as CSSProperties;
}

type PlaygroundBaseColorContextValue = {
  baseColor: PlaygroundBaseColor;
  setBaseColor: (color: PlaygroundBaseColor) => void;
  radius: PlaygroundRadius;
  setRadius: (radius: PlaygroundRadius) => void;
  baseColorStyle: CSSProperties | undefined;
};

const PlaygroundBaseColorContext =
  createContext<PlaygroundBaseColorContextValue | null>(null);

export function PlaygroundBaseColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [baseColor, setBaseColor] = useState<PlaygroundBaseColor>("default");
  const [radius, setRadius] = useState<PlaygroundRadius>("default");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedColor = window.localStorage.getItem(STORAGE_KEY);
    if (
      storedColor &&
      playgroundBaseColors.includes(storedColor as PlaygroundBaseColor)
    ) {
      setBaseColor(storedColor as PlaygroundBaseColor);
    }

    const storedRadius = window.localStorage.getItem(RADIUS_STORAGE_KEY);
    if (
      storedRadius &&
      playgroundRadiusOptions.includes(storedRadius as PlaygroundRadius)
    ) {
      setRadius(storedRadius as PlaygroundRadius);
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, baseColor);
  }, [baseColor, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(RADIUS_STORAGE_KEY, radius);
  }, [radius, hydrated]);

  const value = useMemo(
    () => ({
      baseColor,
      setBaseColor,
      radius,
      setRadius,
      baseColorStyle: {
        ...(getBaseColorStyle(baseColor) ?? {}),
        ...(getRadiusStyle(radius) ?? {}),
      },
    }),
    [baseColor, radius],
  );

  return (
    <PlaygroundBaseColorContext.Provider value={value}>
      {children}
    </PlaygroundBaseColorContext.Provider>
  );
}

export function usePlaygroundBaseColor() {
  const ctx = useContext(PlaygroundBaseColorContext);
  if (!ctx) {
    throw new Error(
      "usePlaygroundBaseColor must be used within PlaygroundBaseColorProvider",
    );
  }
  return ctx;
}
