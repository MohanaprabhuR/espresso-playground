"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inputGroupVariants = cva(
  "group/input-group relative outline-none flex w-full items-center rounded-md border border-transparent  transition-[color,box-shadow] has-[>[data-align=inline-start]]:[&>input]:pl-2 has-[>[data-align=inline-end]]:[&>input]:pr-2 has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
  {
    variants: {
      variant: {
        default:
          "has-[>textarea]:h-auto bg-secondary hover:bg-accent has-[[data-slot=input-group-control]:active]:bg-transparent has-[[data-slot=input-group-control]:active]:border-primary/50 has-[[data-slot=input-group-control]:active]:shadow-lg has-[[data-slot=input-group-control]:focus]:border has-[[data-slot=input-group-control]:focus]:border-primary/50 has-[[data-slot=input-group-control]:focus]:shadow-lg has-[[data-slot=input-group-control]:focus]:bg-white has-[[data-slot=input-group-control]:focus-visible]:border-primary/50 has-[[data-slot=input-group-control]:focus]:text-accent-foreground has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0 has-[[data-slot=input-group-control]:focus-visible]:bg-transparent has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive",
        outline:
          "border border-input bg-background text-secondary-foreground hover:border-primary/25 has-[[data-slot=input-group-control]:active]:border-primary/50 has-[[data-slot=input-group-control]:active]:bg-background has-[[data-slot=input-group-control]:active]:shadow-lg focus-border has-[[data-slot=input-group-control]:focus]:border-primary/50 has-[[data-slot=input-group-control]:focus]:text-accent-foreground has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0 has-[[data-slot=input-group-control]:focus-visible]:border-primary/50 has-[[data-slot=input-group-control]:focus-visible]:bg-transparent",
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
      "bg-success text-accent-foreground hover:bg-success active:bg-success focus:border-success-border focus:bg-success",
    warning:
      "bg-warning text-accent-foreground hover:bg-warning active:bg-warning focus:border-warning-border focus:bg-warning",
    error:
      "bg-error text-accent-foreground hover:bg-error active:bg-error focus:border-error-border focus:bg-error",
  },
  outline: {
    default: "",
    success:
      "border-success-border hover:border-success-border active:border-success-border focus:border-success-border disabled:border-transparent",
    warning:
      "border-warning-border hover:border-warning-border active:border-warning-border focus:border-warning-border disabled:border-transparent",
    error:
      "border-error-border hover:border-error-border active:border-error-border focus:border-error-border disabled:border-transparent",
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
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:bg-primary/3 group-data-[disabled=true]/input-group:cursor-not-allowed",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-2 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "order-last pr-2 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-2 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "order-last w-full justify-start px-2 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
);

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
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
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-xs":
          "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
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
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 active:shadow-none active:bg-transparent focus:border-0 focus:shadow-none",
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
    sm: "min-h-[72px] px-2 py-1.5 text-sm",
    md: "min-h-[102px] px-3 py-2.5 text-base",
    lg: "min-h-[126px] px-3.5 py-3 text-lg rounded-xl",
  };

  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-t rounded-b-none border-transparent bg-transparent  shadow-none focus-visible:ring-0 active:border-0 focus:border-0 active:shadow-none focus:shadow-none",
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
