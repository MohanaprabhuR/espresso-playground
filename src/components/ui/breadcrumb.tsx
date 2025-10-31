"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronIcon } from "../../../public/images/svg/chevronIcon";
import { SlashIcon } from "../../../public/images/svg/slashIcon";
import { BreadcrumbEllipsisIcon } from "../../../public/images/svg/breadcrumbEllipsisIcon";

import { cn } from "@/lib/utils";
type BreadcrumbSize = "sm" | "md";
type SeparatorType = "chevron" | "slash";

const BreadcrumbContext = React.createContext<{ size: BreadcrumbSize }>({
  size: "sm",
});

const breadcrumbSizeMap: Record<BreadcrumbSize, string> = {
  sm: "text-base font-normal tracking-4 [&>svg]:size-4",
  md: "text-lg font-normal tracking-4 [&>svg]:size-5",
};

function Breadcrumb(props: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({
  size = "sm",
  className,
  ...props
}: React.ComponentProps<"ol"> & { size?: BreadcrumbSize }) {
  return (
    <BreadcrumbContext.Provider value={{ size }}>
      <ol
        data-slot="breadcrumb-list"
        className={cn(
          "text-muted-foreground flex flex-wrap items-center  break-words",
          breadcrumbSizeMap[size],
          className
        )}
        {...props}
      />
    </BreadcrumbContext.Provider>
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center ", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  children,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  prefix?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        "transition-colors gap-1.5 px-2 py-1.5 rounded-lg hover:bg-accent leading-loose tracking-4 hover:text-accent-foreground focus:bg-secondary focus:text-accent-foreground focus:shadow-shadow active:bg-transparent active:text-foreground",
        asChild && "inline-flex",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">{children}</span>
    </Comp>
  );
}

function BreadcrumbPage({
  className,
  children,
  ...props
}: React.ComponentProps<"span"> & {
  prefix?: boolean;
}) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "text-foreground leading-loose tracking-4 font-normal inline-flex items-center  gap-1.5 px-2 py-1.5",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function BreadcrumbSeparator({
  type = "chevron",
  children,
  className,
  ...props
}: React.ComponentProps<"li"> & {
  type?: SeparatorType;
}) {
  const Icon = type === "slash" ? SlashIcon : ChevronIcon;

  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("-ml-[1px]", className)}
      {...props}
    >
      {children ?? <Icon />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-5 items-center justify-center", className)}
      {...props}
    >
      <BreadcrumbEllipsisIcon />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
