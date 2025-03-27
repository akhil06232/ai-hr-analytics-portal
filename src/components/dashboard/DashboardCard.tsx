
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui-elements/Badge';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  badge?: {
    label: string;
    variant?: "default" | "outline" | "success" | "warning" | "error" | "neutral";
  };
  className?: string;
  contentClassName?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  children,
  icon,
  badge,
  className,
  contentClassName,
  isLoading = false,
  onClick,
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl bg-white border border-border/40 shadow-card overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:border-border/60",
        onClick && "cursor-pointer",
        isLoading && "opacity-70",
        className
      )}
      onClick={onClick}
    >
      <div className="px-5 py-4 border-b border-border/60 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon && (
            <div className="text-primary/80">
              {icon}
            </div>
          )}
          <h3 className="font-medium text-sm">{title}</h3>
        </div>
        {badge && (
          <Badge 
            label={badge.label} 
            variant={badge.variant || "default"} 
            size="sm"
          />
        )}
      </div>
      <div className={cn("p-5", contentClassName)}>
        {isLoading ? (
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
