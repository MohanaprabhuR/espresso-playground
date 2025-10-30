"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number;
  intervals?: number;
  square?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  showLabel?: boolean;
  children?: React.ReactNode;
}

const sizeMap = {
  xs: "h-0.5",
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

function Progress({
  className,
  value,
  intervals,
  square = false,
  size = "sm",
  showLabel = false,
  children,
  ...props
}: ProgressProps) {
  const heightClass = sizeMap[size];

  return (
    <div className="flex flex-col gap-1 w-full">
      {showLabel && children && (
        <Label className={cn("flex justify-between items-center")}>
          <div className="flex items-center gap-x-2 ">{children}</div>
          <span className="font-medium text-muted-foreground tracking-2 leading-loose">
            {value}%
          </span>
        </Label>
      )}

      {!intervals ? (
        <ProgressPrimitive.Root
          data-slot="progress"
          className={cn(
            "bg-secondary relative w-full overflow-hidden",
            heightClass,
            square ? "rounded-3xl" : "rounded-3xl",
            className
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className={cn(
              "bg-primary/96 h-full w-full flex-1 transition-all",
              square
                ? value >= 100
                  ? "rounded-none"
                  : "rounded-l-3xl rounded-r-none"
                : "rounded-3xl "
            )}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
          />
        </ProgressPrimitive.Root>
      ) : (
        <ProgressPrimitive.Root
          data-slot="progress"
          className={cn("flex gap-1 w-full", heightClass, className)}
          {...props}
        >
          {Array.from({ length: intervals }).map((_, i) => {
            const segmentSize = 100 / intervals;
            const filledSegments = Math.floor(value / segmentSize);
            const isFilled = i < filledSegments;
            let roundedClass = "";
            if (!square) {
              roundedClass = "rounded-3xl";
            } else {
              if (i === 0) roundedClass = "rounded-l-3xl";
              else if (i === intervals - 1) roundedClass = "rounded-r-3xl";
            }

            return (
              <div
                key={i}
                className={cn(
                  "flex-1 transition-colors duration-300",
                  isFilled ? "bg-primary/96" : "bg-secondary",
                  roundedClass
                )}
              />
            );
          })}
        </ProgressPrimitive.Root>
      )}
    </div>
  );
}

export { Progress };
