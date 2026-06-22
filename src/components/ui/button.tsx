import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Spinner with dynamic size and animation
const Spinner = ({ size = "default" }: { size?: "sm" | "default" | "lg" }) => {
  const sizeClasses =
    size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
  return (
    <svg
      className={`animate-spin ${sizeClasses} text-current opacity-0 animate-fade-in`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );
};

const buttonVariants = cva(
  // Base Tailwind styles (all buttons share these)
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium select-none " +
    "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          // Primary style
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0",
        destructive:
          // Danger style
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0",
        outline:
          // Outline style
          "border border-border bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:-translate-y-[1px] active:translate-y-0",
        secondary:
          // Secondary (neutral) style
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0",
        ghost:
          // Minimal/ghost button
          "text-foreground hover:bg-accent/50 hover:text-accent-foreground hover:-translate-y-[1px] active:translate-y-0",
        link:
          // Link style
          "text-primary underline-offset-4 hover:underline hover:opacity-80",
      },
      size: {
        default: "h-10 px-5 text-base font-[Poppins] tracking-wide",
        sm: "h-9 px-4 text-sm font-[Poppins] rounded-md",
        lg: "h-12 px-6 text-lg font-[Poppins]",
        icon: "h-10 w-10",
      },
      loading: {
        true: "opacity-80 cursor-wait relative",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size = "default", isLoading = false, children, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, loading: isLoading, className }))}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Spinner size={size} />}
        <span
          className={cn(
            "transition-opacity duration-200",
            isLoading ? "opacity-60" : "opacity-100"
          )}
        >
          {children}
        </span>
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
