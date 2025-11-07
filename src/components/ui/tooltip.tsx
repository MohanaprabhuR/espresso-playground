"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

type CustomTooltipContentProps = React.ComponentProps<
  typeof TooltipPrimitive.Content
> & {
  resize?: boolean;
  arrow?: boolean;
};

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  resize = true,
  arrow = true,
  ...props
}: CustomTooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "group relative bg-primary text-primary-foreground shadow-sm animate-in fade-in-0 zoom-in-95  " +
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 " +
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 " +
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 " +
            "z-50 origin-(--radix-tooltip-content-transform-origin) rounded-lg px-2 py-[5px] " +
            "text-base font-normal tracking-4 flex items-center gap-x-1.5 ",
          resize ? "w-full max-w-40 leading-relaxed" : "w-fit leading-loose",
          className
        )}
        {...props}
      >
        {children}

        {arrow && (
          <span
            className={cn(
              "absolute text-primary",
              "group-data-[side=top]:-bottom-[9px] group-data-[side=top]:left-1/2 group-data-[side=top]:-translate-x-1/2 group-data-[side=top]:-rotate-90",
              "group-data-[side=bottom]:-top-[9px] group-data-[side=bottom]:left-1/2 group-data-[side=bottom]:-translate-x-1/2 group-data-[side=bottom]:rotate-90",
              "group-data-[side=left]:-right-[5px] group-data-[side=left]:top-1/2 group-data-[side=left]:-translate-y-1/2 group-data-[side=left]:-rotate-180",
              "group-data-[side=right]:-left-[5px] group-data-[side=right]:top-1/2 group-data-[side=right]:-translate-y-1/2 group-data-[side=right]:rotate-0"
            )}
          >
            <svg
              width="5"
              height="13"
              viewBox="0 0 5 13"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 1.35344C5 -3.88012 5 16.8808 5 11.6463C5 9.7166 5.39611e-08 7.9069 2.14575e-07 6.49985C3.34598e-08 5.09281 5 3.26252 5 1.35344Z" />
            </svg>
          </span>
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
