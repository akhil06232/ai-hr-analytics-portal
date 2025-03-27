
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary",
        outline: "border border-primary text-primary",
        success: "bg-green-500/10 text-green-600",
        warning: "bg-yellow-500/10 text-yellow-600",
        error: "bg-red-500/10 text-red-600",
        neutral: "bg-gray-200/80 text-gray-800",
      },
      size: {
        default: "text-xs px-2.5 py-0.5",
        sm: "text-[10px] px-2 py-0.5",
        lg: "text-sm px-3 py-1",
      },
      animation: {
        none: "",
        pulse: "animate-pulse-soft",
        fade: "animate-fade-in",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    }
  }
);

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  label?: string;
  icon?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, animation, label, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, animation }), className)}
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {label}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
