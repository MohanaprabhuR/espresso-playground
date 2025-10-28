"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

type TabVariant = "ghost" | "outline" | "subtle" | "browser" | "underline";
type TabSize = "sm" | "md";
type TabOrientation = "horizontal" | "vertical";

interface TabsContextValue {
  variant: TabVariant;
  size: TabSize;
  orientation: TabOrientation;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(
  undefined
);

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  variant?: TabVariant;
  size?: TabSize;
  orientation?: TabOrientation;
}

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

function Tabs({
  className,
  variant = "subtle",
  size = "sm",
  orientation = "horizontal",
  ...props
}: TabsProps) {
  return (
    <TabsContext.Provider value={{ variant, size, orientation }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn(
          orientation === "horizontal"
            ? "flex flex-col"
            : "flex flex-row items-center",
          className
        )}
        orientation={orientation}
        {...props}
      />
    </TabsContext.Provider>
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsList must be used within Tabs");

  const { variant, orientation } = context;

  const baseOrientation =
    orientation === "horizontal" ? "flex flex-row" : "flex flex-col ";

  const variantClasses: Record<TabVariant, string> = {
    subtle: cn(
      "bg-secondary text-muted-foreground rounded-lg p-px gap-1",
      baseOrientation
    ),
    outline: cn(
      "rounded-lg bg-background border border-accent text-muted-foreground p-px gap-1",
      baseOrientation
    ),
    underline: cn(
      "bg-background text-muted-foreground p-px flex border-b border-accent gap-1",
      orientation === "vertical" && "flex-col border-b-0 border-r"
    ),
    ghost: cn(
      "bg-background text-muted-foreground rounded-lg p-px gap-1",
      baseOrientation
    ),
    browser: cn(
      "bg-background text-muted-foreground gap-1 relative border-accent",
      baseOrientation,
      orientation === "horizontal"
        ? "rounded-t-md after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:w-full after:bg-accent"
        : "rounded-l-md after:absolute after:top-0 after:bottom-0 after:right-0 after:w-px after:h-full after:bg-accent"
    ),
  };

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(variantClasses[variant], "w-fit", className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const { variant, size, orientation } = context;

  const variantClasses: Record<TabVariant, string> = {
    subtle:
      "rounded-[7px] data-[state=active]:bg-background dark:data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-sm",
    outline:
      "rounded-[7px] data-[state=active]:bg-background dark:data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-sm",
    underline: cn(
      "relative after:absolute after:bg-primary after:scale-x-0 data-[state=active]:after:scale-x-100 data-[state=active]:text-primary",
      orientation === "horizontal"
        ? "after:left-0 after:right-0 after:-bottom-0.5 after:h-px"
        : "after:top-0 after:bottom-0 after:-right-0.5 after:w-px"
    ),
    ghost:
      "bg-background data-[state=active]:bg-background dark:data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-[7px]",
    browser: cn(
      "relative border border-background data-[state=active]:z-10 data-[state=active]:bg-background data-[state=active]:text-primary",
      orientation === "horizontal"
        ? "data-[state=active]:rounded-t-md data-[state=active]:border-accent data-[state=active]:border-b-transparent after:absolute after:left-0 after:right-0 after:-bottom-px after:h-px after:bg-background"
        : "data-[state=active]:rounded-l-md data-[state=active]:border-accent data-[state=active]:border-r-transparent after:absolute after:top-0 after:bottom-0 after:-right-px after:w-px after:bg-background"
    ),
  };

  const sizeClasses: Record<TabSize, string> = {
    sm: "px-2 py-[5px] text-base font-normal tracking-4",
    md: "px-2.5 py-2 text-lg font-medium tracking-2",
  };

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "focus-visible:outline-none inline-flex items-center justify-center gap-2 whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");

  const { size } = context;

  const sizeClasses: Record<TabSize, string> = {
    sm: "p-2",
    md: "p-2.5",
  };

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 outline-none text-left font-normal tracking-4 text-base",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
