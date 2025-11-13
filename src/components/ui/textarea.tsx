import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "flex w-full rounded-lg  placeholder:text-primary/50   font-normal disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-primary/3 disabled:text-primary/20 disabled:border-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-accent-foreground outline outline-1 -outline-offset-1 outline-transparent hover:bg-accent active:outline active:outline-primary/50 active:placeholder:text-accent-foreground active:text-accent-foreground focus:bg-transparent focus:outline focus:shadow-2xs focus:outline-primary/50 focus-visible:ring-2 focus-visible:ring-ring",
        outline:
          "outline outline-1 -outline-offset-1 hover:outline-primary/20 active:outline-primary/50 active:placeholder:text-accent-foreground active:text-accent-foreground bg-transparent text-accent-foreground focus:outline focus:shadow-2xs focus:outline-primary/50 focus-visible:ring-2 focus-visible:ring-ring",
        ghost:
          "bg-transparent outline outline-1 -outline-offset-1 outline-transparent text-accent-foreground active:text-accent-foreground active:placeholder:text-accent-foreground focus:outline focus:shadow-2xs focus:outline-primary/50 focus-visible:ring-2 focus-visible:ring-ring",
      },
      size: {
        sm: "min-h-[72px] h-full px-2 py-1.5 text-sm leading-normal tracking-4",
        md: "min-h-[102px] px-3 py-2.5 text-base rounded-xl leading-normal tracking-4",
        lg: "min-h-[126px] px-3.5 py-3 text-lg rounded-xl leading-normal tracking-4",
      },
      state: {
        default: "",
        success: "",
        error: "",
        warning: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      state: "default",
    },
    compoundVariants: [
      {
        state: "success",
        variant: ["default", "ghost"],
        className: "bg-success text-accent-foreground hover:bg-success",
      },
      {
        state: "success",
        variant: "outline",
        className:
          "outline-success-border text-accent-foreground hover:outline-success-border",
      },

      {
        state: "error",
        variant: ["default", "ghost"],
        className: "bg-error text-accent-foreground hover:bg-error",
      },
      {
        state: "error",
        variant: "outline",
        className:
          "outline-error-border text-accent-foreground hover:outline-error-border",
      },

      {
        state: "warning",
        variant: ["default", "ghost"],
        className: "bg-warning text-accent-foreground hover:bg-warning",
      },
      {
        state: "warning",
        variant: "outline",
        className:
          "outline-warning-border text-accent-foreground hover:outline-warning-border",
      },
    ],
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, state, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        aria-invalid={state === "error" ? true : undefined}
        className={cn(textareaVariants({ variant, size, state }), className)}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
