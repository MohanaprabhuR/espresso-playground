"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

type TabVariant = "ghost" | "outline" | "subtle" | "browser" | "underline";
type TabSize = "sm" | "md";
type TabOrientation = "horizontal" | "vertical";

interface TabsContextValue {
  variant: TabVariant;
  size: TabSize;
  orientation: TabOrientation;
  activeTab: string;
  setActiveTab: (value: string) => void;
  registerTab: (value: string, element: HTMLElement) => void;
  unregisterTab: (value: string) => void;
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

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function Tabs({
  className,
  variant = "subtle",
  size = "sm",
  orientation = "horizontal",
  defaultValue,
  value: controlledValue,
  onValueChange,
  ...props
}: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue || "");
  const tabRefs = React.useRef<Map<string, HTMLElement>>(new Map());

  const value = controlledValue !== undefined ? controlledValue : activeTab;

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      setActiveTab(newValue);
      onValueChange?.(newValue);
    },
    [onValueChange]
  );

  const registerTab = React.useCallback(
    (tabValue: string, element: HTMLElement) => {
      tabRefs.current.set(tabValue, element);
    },
    []
  );

  const unregisterTab = React.useCallback((tabValue: string) => {
    tabRefs.current.delete(tabValue);
  }, []);

  return (
    <TabsContext.Provider
      value={{
        variant,
        size,
        orientation,
        activeTab: value,
        setActiveTab: handleValueChange,
        registerTab,
        unregisterTab,
      }}
    >
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn(
          orientation === "horizontal"
            ? "flex flex-col"
            : "flex flex-row items-center",
          className
        )}
        orientation={orientation}
        value={value}
        onValueChange={handleValueChange}
        defaultValue={defaultValue}
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

  const { variant, orientation, activeTab } = context;
  const listRef = React.useRef<HTMLDivElement>(null);

  const [indicatorStyle, setIndicatorStyle] =
    React.useState<React.CSSProperties>({
      left: "0px",
      top: "0px",
      width: variant === "underline" ? "0px" : "0px",
      height: variant === "underline" ? "1px" : "0px",
    });

  React.useLayoutEffect(() => {
    if (!listRef.current) return;

    const activeElement = listRef.current.querySelector(
      `[data-state="active"]`
    ) as HTMLElement;

    if (!activeElement) {
      setIndicatorStyle({
        left: "0px",
        top: "0px",
        width: variant === "underline" ? "0px" : "0px",
        height: variant === "underline" ? "1px" : "0px",
      });
      return;
    }

    const listRect = listRef.current.getBoundingClientRect();
    const activeRect = activeElement.getBoundingClientRect();

    if (orientation === "horizontal") {
      setIndicatorStyle({
        left: `${activeRect.left - listRect.left}px`,
        width:
          variant === "underline"
            ? `${activeRect.width}px`
            : `${activeRect.width}px`,
        height: variant === "underline" ? "1px" : `${activeRect.height}px`,
      });
    } else {
      setIndicatorStyle({
        top: `${activeRect.top - listRect.top}px`,
        width: variant === "underline" ? "1px" : `${activeRect.width}px`,
        height:
          variant === "underline"
            ? `${activeRect.height}px`
            : `${activeRect.height}px`,
      });
    }
  }, [activeTab, orientation, variant]);

  const baseOrientation =
    orientation === "horizontal" ? "flex flex-row" : "flex flex-col";

  const variantClasses: Record<TabVariant, string> = {
    subtle: cn(
      "bg-secondary text-muted-foreground rounded-lg p-px gap-1 flex ",
      baseOrientation
    ),
    outline: cn(
      "rounded-lg bg-background border border-accent text-muted-foreground p-px gap-1 flex ",
      baseOrientation
    ),
    underline: cn(
      "bg-background text-muted-foreground p-px flex border-b border-accent gap-1 w-fit",
      orientation === "vertical" && "flex-col border-b-0 border-r"
    ),
    ghost: cn(
      "bg-background text-muted-foreground rounded-lg p-px gap-1 flex ",
      baseOrientation
    ),
    browser: cn(
      "bg-background text-muted-foreground gap-1 relative border-accent flex relative ",
      baseOrientation,
      orientation === "horizontal"
        ? "rounded-t-lg after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:w-full after:bg-border"
        : "rounded-l-lg after:absolute after:top-0 after:bottom-0 after:right-0 after:w-px after:h-full after:bg-border"
    ),
  };

  const showIndicator = [
    "subtle",
    "outline",
    "ghost",
    "browser",
    "underline",
  ].includes(variant);

  return (
    <TabsPrimitive.List
      ref={listRef}
      data-slot="tabs-list"
      className={cn(variantClasses[variant], "w-fit relative", className)}
      {...props}
    >
      {showIndicator && (
        <div
          className={cn(
            "absolute pointer-events-none transition-all duration-300 ease-out z-0 ",
            variant === "subtle" &&
              "bg-background text-card-foreground rounded-[7px]  dark:bg-accent  shadow-sm",
            variant === "outline" &&
              "bg-background dark:bg-accent rounded-[7px] text-card-foreground  shadow-sm",
            variant === "ghost" &&
              "bg-background dark:bg-accent rounded-[7px]  shadow-sm",
            variant === "browser" &&
              cn(
                "bg-background border",
                orientation === "horizontal"
                  ? "rounded-t-[7px] "
                  : "rounded-l-[7px] "
              ),
            variant === "underline" &&
              cn(
                "bg-foreground",
                orientation === "horizontal" ? "h-px" : "w-px"
              ),
            orientation === "horizontal"
              ? variant === "underline"
                ? "-bottom-px"
                : "h-full"
              : variant === "underline"
                ? "-right-px"
                : "w-full top-0"
          )}
          style={indicatorStyle}
        />
      )}
      {props.children}
    </TabsPrimitive.List>
  );
}

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const { variant, size, orientation, registerTab, unregisterTab } = context;
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (ref.current && props.value) {
      registerTab(props.value, ref.current);
    }
    return () => {
      if (props.value) {
        unregisterTab(props.value);
      }
    };
  }, [props.value, registerTab, unregisterTab]);

  const variantClasses: Record<TabVariant, string> = {
    subtle:
      "rounded-lg data-[state=active]:text-card-foreground transition-colors relative z-10",
    outline:
      "rounded-lg data-[state=active]:text-card-foreground transition-colors relative z-10",
    underline: cn(
      "data-[state=active]:text-foreground transition-colors relative z-10",
      orientation === "horizontal" ? "pb-2" : "pr-2"
    ),
    ghost:
      "data-[state=active]:text-card-foreground transition-colors rounded-lg relative z-10",
    browser: cn(
      "relative border border-transparent data-[state=active]:text-card-foreground transition-colors z-10 after:transition-all after:duration-300 after:ease-out",
      orientation === "horizontal"
        ? " data-[state=active]:border-b-transparent after:absolute after:left-0 after:right-0 after:-bottom-px after:h-px data-[state=active]:after:bg-background"
        : " data-[state=active]:border-r-transparent after:absolute after:top-0 after:bottom-0 after:-right-px after:w-px data-[state=active]:after:bg-background"
    ),
  };

  const sizeClasses: Record<TabSize, string> = {
    sm: "px-3 py-1.5 text-sm font-medium ",
    md: "px-4 py-2 text-base font-medium",
  };

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      data-slot="tabs-trigger"
      className={cn(
        "focus-visible:outline-none  inline-flex tracking-4 leading-loose items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
    sm: "p-4",
    md: "p-6",
  };

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 outline-none text-left font-normal text-sm tracking-4 leading-loose",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
