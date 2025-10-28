"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

function CellPrimitive({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { active?: boolean }) {
  return (
    <div
      data-slot="cell-primitive"
      role="cell"
      className={cn(
        "group relative flex  items-center  gap-2   bg-background   transition-all",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CellContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="cell-content"
      className={cn("flex flex-col  gap-0.5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CellTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="cell-content"
      className={cn("text-primary flex gap-1 items-center", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CellSubtext({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="cell-subtext"
      className={cn(
        "text-xs text-muted-foreground leading-4 mt-0.5",
        className
      )}
      {...props}
    />
  );
}

function CellHint({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="cell-hint"
      className={cn(
        "flex items-center gap-1 text-[10px] text-muted-foreground",
        className
      )}
      {...props}
    >
      {/* Dot before text */}
      <span className="inline-block w-0.5 h-0.5 rounded-full bg-muted-foreground/70" />
      <span>{children}</span>
    </div>
  );
}

export { CellPrimitive, CellContent, CellSubtext, CellHint, CellTitle };
