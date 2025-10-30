"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inputGroupVariants = cva(
  "group/input-group relative outline-none flex w-full items-center border border-transparent transition-[color,box-shadow] has-[>[data-align=inline-start]]:[&>input]:pl-2 has-[>[data-align=inline-end]]:[&>input]:pr-2 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:flex-col",
  {
    variants: {
      variant: {
        default:
          "bg-secondary hover:bg-accent has-[[data-slot=input-group-control]:focus]:border-primary/50 has-[[data-slot=input-group-control]:focus]:shadow-lg has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot][aria-invalid=true]]:border-destructive",
        outline:
          "border border-input bg-background text-secondary-foreground hover:border-primary/25 has-[[data-slot=input-group-control]:focus]:border-primary/50 has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring",
      },
      size: {
        sm: "rounded-lg",
        md: "rounded-lg",
        lg: "rounded-xl",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type VariantType = "default" | "outline";
type StatusType = "default" | "success" | "warning" | "error";

const statusMap: Record<VariantType, Record<StatusType, string>> = {
  default: {
    default: "",
    success:
      "bg-success text-accent-foreground hover:bg-success focus:border-success-border",
    warning:
      "bg-warning text-accent-foreground hover:bg-warning focus:border-warning-border",
    error:
      "bg-error text-accent-foreground hover:bg-error focus:border-error-border",
  },
  outline: {
    default: "",
    success: "border-success-border hover:border-success-border",
    warning: "border-warning-border hover:border-warning-border",
    error: "border-error-border hover:border-error-border",
  },
};

interface InputGroupProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof inputGroupVariants> {
  status?: StatusType;
}

function InputGroup({
  className,
  variant,
  status = "default",
  size = "md",
  ...props
}: InputGroupProps) {
  const statusClasses = statusMap[variant || "default"]?.[status] ?? "";

  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        inputGroupVariants({ variant, size }),
        statusClasses,
        className
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex cursor-text items-center justify-center gap-2 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-2",
        "inline-end": "order-last pr-2",
        "block-start": "order-first w-full justify-start px-2 pt-2",
        "block-end": "order-last w-full justify-start px-2 pb-2",
      },
      size: {
        sm: "text-xs py-1 rounded-md",
        md: "text-sm py-1.5 rounded-lg",
        lg: "text-base py-2 rounded-xl",
      },
    },
    defaultVariants: {
      align: "inline-start",
      size: "md",
    },
  }
);

function InputGroupAddon({
  className,
  align = "inline-start",
  size = "md",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align, size }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) return;
        const input = e.currentTarget.parentElement?.querySelector(
          '[data-slot="input-group-control"]'
        );
        input?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        sm: "h-7 gap-1 px-2 rounded-md [&>svg]:size-3.5",
        md: "h-9 gap-1.5 px-3 rounded-lg [&>svg]:size-4",
        lg: "h-11 px-3.5 gap-2 rounded-xl [&>svg]:size-4.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "md",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  disabled = false,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="input-group-control"
      disabled={disabled}
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 active:shadow-none",
        className
      )}
      {...props}
    />
  );
}

interface InputGroupTextareaProps extends React.ComponentProps<"textarea"> {
  size?: "sm" | "md" | "lg";
}

function InputGroupTextarea({
  className,
  size = "md",
  ...props
}: InputGroupTextareaProps) {
  const sizeClasses = {
    sm: "min-h-[72px] px-2 py-1 text-sm rounded-md",
    md: "min-h-[102px] px-3 py-2 text-base rounded-lg",
    lg: "min-h-[126px] px-4 py-3 text-lg rounded-xl",
  };

  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none border-transparent bg-transparent shadow-none focus-visible:ring-0",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
